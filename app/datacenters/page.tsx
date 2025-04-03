import Navbar from "@/components/navbar"
import DataCentersPage from "@/components/datacenters-page"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Centers - CloudVPS",
  description:
    "Explore our global network of state-of-the-art data centers providing high-performance VPS hosting solutions.",
}

export default function DataCenters() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <DataCentersPage />
      <Footer />
    </main>
  )
}

