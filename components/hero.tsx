'use client'

export default function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle technical grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 199, 0, 0.05) 25%, rgba(255, 199, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 199, 0, 0.05) 75%, rgba(255, 199, 0, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 199, 0, 0.05) 25%, rgba(255, 199, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 199, 0, 0.05) 75%, rgba(255, 199, 0, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Intro Label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="font-mono-code text-xs tracking-widest text-primary/80 uppercase">Protecting Cinema Industry</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl lg:text-7xl leading-[1.1] text-foreground tracking-tight-custom">
              Real-Time Detection
              <br />
              <span className="text-primary">of Theatrical Leaks</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="max-w-2xl text-lg text-foreground/70 line-height-prose font-light">
            MovieGuard employs sophisticated scanning algorithms across 500+ known piracy vectors, flagging unauthorized distribution incidents within 90 minutes of theatrical release. Designed exclusively for studios, distributors, and content protection enterprises.
          </p>

          {/* Key Metrics - Professional Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-border/30">
            {[
              { value: '99.2%', label: 'Detection Accuracy', unit: 'verified' },
              { value: '90min', label: 'Average Alert Time', unit: 'from release' },
              { value: '500+', label: 'Active Vectors', unit: 'monitored' },
              { value: '24/7', label: 'Continuous Surveillance', unit: 'live scanning' }
            ].map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl lg:text-4xl text-primary">{metric.value}</span>
                </div>
                <p className="text-sm font-medium text-foreground/60">{metric.label}</p>
                <p className="text-xs font-mono-code text-foreground/40">{metric.unit}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 border border-primary font-mono-code tracking-widest uppercase text-xs">
              Request Enterprise Access
            </button>
            <button className="px-8 py-3 border border-foreground/30 text-foreground font-medium text-sm hover:border-foreground/60 transition-all duration-200 font-mono-code tracking-widest uppercase text-xs">
              View Documentation
            </button>
          </div>

          {/* Trust indicator */}
          <div className="pt-12 border-t border-border/30">
            <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-widest">
              Trusted by 400+ film studios | ISO 27001 certified | SOC 2 Type II compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
