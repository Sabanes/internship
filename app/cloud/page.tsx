import Navbar from "@/components/navbar"
import CloudSolutionsPage from "@/components/cloud-solutions-page"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cloud Solutions - CloudVPS",
  description: "Enterprise-grade cloud hosting solutions for businesses of all sizes. Scalable, reliable, and secure.",
}

export default function CloudSolutions() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <CloudSolutionsPage />
      <Footer />
    </main>
  )
}

