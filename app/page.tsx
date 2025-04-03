import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WhyChooseUs from "@/components/why-choose-us"
import DataCenters from "@/components/data-centers"
import Clients from "@/components/clients"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <DataCenters />
      <Clients />
      <PricingSection />
      <Footer />
    </main>
  )
}

