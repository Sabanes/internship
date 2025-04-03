import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PremiumVDS</h3>
            <p className="text-slate-400 mb-4">Providing reliable and affordable VPS hosting solutions since 2026.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>


            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">123 Server Street, Cloud City, 10010</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                <span className="text-slate-400">support@premiumvds.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} PremiumVDS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

