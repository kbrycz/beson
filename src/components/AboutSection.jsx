import { Link } from 'react-router-dom'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import candidatePortrait from '../assets/about.jpg'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function AboutSection() {
  const about = siteData.about

  return (
    <section id="about" className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10 lg:mb-12">
          <AnimateIn delay={0.05}>
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase text-center mb-3"
              style={{ color: colors.accent[400] }}
            >
              {about.sectionLabel}
            </p>
          </AnimateIn>
          <TextAnimate as="h2" animation="fadeIn" by="word" delay={0.1} once className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-primary-950">
            {about.heading}
          </TextAnimate>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - left */}
          <AnimateIn delay={0.2}>
            <div className="w-full overflow-hidden rounded-lg shadow-2xl max-w-xl">
              <img src={candidatePortrait} alt={`${siteData.candidate.fullName} in the community`} className="w-full aspect-[4/3] object-cover" />
            </div>
          </AnimateIn>

          {/* Text content - right */}
          <div>
            {about.intro.map((paragraph, index) => (
              <AnimateIn key={index} delay={0.2 + index * 0.1}>
                <p className="text-neutral-700 text-lg leading-relaxed mb-6">{paragraph}</p>
              </AnimateIn>
            ))}
            <AnimateIn delay={0.4}>
              <Link
                to={about.ctaHref}
                className="w-full md:w-auto flex items-center justify-center gap-2 md:inline-flex px-5 py-3.5 md:px-8 rounded-md md:rounded-full font-bold text-lg transition-all duration-200 hover:brightness-110 hover:shadow-lg"
                style={{ backgroundColor: colors.accent[400], color: colors.white }}
              >
                View all issues
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

export default AboutSection
