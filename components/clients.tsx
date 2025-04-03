import Image from "next/image"

const Clients = () => {
  const clients = [
    { name: "TechCorp", logo: "/client-1.svg" },
    { name: "DataSystems", logo: "/client-2.svg" },
    { name: "CloudNine", logo: "/client-3.svg" },
    { name: "InnovateX", logo: "/client-4.svg" },
    { name: "SecureNet", logo: "/client-5.svg" },
    { name: "GlobalTech", logo: "/client-6.svg" },
  ]

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Big Clients</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Trusted by leading companies worldwide for reliable and high-performance VPS hosting.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-cyan-500 transition-all flex items-center justify-center"
            >
              <div className="relative h-16 w-full">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-300">Join hundreds of satisfied customers who trust our VPS hosting solutions.</p>
        </div>
      </div>
    </section>
  )
}

export default Clients

