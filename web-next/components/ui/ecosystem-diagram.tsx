export function EcosystemDiagram() {
  return (
    <div className="w-full max-w-2xl mx-auto select-none">
      {/* Top node */}
      <div className="flex justify-center">
        <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-8 sm:px-14 py-4 text-center font-bold text-cyan-200 text-sm sm:text-base shadow-lg shadow-cyan-500/10 backdrop-blur-sm">
          Daana AI Agents
        </div>
      </div>

      {/* Dashed diagonal arrows */}
      <svg
        width="100%"
        height="64"
        viewBox="0 0 600 64"
        className="overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="eco-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <polygon points="0 0, 8 4, 0 8" fill="rgba(96,165,250,0.65)" />
          </marker>
        </defs>
        <line
          x1="300" y1="2" x2="157" y2="60"
          stroke="rgba(96,165,250,0.55)"
          strokeWidth="2"
          strokeDasharray="8 5"
          markerEnd="url(#eco-arrow)"
        />
        <line
          x1="300" y1="2" x2="443" y2="60"
          stroke="rgba(96,165,250,0.55)"
          strokeWidth="2"
          strokeDasharray="8 5"
          markerEnd="url(#eco-arrow)"
        />
      </svg>

      {/* Two branches */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {/* Left — BI & Pulse & Pixel */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-border/60 bg-muted/30 px-3 sm:px-5 py-3 font-semibold text-xs sm:text-sm text-foreground text-center backdrop-blur-sm">
            BI &amp; Pulse &amp; Pixel
          </div>

          {/* Relational DB dashed box */}
          <div className="rounded-2xl border-2 border-dashed border-border/40 p-4 sm:p-5 flex flex-col gap-3">
            {/* Overlapping ERP / CRM / Plex nodes */}
            <div className="relative h-24">
              <div className="absolute left-0 top-2 rounded-xl border border-border/60 bg-muted/50 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium shadow-sm">
                ERP
              </div>
              <div className="absolute left-5 sm:left-8 top-7 rounded-xl border border-border/60 bg-muted/50 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium shadow-sm z-10">
                CRM
              </div>
              <div className="absolute right-0 top-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-cyan-200 shadow-sm z-20">
                Plex
              </div>
            </div>
            <p className="text-center text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase font-medium">
              Relational DB
            </p>
          </div>
        </div>

        {/* Right — RAG - MD */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-border/60 bg-muted/30 px-3 sm:px-5 py-3 font-semibold text-xs sm:text-sm text-foreground text-center backdrop-blur-sm">
            RAG – MD
          </div>

          {/* Text Knowledge dashed box */}
          <div className="rounded-2xl border-2 border-dashed border-border/40 p-4 sm:p-5 flex flex-col items-center justify-center gap-3 min-h-[136px]">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 sm:px-8 py-3 font-semibold text-xs sm:text-sm text-cyan-200 shadow-sm">
              Daana
            </div>
            <p className="text-center text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase font-medium">
              Text Knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
