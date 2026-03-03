import { Link } from 'react-router-dom'
import AnimateIn from './ui/AnimateIn'
import aboutHomeImage from '../assets/about-home.png'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function VideoSection() {
  const intro = siteData.aboutIntro

  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - left */}
          <AnimateIn delay={0.2} className="w-full flex justify-center">
            <img
              src={aboutHomeImage}
              alt={`${siteData.candidate.fullName} in the community`}
              className="w-full max-w-xl h-auto block"
              style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))' }}
            />
          </AnimateIn>

          {/* Intro content - right */}
          <div className="text-center lg:text-left">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: colors.accent[400] }}
              >
                {intro.sectionLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight tracking-tight mb-6">
                {intro.headline}
              </h2>
            </AnimateIn>
            {Array.isArray(intro.intro) ? (
              intro.intro.map((paragraph, index) => (
                <AnimateIn key={index} delay={0.2 + index * 0.05}>
                  <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))
            ) : (
              <AnimateIn delay={0.2}>
                <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                  {intro.intro}
                </p>
              </AnimateIn>
            )}
            <AnimateIn delay={Array.isArray(intro.intro) ? 0.35 : 0.3}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-200 hover:brightness-110 hover:shadow-lg"
                style={{ backgroundColor: colors.accent[400], color: colors.white }}
              >
                Meet Timmy
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
