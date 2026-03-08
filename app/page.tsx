'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Dashboard from '@/components/dashboard'
import Impact from '@/components/impact'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <Impact />
      <CTA />
      <Footer />
    </div>
  )
}
