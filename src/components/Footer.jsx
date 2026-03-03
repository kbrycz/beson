import { Link } from 'react-router-dom'
import AnimateIn from './ui/AnimateIn'
import logoImage from '../assets/logo.png'
import siteData from '../config/siteData'

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-primary-950 py-12 px-4 sm:px-6 lg:px-8 md:py-14">
      <div className="max-w-7xl mx-auto">
        <AnimateIn delay={0}>
          <div className="flex flex-col gap-10 items-center text-center sm:flex-row sm:items-start sm:justify-between sm:text-left md:gap-12">
            {/* Left: logo + paid for */}
            <div className="flex flex-col gap-4 items-center sm:items-start w-full sm:w-auto max-w-sm">
              <Link to="/" className="block w-fit">
                <img
                  src={logoImage}
                  alt="Campaign Logo"
                  className="h-14 w-auto sm:h-16"
                />
              </Link>
              {siteData.campaign.paidFor && (
                <p className="text-white/70 text-xs sm:text-sm max-w-sm leading-relaxed">
                  {siteData.campaign.paidFor}
                </p>
              )}
            </div>

            {/* Right: stacked links — centered on mobile, right-aligned on desktop */}
            <div className="flex flex-col gap-3 items-center sm:items-end text-center sm:text-right w-full sm:w-auto">
              <p className="text-xs tracking-widest text-white/50 uppercase">Legal & contact</p>
              {siteData.contact.privacyUrl.startsWith('/') ? (
                <Link
                  to={siteData.contact.privacyUrl}
                  className="font-semibold text-neutral-200 transition-colors duration-200 no-underline hover:text-accent-400 text-sm"
                >
                  Privacy Policy
                </Link>
              ) : (
                <a
                  href={siteData.contact.privacyUrl}
                  className="font-semibold text-neutral-200 transition-colors duration-200 no-underline hover:text-accent-400 text-sm"
                >
                  Privacy Policy
                </a>
              )}
              {siteData.contact.termsUrl.startsWith('/') ? (
                <Link
                  to={siteData.contact.termsUrl}
                  className="font-semibold text-neutral-200 transition-colors duration-200 no-underline hover:text-accent-400 text-sm"
                >
                  Terms & Conditions
                </Link>
              ) : (
                <a
                  href={siteData.contact.termsUrl}
                  className="font-semibold text-neutral-200 transition-colors duration-200 no-underline hover:text-accent-400 text-sm"
                >
                  Terms & Conditions
                </a>
              )}
              <a
                href={`mailto:${siteData.contact.email}`}
                className="font-semibold text-neutral-200 transition-colors duration-200 no-underline hover:text-accent-400 text-sm"
              >
                {siteData.contact.email}
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}

export default Footer
