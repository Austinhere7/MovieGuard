'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="space-y-4 col-span-2">
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl tracking-tight-custom text-foreground">MovieGuard</span>
                <span className="text-xs font-mono-code text-foreground/40">Enterprise</span>
              </div>
              <p className="text-xs font-mono-code text-foreground/40">Anti-Piracy Monitoring</p>
            </div>
            <p className="text-sm text-foreground/60 line-height-prose font-light">
              MovieGuard protects theatrical cinema through advanced detection, rapid response, and enterprise-grade monitoring infrastructure.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-xs font-mono-code text-foreground/40 uppercase tracking-widest">Contact</p>
              <p className="text-sm font-mono-code text-primary/70">contact@movieguard.io</p>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-code text-foreground/40 uppercase tracking-widest font-medium">Product</h3>
            <ul className="space-y-3">
              <li><a href="#detection" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Detection</a></li>
              <li><a href="#monitoring" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Monitoring</a></li>
              <li><a href="#results" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Results</a></li>
              <li><a href="#enterprise" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-code text-foreground/40 uppercase tracking-widest font-medium">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Research</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-code text-foreground/40 uppercase tracking-widest font-medium">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Terms</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Security</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20" />

        {/* Bottom section */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left - Copyright & certifications */}
            <div className="space-y-3">
              <p className="text-xs text-foreground/50 font-mono-code">
                &copy; 2024 MovieGuard Inc. All rights reserved. Protecting cinema worldwide.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono-code text-foreground/40">
                <span>ISO 27001</span>
                <span>•</span>
                <span>SOC 2 Type II</span>
                <span>•</span>
                <span>GDPR Compliant</span>
              </div>
            </div>

            {/* Right - Social links */}
            <div className="flex items-center gap-6 justify-start md:justify-end">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-mono-code text-foreground/50 hover:text-primary transition-colors tracking-widest uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
