import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../assets/logo.png'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function Navbar({ variant = 'solid' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navLinks = siteData.navigation?.links || []

  const isTransparent = variant === 'transparent'
  const bgStyle = isTransparent
    ? {}
    : { backgroundColor: colors.white }
  const textClass = isTransparent ? 'text-white' : 'text-primary-950'
  const navLinkClass = isTransparent
    ? 'text-white text-sm xl:text-base font-semibold tracking-[0.15em] uppercase hover:text-accent-400 transition-colors duration-200'
    : 'text-primary-950 text-sm xl:text-base font-semibold tracking-[0.15em] uppercase hover:text-accent-400 transition-colors duration-200'
  const mobileNavLinkClass = isTransparent
    ? 'text-white text-lg font-bold tracking-[0.2em] uppercase py-4 border-b border-white/10 hover:text-accent-400 transition-colors block'
    : 'text-primary-950 text-lg font-bold tracking-[0.2em] uppercase py-4 border-b border-neutral-200 hover:text-accent-400 transition-colors block'

  const renderLink = (link, className, onClick) => {
    const isRoute = link.href.startsWith('/')
    if (isRoute) {
      return (
        <Link to={link.href} className={className} onClick={onClick}>
          {link.label}
        </Link>
      )
    }
    // For hash links on inner pages, prepend "/" so they navigate home first
    const href = location.pathname === '/' ? link.href : `/${link.href}`
    return (
      <a href={href} className={className} onClick={onClick}>
        {link.label}
      </a>
    )
  }

  return (
    <>
      {/* ===== MOBILE & TABLET NAVBAR ===== */}
      <nav
        className={`lg:hidden relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-4 ${!isTransparent ? 'border-b border-neutral-200' : ''}`}
        style={bgStyle}
      >
        <AnimateIn delay={0}>
          <Link to="/" className="block">
            <img
              src={logoImage}
              alt="Campaign Logo"
              className="h-[5.6rem] sm:h-[6.5rem] md:h-[6.9rem] w-auto"
            />
          </Link>
        </AnimateIn>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 ${textClass}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu - always in DOM to avoid logo/image flash on open */}
      <div
        className={`lg:hidden fixed inset-0 z-50 min-h-screen overflow-y-auto pb-8 transition-opacity duration-200 ${!isTransparent ? 'border-b border-neutral-200' : ''} ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: isTransparent ? colors.primary[950] : colors.white }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Duplicate header row so it sits on top seamlessly */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-4">
          <Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}>
            <img
              src={logoImage}
              alt="Campaign Logo"
              className="h-[5.6rem] sm:h-[6.5rem] md:h-[6.9rem] w-auto"
            />
          </Link>
          <div className="flex items-center justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-950 p-1.5"
              aria-label="Close menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-6 pt-2">
          {navLinks.map((link) =>
            <div key={link.label}>
              {renderLink(
                link,
                mobileNavLinkClass,
                () => setMobileMenuOpen(false)
              )}
            </div>
          )}
        </div>

        {/* Big DONATE button under nav links */}
        <div className="px-6 pt-6 pb-2">
          <a
            href={siteData.campaign.donateUrl}
            className="block w-full py-4 text-center bg-accent-400 hover:bg-accent-500 text-white font-bold text-lg tracking-[0.2em] uppercase rounded transition-colors duration-200 shadow-lg"
          >
            DONATE
          </a>
        </div>
      </div>

      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="hidden lg:block relative z-20 w-full border-b border-neutral-200" style={bgStyle}>
        <div className="flex items-center justify-between px-16 xl:px-20 py-6 xl:py-7">
          {/* Logo */}
          <AnimateIn delay={0}>
            <Link to="/" className="block">
              <img
                src={logoImage}
                alt="Campaign Logo"
                className="h-16 xl:h-[4.5rem] w-auto"
              />
            </Link>
          </AnimateIn>

          {/* Desktop Nav Links */}
          <div className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link, i) => (
              <AnimateIn key={link.label} delay={0.05 * (i + 1)}>
                {renderLink(
                  link,
                  navLinkClass
                )}
              </AnimateIn>
            ))}
            <AnimateIn delay={0.05 * (navLinks.length + 1)}>
              <a
                href={siteData.campaign.donateUrl}
                className="bg-accent-400 hover:bg-accent-500 text-white font-bold px-8 xl:px-9 py-3 xl:py-3.5 rounded transition-colors duration-200 shadow-lg text-sm xl:text-base tracking-[0.15em] uppercase ml-2"
              >
                DONATE
              </a>
            </AnimateIn>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
