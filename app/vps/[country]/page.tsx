import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import VpsLocationPage from "@/components/vps-location-page"
import Footer from "@/components/footer"

type Props = {
  params: { country: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = params.country.toUpperCase()
  return {
    title: `${country} VPS Hosting - CloudVPS`,
    description: `High-performance VPS hosting in ${country}. Choose the perfect plan for your needs.`,
  }
}

export default function CountryVpsPage({ params }: Props) {
  const country = params.country.toUpperCase()

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <VpsLocationPage country={country} />
      <Footer />
    </main>
  )
}

