'use client'

export default function CTA() {
  return (
    <section id="enterprise" className="py-32 px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0" />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main container */}
        <div className="grid lg:grid-cols-2 gap-16 items-start border border-border/30 rounded-lg p-12 bg-card/20 relative group hover:border-primary/40 transition-colors">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none rounded-lg" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 199, 0, 0.1) 25%, rgba(255, 199, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 199, 0, 0.1) 75%, rgba(255, 199, 0, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 199, 0, 0.1) 25%, rgba(255, 199, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 199, 0, 0.1) 75%, rgba(255, 199, 0, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }} />

          {/* Left column */}
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="font-mono-code text-xs tracking-widest text-primary/80 uppercase">Get Started</span>
              </div>
              <h2 className="font-display text-4xl leading-[1.2] text-foreground tracking-tight-custom">
                Enterprise Access
              </h2>
            </div>

            <p className="text-lg text-foreground/70 line-height-prose font-light">
              MovieGuard is designed for studios, distributors, and content protection teams requiring institutional-level monitoring. Deployment within 48 hours, zero false positives guarantee.
            </p>

            {/* Key benefits */}
            <div className="space-y-4">
              {[
                { icon: '→', label: 'Immediate deployment', desc: 'Activate monitoring within 48 hours' },
                { icon: '→', label: 'Dedicated support team', desc: 'Enterprise-level incident response' },
                { icon: '→', label: 'Custom integrations', desc: 'API access and workflow automation' },
                { icon: '→', label: 'Compliance certified', desc: 'ISO 27001, SOC 2 Type II verified' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 group/item">
                  <span className="text-primary font-mono-code text-lg flex-shrink-0 group-hover/item:translate-x-1 transition-transform">{benefit.icon}</span>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{benefit.label}</p>
                    <p className="text-sm text-foreground/50">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact section */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col gap-3">
                <button className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 border border-primary font-mono-code tracking-widest uppercase text-xs">
                  Request Demo
                </button>
                <button className="px-6 py-3 border border-foreground/30 text-foreground font-medium text-sm hover:border-foreground/60 transition-all duration-200 font-mono-code tracking-widest uppercase text-xs">
                  Download Tech Specs
                </button>
              </div>
              <p className="text-xs text-foreground/50 font-mono-code">
                or reach out: <span className="text-primary/70">contact@movieguard.io</span>
              </p>
            </div>
          </div>

          {/* Right column - Timeline/process */}
          <div className="relative z-10 space-y-8">
            <h3 className="font-display text-2xl text-foreground tracking-tight-custom">Deployment Process</h3>

            {[
              { step: '01', title: 'Discovery', time: 'Day 1', desc: 'Understand your release calendar, target markets, and specific threats' },
              { step: '02', title: 'Integration', time: 'Day 2', desc: 'Configure monitoring vectors, API endpoints, and alert routing' },
              { step: '03', title: 'Testing', time: 'Day 3', desc: 'Run pre-release simulation, validate detection accuracy' },
              { step: '04', title: 'Go Live', time: 'Release Day', desc: 'Full monitoring activation, dedicated incident support' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-3 pb-6 border-b border-border/20 hover:border-primary/30 transition-colors last:border-b-0 last:pb-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg text-primary/60">{item.step}</span>
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <span className="text-xs font-mono-code text-foreground/40 ml-auto">{item.time}</span>
                </div>
                <p className="text-sm text-foreground/60 pl-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center space-y-3">
          <p className="text-sm text-foreground/50 font-mono-code uppercase tracking-wider">
            Currently serving 450+ studios • 24/7 support • SLA guaranteed uptime
          </p>
        </div>
      </div>
    </section>
  )
}
