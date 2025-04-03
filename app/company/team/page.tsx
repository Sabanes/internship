import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Team - Premium VDS",
  description: "Meet the talented team behind Premium VDS - the experts powering your virtual dedicated servers.",
}

export default function OurTeam() {
  const executiveTeam = [
    {
      name: "Michael Chen",
      role: "Chief Executive Officer",
      bio: "Michael co-founded Premium VDS in 2010 with a vision to revolutionize virtual dedicated server hosting. With over 20 years of experience in IT infrastructure and cloud computing, he leads the company's strategic direction and growth initiatives.",
      image: "/team/ceo.svg",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "Sarah oversees all technical operations and infrastructure development at Premium VDS. Her background in distributed systems and network architecture has been instrumental in building our high-performance, reliable hosting platform.",
      image: "/team/cto.svg",
    },
    {
      name: "David Rodriguez",
      role: "Chief Operations Officer",
      bio: "David ensures that Premium VDS delivers exceptional service quality and operational excellence. He manages our global data center operations and leads continuous improvement initiatives across the organization.",
      image: "/team/coo.svg",
    },
  ]

  const departmentLeads = [
    {
      name: "Emily Zhang",
      role: "Director of Engineering",
      bio: "Emily leads our engineering team, overseeing the development and maintenance of our core infrastructure and customer-facing systems. Her focus on automation and reliability has significantly enhanced our platform capabilities.",
      image: "/team/engineering-director.svg",
    },
    {
      name: "James Wilson",
      role: "Head of Customer Success",
      bio: "James and his team ensure that every customer receives exceptional support and achieves their goals with Premium VDS. He has built a customer-centric support organization that consistently exceeds expectations.",
      image: "/team/customer-success.svg",
    },
    {
      name: "Sophia Patel",
      role: "Security Director",
      bio: "Sophia is responsible for all aspects of security at Premium VDS, from physical data center security to network protection and compliance. Her expertise keeps our infrastructure and customer data safe from threats.",
      image: "/team/security-director.svg",
    },
    {
      name: "Robert Kim",
      role: "Network Operations Manager",
      bio: "Robert manages our global network infrastructure, ensuring optimal connectivity, low latency, and high availability. His team monitors and maintains the backbone of our service 24/7/365.",
      image: "/team/network-manager.svg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The talented professionals behind Premium VDS who work tirelessly to deliver exceptional virtual dedicated
            server solutions.
          </p>
        </div>

        {/* Company Culture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-slate-300 mb-6">
              At Premium VDS, we foster a culture of innovation, collaboration, and continuous learning. Our team
              members are passionate about technology and committed to delivering exceptional service to our customers.
            </p>
            <p className="text-slate-300 mb-6">
              We believe that our success is built on the diverse talents and perspectives of our team. We encourage
              creativity, value work-life balance, and provide opportunities for professional growth and development.
            </p>
            <p className="text-slate-300">
              Together, we're building the future of virtual dedicated server hosting, one innovation at a time.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full h-[300px]">
              <Image src="/team/team-culture.svg" alt="Premium VDS Team Culture" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Executive Leadership */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Executive Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-white overflow-hidden">
                <div className="relative h-64 w-full bg-slate-700">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-cyan-400">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-start space-x-4">
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Mail size={20} />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Department Leads */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Department Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentLeads.map((member, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                <div className="relative h-48 w-full bg-slate-700">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-cyan-400 text-sm">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-xs">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-start space-x-3">
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Twitter size={16} />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who are passionate about technology and customer service.
            Check out our current openings and become part of the Premium VDS family.
          </p>
          <a
            href="/company/careers"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-6 py-3 rounded-md transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}

