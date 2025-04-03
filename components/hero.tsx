import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium VDS <br />
              Virtual Dedicated Servers
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">Reliable & Secure</h2>
            <p className="text-lg text-slate-300">
              Your own Simple, Worry Free & Affordable <br />
              VPS Fully Managed By Experts.
            </p>
            <p className="text-xl">
              Starting at just <span className="text-red-400 font-bold">$3/mo</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-6 text-lg">
                Get Prices
              </Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-8 py-6 text-lg">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full h-[400px]">
              <Image src="/vps-servers.svg" alt="VPS Servers" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

