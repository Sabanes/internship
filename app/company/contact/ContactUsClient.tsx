"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, MessageSquare, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactUsClient() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const offices = [
    {
      city: "New York",
      country: "USA",
      address: "123 Tech Plaza, Suite 500, New York, NY 10001",
      phone: "+1 (212) 555-7890",
      email: "newyork@premiumvds.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    },
    {
      city: "London",
      country: "UK",
      address: "45 Cloud Street, Floor 3, London, EC2A 4BQ",
      phone: "+44 20 7946 0958",
      email: "london@premiumvds.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM GMT",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "78 Server Road, #12-21, Singapore 068897",
      phone: "+65 6123 4567",
      email: "singapore@premiumvds.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM SGT",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help you with any inquiries about our virtual
            dedicated server solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription className="text-slate-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-300 mb-4">
                      Thank you for contacting Premium VDS. We'll respond to your inquiry shortly.
                    </p>
                    <Button
                      className="bg-cyan-500 hover:bg-cyan-600 text-black"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="Sales Inquiry">Sales Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Billing Question">Billing Question</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <Card className="bg-slate-800 border-slate-700 text-white mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-slate-300">
                  Reach out to us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-slate-300">
                      <a href="mailto:info@premiumvds.com" className="hover:text-cyan-400 transition-colors">
                        info@premiumvds.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-slate-300">
                      <a href="tel:+18005551234" className="hover:text-cyan-400 transition-colors">
                        +1 (800) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Live Chat</h3>
                    <p className="text-slate-300">Available 24/7 through our client area</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Support Hours</h3>
                    <p className="text-slate-300">24 hours a day, 7 days a week, 365 days a year</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
              <Image src="/contact-map.svg" alt="Premium VDS Global Offices" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Global Offices</h2>

          <Tabs defaultValue="new-york" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto bg-slate-800 p-0 mb-8">
              {offices.map((office) => (
                <TabsTrigger
                  key={office.city}
                  value={office.city.toLowerCase().replace(/\s+/g, "-")}
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black py-3"
                >
                  {office.city}
                </TabsTrigger>
              ))}
            </TabsList>

            {offices.map((office) => (
              <TabsContent key={office.city} value={office.city.toLowerCase().replace(/\s+/g, "-")} className="mt-0">
                <Card className="bg-slate-800 border-slate-700 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {office.city}, {office.country}
                      </h3>
                      <div className="space-y-4 mt-6">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                          <p className="text-slate-300">{office.address}</p>
                        </div>
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                          <p className="text-slate-300">{office.phone}</p>
                        </div>
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                          <p className="text-slate-300">{office.email}</p>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                          <p className="text-slate-300">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[300px]">
                      <Image
                        src={`/office-${office.city.toLowerCase()}.svg`}
                        alt={`${office.city} Office`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* FAQ */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">How quickly will I receive a response?</h3>
              <p className="text-slate-300">
                For general inquiries, we aim to respond within 24 hours. For technical support, our team is available
                24/7 and typically responds within 1 hour.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer phone support?</h3>
              <p className="text-slate-300">
                Yes, we offer phone support for all customers. Our support team is available 24/7 to assist with any
                issues or questions.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Can I schedule a consultation?</h3>
              <p className="text-slate-300">
                You can schedule a consultation with our sales or technical team to discuss your specific needs and
                requirements.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">How do I report a technical issue?</h3>
              <p className="text-slate-300">
                Technical issues can be reported through our client area, by email to support@premiumvds.com, or by
                phone. For critical issues, we recommend calling our support line.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

