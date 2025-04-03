import { Globe } from "lucide-react"
import Image from "next/image"

const DataCenters = () => {
  const regions = [
    { name: "North America", locations: ["New York", "Chicago", "Los Angeles", "Toronto"] },
    { name: "Europe", locations: ["London", "Amsterdam", "Frankfurt", "Paris"] },
    { name: "Asia Pacific", locations: ["Singapore", "Tokyo", "Sydney"] },
    { name: "South America", locations: ["São Paulo"] },
    { name: "Middle East", locations: ["Dubai"] },
  ]

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Data Centers are Located in 13 Regions</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Choose the perfect location for your VPS to ensure low latency and optimal performance for your target
            audience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full">
            <Image src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/wpteg7k5hrhmxm2adfbt" alt="World Map with Data Center Locations" fill className="object-contain" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                <div className="flex items-center mb-3">
                  <Globe className="h-5 w-5 text-cyan-400 mr-2" />
                  <h3 className="text-lg font-bold text-white">{region.name}</h3>
                </div>
                <ul className="space-y-2">
                  {region.locations.map((location, i) => (
                    <li key={i} className="text-slate-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataCenters

