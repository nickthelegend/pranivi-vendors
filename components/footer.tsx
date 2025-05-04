import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl">Pranivi</span>
            </div>
            <p className="text-slate-400 mb-6">
              Transforming procurement management with innovative solutions that streamline operations and drive
              efficiency.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Pranivi Desktop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Pranivi Mobile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Pranivi Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  API & Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-400">support@pranivi.com</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-blue-400" />
                <span className="text-slate-400">+1 (800) 123-4567</span>
              </div>
              <div className="mt-6">
                <Button className="w-full">Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pranivi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
