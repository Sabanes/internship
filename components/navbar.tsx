"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button" // Assuming you have this Button component setup
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

const countries = [
  { name: "UK", flag: "🇬🇧" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "India", flag: "🇮🇳" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVpsOpen, setIsVpsOpen] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const vpsRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close dropdowns (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only apply this logic on desktop (md and up)
      if (window.innerWidth >= 768) {
        if (
          navbarRef.current &&
          !navbarRef.current.contains(event.target as Node)
        ) {
          // Click was outside the entire navbar ref (which contains everything)
          setIsMenuOpen(false) // Should already be false on desktop, but for safety
          setIsVpsOpen(false)
        } else if (
          vpsRef.current &&
          !vpsRef.current.contains(event.target as Node)
        ) {
          // Click was inside navbar but outside the VPS dropdown trigger/content
          // Check if the click was *also* outside the trigger button itself
          // This logic might need refinement if the trigger isn't inside vpsRef
          const vpsTriggerButton = navbarRef.current?.querySelector('button[aria-controls="vps-dropdown"]');
          if (!vpsTriggerButton || !vpsTriggerButton.contains(event.target as Node)) {
              setIsVpsOpen(false);
          }
        }
      }
    }

    // Handle escape key to close all menus
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setIsVpsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, []) // Ensure refs are stable if possible, or add them to dependency array if needed, but usually not for refs like this.

  // Toggle VPS dropdown
  const toggleVpsDropdown = () => {
    setIsVpsOpen(!isVpsOpen)
  }

  // Handle keyboard navigation for buttons/triggers
  const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      callback()
    }
  }

  // Close mobile menu and optionally the VPS dropdown
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsVpsOpen(false); // Also close VPS dropdown when closing main mobile menu
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950 shadow-md" ref={navbarRef}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
  <div className="relative mt-2 w-auto text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-md">
    Premium<span className="text-white">VDS</span>
  </div>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-cyan-400 transition-colors"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>

            {/* VPS Dropdown */}
            <div className="relative" ref={vpsRef}>
              <button
                onClick={toggleVpsDropdown}
                onKeyDown={(e) => handleKeyDown(e, toggleVpsDropdown)}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
                aria-expanded={isVpsOpen}
                aria-haspopup="true"
                aria-controls="vps-dropdown" // Controls the dropdown content
              >
                VPS {isVpsOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
              {isVpsOpen && (
                <div
                  id="vps-dropdown" // ID for aria-controls
                  className="absolute left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-30"
                  role="menu" // Role for accessibility
                  aria-orientation="vertical" // Accessibility hint
                  aria-labelledby="vps-dropdown-trigger" // Needs an ID on the button if used
                >
                  <div className="p-3 border-b border-slate-700">
                    <h3 className="text-white font-medium">Select VPS Location</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {countries.map((country) => (
                      <Link
                        key={country.name}
                        href={`/vps/${country.name.toLowerCase()}`}
                        className="flex items-center p-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors"
                        role="menuitem"
                        onClick={() => setIsVpsOpen(false)} // Close dropdown on selection
                      >
                        <span className="mr-2 text-lg" aria-hidden="true">{country.flag}</span>
                        <span>{country.name} VPS</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/datacenters"
              className="text-white hover:text-cyan-400 transition-colors"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/datacenters' ? 'page' : undefined}
            >
              Data Centers
            </Link>

            <Link
              href="/cloud"
              className="text-white hover:text-cyan-400 transition-colors"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/cloud' ? 'page' : undefined}
            >
              Cloud Solutions
            </Link>

            <Link
              href="/company/about"
              className="text-white hover:text-cyan-400 transition-colors"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/company/about' ? 'page' : undefined}
            >
              About Us
            </Link>

            <Link
              href="/company/contact"
              className="text-white hover:text-cyan-400 transition-colors"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/company/contact' ? 'page' : undefined}
            >
              Contact Us
            </Link>
          </div>

          {/* Client Area Button (Desktop) */}
          {/* Assuming this button navigates somewhere, wrap in Link or use onClick */}
          <Button className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
            {/* <Link href="/client-area">CLIENT AREA</Link> */}
             CLIENT AREA {/* Or use onClick={() => router.push('/client-area')} */}
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu" // Controls the mobile menu container
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu" // ID for aria-controls
            className="md:hidden mt-4 bg-slate-900 p-4 rounded-md shadow-lg space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto" // Limit height and allow scroll
          >
            <Link
              href="/"
              className="text-white block py-2"
              onClick={closeMobileMenu} // Close menu on navigation
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>

            {/* VPS Section (Mobile) */}
            <div className="border-t border-slate-700 pt-2">
              <button
                onClick={toggleVpsDropdown} // Toggles only the VPS sub-section
                onKeyDown={(e) => handleKeyDown(e, toggleVpsDropdown)}
                className="flex items-center justify-between text-white w-full py-2"
                aria-expanded={isVpsOpen}
                aria-controls="mobile-vps-dropdown" // Controls the VPS link list
              >
                <span>VPS</span>
                {isVpsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {/* Mobile VPS dropdown content */}
              {isVpsOpen && (
                <div id="mobile-vps-dropdown" className="mt-2 pb-2 pl-4"> {/* Indent links slightly */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                    {countries.map((country) => (
                      <Link
                        key={country.name}
                        href={`/vps/${country.name.toLowerCase()}`}
                        className="block text-slate-300 hover:text-white active:text-cyan-400"
                        // REMOVED onClick handler here to allow natural navigation
                        // The closeMobileMenu function will handle closing everything needed
                        // when other top-level links are clicked. For these nested links,
                        // letting the page navigate is the simplest way to "close" the menu.
                        // Alternatively, add onClick={closeMobileMenu} if you want explicit closure
                        // *before* navigation visually starts, but test thoroughly.
                        onClick={closeMobileMenu} // Added explicit close for better UX
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-lg" aria-hidden="true">{country.flag}</span>
                          <span>{country.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/datacenters"
              className="text-white block py-2 border-t border-slate-700 pt-3"
              onClick={closeMobileMenu} // Close menu on navigation
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/datacenters' ? 'page' : undefined}
            >
              Data Centers
            </Link>

            <Link
              href="/cloud"
              className="text-white block py-2 border-t border-slate-700 pt-3"
              onClick={closeMobileMenu} // Close menu on navigation
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/cloud' ? 'page' : undefined}
            >
              Cloud Solutions
            </Link>

            <Link
              href="/company/about"
              className="text-white block py-2 border-t border-slate-700 pt-3"
              onClick={closeMobileMenu} // Close menu on navigation
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/company/about' ? 'page' : undefined}
            >
              About Us
            </Link>

            <Link
              href="/company/contact"
              className="text-white block py-2 border-t border-slate-700 pt-3"
              onClick={closeMobileMenu} // Close menu on navigation
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/company/contact' ? 'page' : undefined}
            >
              Contact Us
            </Link>

            {/* Client Area Button (Mobile) */}
            <div className="border-t border-slate-700 pt-3 mt-3">
              <Button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full"
                onClick={() => {
                  // Add navigation logic here, e.g., using Next.js router
                  // router.push('/client-area');
                  closeMobileMenu(); // Close menu after triggering action
                }}
              >
                 CLIENT AREA
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;