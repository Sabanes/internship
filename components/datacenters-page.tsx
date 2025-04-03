import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Server, Shield, Zap, Wifi, Clock } from "lucide-react"

const DataCentersPage = () => {
  const regions = [
    {
      id: "north-america",
      name: "North America",
      locations: [
        {
          city: "New York",
          country: "USA",
          flag: "🇺🇸",
          features: ["Tier 4 Data Center", "99.999% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-ny.svg",
        },
        {
          city: "Chicago",
          country: "USA",
          flag: "🇺🇸",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-chicago.svg",
        },
        {
          city: "Los Angeles",
          country: "USA",
          flag: "🇺🇸",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-la.svg",
        },
        {
          city: "Toronto",
          country: "Canada",
          flag: "🇨🇦",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-toronto.svg",
        },
      ],
    },
    {
      id: "europe",
      name: "Europe",
      locations: [
        {
          city: "London",
          country: "UK",
          flag: "🇬🇧",
          features: ["Tier 4 Data Center", "99.999% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-london.svg",
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          flag: "🇳🇱",
          features: ["Tier 4 Data Center", "99.999% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-amsterdam.svg",
        },
        {
          city: "Frankfurt",
          country: "Germany",
          flag: "🇩🇪",
          features: ["Tier 4 Data Center", "99.999% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-frankfurt.svg",
        },
        {
          city: "Paris",
          country: "France",
          flag: "🇫🇷",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-paris.svg",
        },
      ],
    },
    {
      id: "asia-pacific",
      name: "Asia Pacific",
      locations: [
        {
          city: "Singapore",
          country: "Singapore",
          flag: "🇸🇬",
          features: ["Tier 4 Data Center", "99.999% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-singapore.svg",
        },
        {
          city: "Tokyo",
          country: "Japan",
          flag: "🇯🇵",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-tokyo.svg",
        },
        {
          city: "Sydney",
          country: "Australia",
          flag: "🇦🇺",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-sydney.svg",
        },
      ],
    },
    {
      id: "other-regions",
      name: "Other Regions",
      locations: [
        {
          city: "São Paulo",
          country: "Brazil",
          flag: "🇧🇷",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-saopaulo.svg",
        },
        {
          city: "Dubai",
          country: "UAE",
          flag: "🇦🇪",
          features: ["Tier 3 Data Center", "99.99% Uptime", "Redundant Power", "Advanced Cooling", "24/7 Security"],
          connectivity: ["10 Gbps Network", "Multiple Carriers", "Low Latency", "DDoS Protection"],
          image: "/datacenter-dubai.svg",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Our Global Data Centers</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Strategically located data centers around the world to provide low-latency, high-performance hosting solutions
          for your business.
        </p>
      </div>

      <div className="mb-16">
        <div className="relative h-[400px]  w-full mb-8">
          <Image src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/wpteg7k5hrhmxm2adfbt" alt="World Map with Data Center Locations" fill className="object-contain rounded-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <Globe className="h-6 w-6 text-cyan-400 mr-2" />
                <CardTitle>13 Locations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Strategically positioned data centers across 4 continents for global coverage.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <Server className="h-6 w-6 text-cyan-400 mr-2" />
                <CardTitle>Tier 3/4 Facilities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Enterprise-grade infrastructure with redundant systems for maximum reliability.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <Shield className="h-6 w-6 text-cyan-400 mr-2" />
                <CardTitle>Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                24/7 physical security, biometric access, and advanced monitoring systems.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <Wifi className="h-6 w-6 text-cyan-400 mr-2" />
                <CardTitle>Connectivity</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Multiple tier-1 network providers with redundant connections for optimal performance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="north-america" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-slate-800 p-0 mb-8">
          {regions.map((region) => (
            <TabsTrigger
              key={region.id}
              value={region.id}
              className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black py-3"
            >
              {region.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {regions.map((region) => (
          <TabsContent key={region.id} value={region.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {region.locations.map((location, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 text-white overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`${location.city} Data Center`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{location.flag}</span>
                      <CardTitle className="text-xl">
                        {location.city}, {location.country}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-cyan-400 mb-2 flex items-center">
                        <Server className="h-4 w-4 mr-1" /> Facility Features
                      </h3>
                      <ul className="space-y-1">
                        {location.features.map((feature, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-cyan-400 mb-2 flex items-center">
                        <Wifi className="h-4 w-4 mr-1" /> Network
                      </h3>
                      <ul className="space-y-1">
                        {location.connectivity.map((item, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <div className="px-6 pb-6">
                    <Link href={`/vps/${location.country.toLowerCase()}`}>
                      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">View VPS Plans</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 bg-slate-800 rounded-lg p-8 border border-slate-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Data Center Specifications</h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            All our data centers meet or exceed these specifications to ensure the highest levels of performance,
            reliability, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Power Infrastructure</h3>
                <p className="text-slate-300 text-sm">
                  Redundant power supplies with UPS and backup generators for uninterrupted operation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                <Server className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Cooling Systems</h3>
                <p className="text-slate-300 text-sm">
                  Advanced cooling technologies to maintain optimal temperature and humidity levels.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Physical Security</h3>
                <p className="text-slate-300 text-sm">
                  24/7 security personnel, CCTV surveillance, biometric access controls, and mantrap entries.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                <Wifi className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Network</h3>
                <p className="text-slate-300 text-sm">
                  Multi-homed network with multiple tier-1 providers and redundant connections.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Uptime</h3>
                <p className="text-slate-300 text-sm">
                  99.99% to 99.999% uptime guarantee depending on the facility tier level.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                <Server className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Fire Protection</h3>
                <p className="text-slate-300 text-sm">
                  Advanced fire detection and suppression systems to protect critical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataCentersPage

