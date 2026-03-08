'use client'

const capabilities = [
  {
    number: '01',
    title: 'Distributed Scanning Network',
    description: 'Proprietary infrastructure spanning 500+ monitoring nodes across major piracy vectors. Redundant DNS resolution, proxy detection, and content fingerprinting protocols.',
    specs: ['Real-time indexing', 'Metadata matching', 'Source triangulation']
  },
  {
    number: '02',
    title: 'Machine Learning Classification',
    description: 'Advanced neural networks trained on 10+ years of piracy data. Identifies unauthorized releases with 99.2% precision, filtering false positives automatically.',
    specs: ['Deep fingerprinting', 'Temporal analysis', 'Anomaly detection']
  },
  {
    number: '03',
    title: 'Automated Legal Workflow',
    description: 'Integrated DMCA/takedown automation. Routes incidents through appropriate legal channels with complete chain-of-custody documentation.',
    specs: ['DMCA generation', 'Jurisdiction routing', 'Compliance tracking']
  },
  {
    number: '04',
    title: 'Enterprise Intelligence Dashboard',
    description: 'Real-time incident tracking, predictive modeling, and comparative analytics. Custom reporting tailored to studio release schedules and regional priorities.',
    specs: ['Live visualization', 'Predictive alerts', 'Custom reports']
  },
  {
    number: '05',
    title: 'Global Regional Intelligence',
    description: 'Localized threat analysis for 45+ territories. Identifies regional piracy patterns, emerging platforms, and underground distribution networks.',
    specs: ['Territory-specific data', 'Currency conversion', 'Regional compliance']
  },
  {
    number: '06',
    title: 'Secure Enterprise API',
    description: 'OAuth 2.0 authenticated endpoints with TLS 1.3, rate limiting, and webhook support. Audit logs for all API access and modifications.',
    specs: ['OAuth 2.0', 'TLS 1.3', 'Rate limiting']
  }
]

export default function Features() {
  return (
    <section id="detection" className="py-32 px-6 lg:px-8 bg-background relative">
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0" />

      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section intro */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="font-mono-code text-xs tracking-widest text-primary/80 uppercase">Core Technology</span>
          </div>
          <h2 className="font-display text-5xl leading-[1.2] text-foreground tracking-tight-custom">
            Enterprise-Grade Detection Infrastructure
          </h2>
          <p className="text-lg text-foreground/60 line-height-prose font-light">
            Built from the ground up for studios requiring institutional-level piracy response. Every component designed for scale, precision, and regulatory compliance.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="group space-y-6 pb-8 border-b border-border/20 hover:border-primary/30 transition-colors">
              {/* Number indicator */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <span className="font-display text-lg text-primary">{cap.number}</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-foreground tracking-tight-custom">
                  {cap.title}
                </h3>
                <p className="text-foreground/60 line-height-prose font-light">
                  {cap.description}
                </p>

                {/* Specification tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {cap.specs.map((spec, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1 text-xs font-mono-code bg-primary/5 border border-primary/20 text-primary/70 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
