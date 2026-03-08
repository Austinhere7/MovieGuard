'use client'

export default function Impact() {
  const metrics = [
    { label: 'Revenue Protected', value: '$3.2B', sublabel: 'theatrical releases' },
    { label: 'Active Studio Clients', value: '450+', sublabel: 'global studios' },
    { label: 'Detection Accuracy', value: '99.2%', sublabel: 'verified incidents' },
    { label: 'Average Response Time', value: '87 min', sublabel: 'from detection' },
  ]

  const testimonials = [
    {
      quote: 'MovieGuard detected 47 leaks on day one of our blockbuster release. Their team coordinated immediate takedowns, protecting our opening weekend.',
      author: 'James Dawson',
      title: 'VP Distribution',
      studio: 'Universal Pictures',
      initials: 'JD'
    },
    {
      quote: 'The integration with our legal workflow is seamless. We went from manual monitoring to fully automated incident routing in weeks.',
      author: 'Sarah Liu',
      title: 'Chief Anti-Piracy Officer',
      studio: 'Warner Bros',
      initials: 'SL'
    },
    {
      quote: 'Real-time intelligence across markets we couldn\'t monitor manually. MovieGuard gives us visibility into emerging piracy patterns globally.',
      author: 'Michael Chen',
      title: 'Director, Content Protection',
      studio: 'Sony Pictures',
      initials: 'MC'
    },
    {
      quote: 'Their combination of technology and human expertise is exceptional. The platform evolves as new threats emerge.',
      author: 'Elena Rossi',
      title: 'Head of Security',
      studio: 'Paramount',
      initials: 'ER'
    }
  ]

  return (
    <section id="results" className="py-32 px-6 lg:px-8 bg-background relative">
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0" />

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section header */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="font-mono-code text-xs tracking-widest text-primary/80 uppercase">Verified Impact</span>
          </div>
          <h2 className="font-display text-5xl leading-[1.2] text-foreground tracking-tight-custom">
            Protecting Cinema at Scale
          </h2>
          <p className="text-lg text-foreground/60 line-height-prose font-light">
            Since 2022, MovieGuard has partnered with the world's largest studios to protect theatrical releases. Real data from real deployments protecting real cinema.
          </p>
        </div>

        {/* Core metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-b border-border/20 py-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-wider">{metric.label}</p>
              <p className="font-display text-4xl text-primary">{metric.value}</p>
              <p className="text-xs font-mono-code text-foreground/50">{metric.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Studio testimonials */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="font-mono-code text-xs tracking-widest text-primary/80 uppercase">Direct Feedback</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="space-y-6 pb-8 border-b border-border/20 hover:border-primary/30 transition-colors group">
                {/* Quote */}
                <blockquote className="space-y-4">
                  <p className="text-foreground/75 line-height-prose italic font-light">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono-code text-xs font-bold text-primary/80">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                      <p className="text-xs text-foreground/50 font-mono-code">{testimonial.title} • {testimonial.studio}</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="border-t border-border/20 pt-12 space-y-4">
          <p className="text-foreground/60 line-height-prose font-light max-w-2xl">
            MovieGuard operates at the intersection of technology and cinema. We work exclusively with studios, distributors, and content protection organizations committed to preserving theatrical cinema's value in an increasingly digital world.
          </p>
        </div>
      </div>
    </section>
  )
}
