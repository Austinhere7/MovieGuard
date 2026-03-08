'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-baseline gap-3 group cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-primary opacity-70 group-hover:opacity-100 transition" />
            <span className="font-display text-xl tracking-tight-custom text-foreground">MovieGuard</span>
            <span className="text-xs font-mono-code text-muted-foreground">v1.0</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {[
              { label: 'Detection', href: '#detection' },
              { label: 'Monitoring', href: '#monitoring' },
              { label: 'Results', href: '#results' },
              { label: 'Enterprise', href: '#enterprise' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-foreground/70 hover:text-foreground transition-colors group font-medium tracking-tight-custom"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:inline-flex px-6 py-2 border border-primary/50 text-sm font-medium text-foreground hover:bg-primary/5 transition-all duration-300 font-mono-code">
            Request Demo
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col gap-1.5 items-center justify-center"
          >
            <span className={`w-6 h-0.5 bg-foreground/70 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground/70 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground/70 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-3 border-t border-border/30">
            {[
              { label: 'Detection', href: '#detection' },
              { label: 'Monitoring', href: '#monitoring' },
              { label: 'Results', href: '#results' },
              { label: 'Enterprise', href: '#enterprise' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 border border-primary/50 text-sm font-medium text-foreground hover:bg-primary/5 transition-all duration-300 mt-4">
              Request Demo
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
