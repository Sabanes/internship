import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog - Premium VDS",
  description:
    "Latest news, insights, and tutorials about virtual dedicated servers, cloud technology, and more from Premium VDS.",
}

export default function Blog() {
  const featuredPost = {
    title: "The Future of Virtual Dedicated Servers in 2023 and Beyond",
    excerpt:
      "Explore the emerging trends and technologies shaping the future of VDS hosting, from AI-powered resource optimization to enhanced security measures and sustainable computing practices.",
    image: "/blog/future-vds.svg",
    date: "June 15, 2023",
    author: "Michael Chen",
    readTime: "8 min read",
    slug: "future-of-vds-2023",
  }

  const recentPosts = [
    {
      title: "5 Ways to Optimize Your VDS for Maximum Performance",
      excerpt:
        "Learn practical tips and techniques to fine-tune your virtual dedicated server for optimal performance, from kernel tweaking to resource allocation strategies.",
      image: "/blog/optimize-vds.svg",
      date: "May 28, 2023",
      author: "Sarah Johnson",
      readTime: "6 min read",
      slug: "optimize-vds-performance",
    },
    {
      title: "Understanding VDS vs VPS: Key Differences Explained",
      excerpt:
        "Confused about the difference between Virtual Dedicated Servers and Virtual Private Servers? This comprehensive guide breaks down the technical and practical distinctions.",
      image: "/blog/vds-vs-vps.svg",
      date: "May 12, 2023",
      author: "David Rodriguez",
      readTime: "5 min read",
      slug: "vds-vs-vps-differences",
    },
    {
      title: "Securing Your VDS: Essential Security Practices",
      excerpt:
        "Protect your virtual dedicated server from threats with these essential security practices, from firewall configuration to intrusion detection and regular updates.",
      image: "/blog/securing-vds.svg",
      date: "April 30, 2023",
      author: "Sophia Patel",
      readTime: "7 min read",
      slug: "securing-your-vds",
    },
  ]

  const categories = [
    "VDS Technology",
    "Performance Optimization",
    "Security",
    "Tutorials",
    "Case Studies",
    "Industry News",
    "Best Practices",
    "Product Updates",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Premium VDS Blog</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insights, tutorials, and news about virtual dedicated servers, cloud technology, and infrastructure
            management.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="bg-cyan-500 w-2 h-8 mr-3 inline-block"></span>
            Featured Article
          </h2>
          <Card className="bg-slate-800 border-slate-700 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-slate-400 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                <p className="text-slate-300 mb-6">{featuredPost.excerpt}</p>
                <Link href={`/company/blog/${featuredPost.slug}`}>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">Read Full Article</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="bg-cyan-500 w-2 h-8 mr-3 inline-block"></span>
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-white overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center text-xs text-slate-400 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="text-slate-400 text-xs">By {post.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/company/blog/${post.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                  >
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories and Subscribe */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-cyan-500 w-2 h-8 mr-3 inline-block"></span>
              Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/company/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-slate-800 border border-slate-700 rounded-md p-4 text-center text-white hover:border-cyan-500 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-cyan-500 w-2 h-8 mr-3 inline-block"></span>
              Subscribe
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 mb-4">
                Stay updated with the latest articles, tutorials, and news from Premium VDS.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

