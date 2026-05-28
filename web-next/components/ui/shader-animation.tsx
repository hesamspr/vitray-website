'use client'

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }

        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: "low-power",
    })
    // Cap DPR — full-screen fragment shader scales quadratically with pixel count.
    // 1.5 keeps it crisp on Retina without paying for 4× the work.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    container.appendChild(renderer.domElement)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    onResize()
    window.addEventListener("resize", onResize)

    let animationId = 0
    let isVisible = true
    let isTabActive = !document.hidden

    const renderFrame = () => {
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }

    const shouldRun = () => isVisible && isTabActive && !reduceMotion

    const tick = () => {
      animationId = requestAnimationFrame(tick)
      renderFrame()
    }

    const start = () => {
      if (animationId) return
      animationId = requestAnimationFrame(tick)
    }

    const stop = () => {
      if (!animationId) return
      cancelAnimationFrame(animationId)
      animationId = 0
    }

    const sync = () => {
      if (shouldRun()) start()
      else stop()
    }

    // Pause when scrolled off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        sync()
      },
      { threshold: 0 },
    )
    io.observe(container)

    // Pause when tab is hidden
    const onVisibilityChange = () => {
      isTabActive = !document.hidden
      sync()
    }
    document.addEventListener("visibilitychange", onVisibilityChange)

    // Reduced-motion users get a single still frame
    if (reduceMotion) {
      renderFrame()
    } else {
      sync()
    }

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibilityChange)
      window.removeEventListener("resize", onResize)
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0"
      style={{
        background: "#000",
        overflow: "hidden",
      }}
    />
  )
}
