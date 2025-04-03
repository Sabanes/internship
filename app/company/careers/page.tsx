import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Check, MapPin, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Careers - Premium VDS",
  description: "Join our team at Premium VDS and help shape the future of virtual dedicated server technology.",
}

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior DevOps Engineer",
      department: "Engineering",
      location: "New York, USA (Remote Option)",
      type: "Full-time",
      description:
        "We're looking for an experienced DevOps Engineer to help build and maintain our infrastructure automation, CI/CD pipelines, and monitoring systems.",
      requirements: [
        "5+ years of experience in DevOps or SRE roles",
        "Strong knowledge of Linux/Unix systems",
        "Experience with containerization (Docker, Kubernetes)",
        "Proficiency in infrastructure as code (Terraform, Ansible)",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Knowledge of monitoring and observability tools",
      ],
      id: "devops-engineer",
    },
    {
      title: "Cloud Infrastructure Architect",
      department: "Engineering",
      location: "London, UK (Remote Option)",
      type: "Full-time",
      description:
        "Join our team as a Cloud Infrastructure Architect to design and implement scalable, reliable, and secure cloud infrastructure solutions for our global platform.",
      requirements: [
        "7+ years of experience in cloud architecture",
        "Deep understanding of virtualization technologies",
        "Experience designing high-availability systems",
        "Knowledge of network architecture and security",
        "Familiarity with compliance requirements (SOC 2, ISO 27001)",
        "Strong problem-solving and communication skills",
      ],
      id: "cloud-architect",
    },
    {
      title: "Technical Support Specialist",
      department: "Customer Success",
      location: "Singapore (Remote Option)",
      type: "Full-time",
      description:
        "Help our customers succeed by providing exceptional technical support for our virtual dedicated server platform.",
      requirements: [
        "3+ years of experience in technical support",
        "Knowledge of Linux server administration",
        "Understanding of networking concepts",
        "Experience with virtualization technologies",
        "Excellent communication and problem-solving skills",
        "Customer-focused mindset",
      ],
      id: "support-specialist",
    },
    {
      title: "Security Engineer",
      department: "Security",
      location: "Frankfurt, Germany (Remote Option)",
      type: "Full-time",
      description:
        "Join our security team to help protect our infrastructure and customer data from threats and vulnerabilities.",
      requirements: [
        "5+ years of experience in information security",
        "Knowledge of network security and threat detection",
        "Experience with security tools and frameworks",
        "Understanding of compliance requirements",
        "Incident response experience",
        "Security certification (CISSP, CEH, etc.) preferred",
      ],
      id: "security-engineer",
    },
  ]

  const benefits = [
    {
      title: "Competitive Compensation",
      description:
        "We offer competitive salaries, equity options, and performance bonuses to reward your contributions.",
      icon: "/careers/compensation.svg",
    },
    {
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, wellness programs, and mental health support for you and your family.",
      icon: "/careers/health.svg",
    },
    {
      title: "Flexible Work",
      description: "Remote-friendly environment with flexible hours to help you maintain work-life balance.",
      icon: "/careers/flexible.svg",
    },
    {
      title: "Professional Growth",
      description: "Learning stipend, conference attendance, and clear career progression paths.",
      icon: "/careers/growth.svg",
    },
    {
      title: "Team Events",
      description: "Regular team building activities, both virtual and in-person, to foster collaboration.",
      icon: "/careers/team.svg",
    },
    {
      title: "Latest Technology",
      description: "Access to cutting-edge tools and technologies to help you do your best work.",
      icon: "/careers/technology.svg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Help us shape the future of virtual dedicated server technology and make a difference in the digital world.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Join Premium VDS?</h2>
            <p className="text-slate-300 mb-6">
              At Premium VDS, we're building the next generation of virtual dedicated server technology that powers
              businesses around the world. We're a team of passionate technologists who value innovation, collaboration,
              and customer success.
            </p>
            <p className="text-slate-300 mb-6">
              Working here means having the opportunity to solve challenging problems, learn from industry experts, and
              make a real impact on our products and customers. We foster a culture of continuous learning and
              professional growth, with opportunities to advance your career.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-slate-300">
                  <span className="text-white font-medium">Innovation-driven culture</span> that encourages new ideas
                  and approaches
                </p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-slate-300">
                  <span className="text-white font-medium">Global team</span> with diverse perspectives and backgrounds
                </p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-slate-300">
                  <span className="text-white font-medium">Challenging work</span> that keeps you engaged and growing
                </p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-slate-300">
                  <span className="text-white font-medium">Customer-focused mission</span> that makes a real difference
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full h-[400px]">
              <Image src="/careers/team-working.svg" alt="Premium VDS Team" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src={benefit.icon || "/placeholder.svg?height=48&width=48"}
                      alt={benefit.title}
                      width={48}
                      height={48}
                    />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto bg-slate-800 p-0 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black py-3">
                All
              </TabsTrigger>
              <TabsTrigger
                value="engineering"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black py-3"
              >
                Engineering
              </TabsTrigger>
              <TabsTrigger
                value="customer"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black py-3"
              >
                Customer
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black py-3"
              >
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="text-cyan-400">{job.department}</CardDescription>
                        </div>
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-black w-full md:w-auto">Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-sm text-slate-300">
                          <MapPin className="h-4 w-4 mr-1 text-slate-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-300">
                          <Briefcase className="h-4 w-4 mr-1 text-slate-400" />
                          {job.type}
                        </div>
                      </div>
                      <p className="text-slate-300 mb-4">{job.description}</p>
                      <h4 className="text-white font-medium mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/company/careers/${job.id}`}
                        className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                      >
                        View Full Job Description <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="engineering" className="mt-0">
              <div className="space-y-6">
                {jobOpenings
                  .filter((job) => job.department === "Engineering")
                  .map((job, index) => (
                    <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="text-cyan-400">{job.department}</CardDescription>
                          </div>
                          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black w-full md:w-auto">
                            Apply Now
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-sm text-slate-300">
                            <MapPin className="h-4 w-4 mr-1 text-slate-400" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-300">
                            <Briefcase className="h-4 w-4 mr-1 text-slate-400" />
                            {job.type}
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4">{job.description}</p>
                        <h4 className="text-white font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-slate-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={`/company/careers/${job.id}`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                        >
                          View Full Job Description <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="customer" className="mt-0">
              <div className="space-y-6">
                {jobOpenings
                  .filter((job) => job.department === "Customer Success")
                  .map((job, index) => (
                    <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="text-cyan-400">{job.department}</CardDescription>
                          </div>
                          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black w-full md:w-auto">
                            Apply Now
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-sm text-slate-300">
                            <MapPin className="h-4 w-4 mr-1 text-slate-400" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-300">
                            <Briefcase className="h-4 w-4 mr-1 text-slate-400" />
                            {job.type}
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4">{job.description}</p>
                        <h4 className="text-white font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-slate-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={`/company/careers/${job.id}`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                        >
                          View Full Job Description <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <div className="space-y-6">
                {jobOpenings
                  .filter((job) => job.department === "Security")
                  .map((job, index) => (
                    <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="text-cyan-400">{job.department}</CardDescription>
                          </div>
                          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black w-full md:w-auto">
                            Apply Now
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-sm text-slate-300">
                            <MapPin className="h-4 w-4 mr-1 text-slate-400" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-300">
                            <Briefcase className="h-4 w-4 mr-1 text-slate-400" />
                            {job.type}
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4">{job.description}</p>
                        <h4 className="text-white font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-slate-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={`/company/careers/${job.id}`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                        >
                          View Full Job Description <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Application Process */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Application</h3>
              <p className="text-slate-300 text-sm">Submit your resume and cover letter through our online portal.</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Initial Interview</h3>
              <p className="text-slate-300 text-sm">
                A 30-minute call with our recruiting team to discuss your background and the role.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Technical Assessment</h3>
              <p className="text-slate-300 text-sm">
                Complete a skills assessment relevant to the position you're applying for.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Final Interviews</h3>
              <p className="text-slate-300 text-sm">Meet with team members and leadership to ensure a mutual fit.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

