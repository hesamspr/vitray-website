import { ImageResponse } from 'next/og'

export const alt = 'Vitray — Business Intelligence Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #0f172a 100%)',
          color: '#f8fafc',
        }}
      >
        <div style={{ fontSize: 140, fontWeight: 800, letterSpacing: -4 }}>VITRAY</div>
        <div style={{ fontSize: 44, color: '#94a3b8', marginTop: 8 }}>
          Business Intelligence Solutions
        </div>
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            gap: 16,
            fontSize: 28,
            color: '#cbd5e1',
          }}
        >
          <span>Plex</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>Pixel</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>Pulse</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
