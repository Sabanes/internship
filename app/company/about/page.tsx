import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Check, Award, Users, Globe, Shield } from "lucide-react"
import ImageFallback from "@/components/image-fallback"

export const metadata: Metadata = {
  title: "About Us - Premium VDS",
  description: "Learn about Premium VDS, our mission, values, and history in the virtual dedicated server industry.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Premium VDS</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pioneering Virtual Dedicated Server solutions since 2010, with a commitment to performance, reliability, and
            customer satisfaction.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-slate-300 mb-6">
              Premium VDS was founded in 2010 by a team of infrastructure engineers who saw the need for
              high-performance, reliable virtual dedicated servers that offered the power of dedicated hardware with the
              flexibility of virtualization.
            </p>
            <p className="text-slate-300 mb-6">
              What began as a small operation with a single data center in New York has grown into a global provider
              with 13 data centers across 4 continents, serving thousands of businesses and developers worldwide.
            </p>
            <p className="text-slate-300 mb-6">
              Today, Premium VDS is recognized as an industry leader in virtual dedicated server solutions, known for
              our cutting-edge infrastructure, exceptional uptime, and dedicated customer support.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full h-[400px]">
              <ImageFallback
                src="/about-company.svg"
                alt="Premium VDS Company History"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="bg-slate-900/50 py-16 px-4 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission & Values</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              At Premium VDS, we're driven by a clear mission and guided by core values that shape everything we do.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To provide businesses and developers with the most reliable, high-performance virtual dedicated server
                infrastructure that enables innovation, growth, and success in the digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Excellence</h4>
                    <p className="text-slate-300">
                      We strive for excellence in everything we do, from our infrastructure to our customer service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Reliability</h4>
                    <p className="text-slate-300">
                      We build and maintain systems that our customers can depend on 24/7/365.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Customer Focus</h4>
                    <p className="text-slate-300">
                      Our customers' success is our success. We're committed to providing exceptional support and
                      solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
                    <p className="text-slate-300">
                      We continuously innovate and improve our technology to stay ahead of industry trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Over the years, Premium VDS has reached significant milestones and received recognition for our commitment
              to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">13</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Data Centers</h3>
              <p className="text-slate-300">
                Strategically located across 4 continents to provide low-latency access worldwide.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
              <h3 className="text-xl font-bold text-white mb-2">Uptime Guarantee</h3>
              <p className="text-slate-300">
                Consistently delivering exceptional reliability for mission-critical applications.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <h3 className="text-xl font-bold text-white mb-2">Satisfied Customers</h3>
              <p className="text-slate-300">
                From startups to enterprises, trusting us with their infrastructure needs.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-900/50 py-16 px-4 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Premium VDS</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              We differentiate ourselves through superior technology, service, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise-Grade Hardware</h3>
                <p className="text-slate-300">
                  Latest generation Intel Xeon processors, NVMe SSD storage, and high-performance networking equipment.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Expert Support</h3>
                <p className="text-slate-300">
                  Our technical support team is available around the clock to assist with any issues or questions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Global Network</h3>
                <p className="text-slate-300">
                  Multiple tier-1 network providers with redundant connections for optimal performance worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
                <p className="text-slate-300">No hidden fees or surprise charges. What you see is what you pay.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Security</h3>
                <p className="text-slate-300">
                  DDoS protection, firewall, and regular security updates to keep your data safe.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Scalable Resources</h3>
                <p className="text-slate-300">
                  Easily upgrade your server resources as your needs grow, without downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

