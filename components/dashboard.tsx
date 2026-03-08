'use client'

const sampleIncidents = [
  {
    id: 'INC-2024-0847',
    title: 'BLOCKBUSTER-XXL Release',
    detectedAt: '2h 14m',
    sources: 47,
    quality: 'HD 1080p',
    status: 'ACTIVE',
    regions: ['EMEA', 'APAC', 'LATAM'],
    threat: 'CRITICAL'
  },
  {
    id: 'INC-2024-0846',
    title: 'INDIE-THRILLER-2024',
    detectedAt: '5h 32m',
    sources: 12,
    quality: 'CAM',
    status: 'MITIGATED',
    regions: ['AMER'],
    threat: 'MEDIUM'
  },
  {
    id: 'INC-2024-0845',
    title: 'ANIMATION-FEATURE-001',
    detectedAt: '1h 07m',
    sources: 89,
    quality: 'HD+ 2160p',
    status: 'ESCALATED',
    regions: ['GLOBAL'],
    threat: 'CRITICAL'
  },
]

export default function Dashboard() {
  return (
    <section id="monitoring" className="py-32 px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Accent gradient line */}
      <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section header */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="font-mono-code text-xs tracking-widest text-primary/80 uppercase">Live Operations</span>
          </div>
          <h2 className="font-display text-5xl leading-[1.2] text-foreground tracking-tight-custom">
            Real-Time Incident Management
          </h2>
          <p className="text-lg text-foreground/60 line-height-prose font-light">
            Continuous scanning with automated incident classification, severity assessment, and enforcement routing across all theatrical releases.
          </p>
        </div>

        {/* Dashboard container */}
        <div className="relative rounded-lg border border-border/40 bg-card/30 overflow-hidden">
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 199, 0, 0.1) 25%, rgba(255, 199, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 199, 0, 0.1) 75%, rgba(255, 199, 0, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 199, 0, 0.1) 25%, rgba(255, 199, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 199, 0, 0.1) 75%, rgba(255, 199, 0, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }} />

          {/* Dashboard content */}
          <div className="relative z-10 p-8 space-y-8">
            {/* Header stats */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 pb-8 border-b border-border/20">
              <div className="space-y-1">
                <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-wider">Active Events</p>
                <p className="font-display text-3xl text-primary">148</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-wider">This Week</p>
                <p className="font-display text-3xl text-primary">1,247</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-wider">Mitigation Rate</p>
                <p className="font-display text-3xl text-primary">94%</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-wider">Avg Response</p>
                <p className="font-display text-3xl text-primary">87m</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-wider">Revenue Saved</p>
                <p className="font-display text-3xl text-primary">$3.2B</p>
              </div>
            </div>

            {/* Incidents table */}
            <div className="space-y-3">
              {/* Table header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-mono-code text-foreground/40 uppercase tracking-wider border-b border-border/20">
                <div className="col-span-2">Incident ID</div>
                <div className="col-span-3">Title</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1">Sources</div>
                <div className="col-span-2">Quality</div>
                <div className="col-span-2">Threat Level</div>
                <div className="col-span-1">Time</div>
              </div>

              {/* Table rows */}
              {sampleIncidents.map((incident) => (
                <div
                  key={incident.id}
                  className="grid grid-cols-12 gap-4 px-4 py-3 rounded border border-border/20 hover:border-primary/30 bg-background/50 hover:bg-background/80 transition-all group"
                >
                  <div className="col-span-2">
                    <span className="font-mono-code text-xs text-primary/70 group-hover:text-primary">{incident.id}</span>
                  </div>
                  <div className="col-span-3">
                    <p className="font-medium text-foreground/80 truncate">{incident.title}</p>
                  </div>
                  <div className="col-span-1">
                    <span className={`text-xs font-mono-code px-2 py-1 rounded w-fit inline-block ${
                      incident.status === 'CRITICAL' ? 'bg-destructive/10 text-destructive' :
                      incident.status === 'ACTIVE' ? 'bg-primary/10 text-primary' :
                      incident.status === 'MITIGATED' ? 'bg-foreground/10 text-foreground/60' :
                      'bg-primary/10 text-primary'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <p className="text-sm text-foreground/70">{incident.sources}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-mono-code text-xs text-foreground/60">{incident.quality}</p>
                  </div>
                  <div className="col-span-2">
                    <span className={`text-xs font-mono-code px-2 py-1 rounded w-fit inline-block ${
                      incident.threat === 'CRITICAL' ? 'bg-destructive/15 text-destructive/80' :
                      'bg-primary/15 text-primary/80'
                    }`}>
                      {incident.threat}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <p className="text-xs text-foreground/40">{incident.detectedAt}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer action */}
            <div className="pt-4 border-t border-border/20 flex justify-between items-center">
              <p className="text-xs text-foreground/40 font-mono-code">Showing 3 of 148 active incidents • Last updated 2 minutes ago</p>
              <button className="px-4 py-2 text-xs font-mono-code text-primary hover:text-primary/80 border border-primary/30 hover:border-primary/60 rounded transition-all">
                View Full Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
