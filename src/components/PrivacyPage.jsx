import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.white }}>
      {/* Hero */}
      <section className="w-full pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: colors.accent[400] }}
              >
                Privacy Policy
              </p>
            </AnimateIn>
            <TextAnimate
              as="h1"
              animation="fadeIn"
              by="word"
              delay={0.15}
              once
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-6 leading-tight tracking-tight"
            >
              Your privacy matters.
            </TextAnimate>
            <AnimateIn delay={0.3}>
              <p className="text-neutral-600 text-lg leading-relaxed">
                This policy describes how {siteData.campaign.name} collects, uses, and protects your information when you use this website.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full pb-20 md:pb-28 lg:pb-32 pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto space-y-16">
            <AnimateIn delay={0.1}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Information We Collect
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">What we collect</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                When you sign up for updates, contact us, or make a contribution, we may collect your name, email address, phone number, mailing address, and any message you provide. We may also collect information about how you use this site (e.g., pages visited) for analytics and improvement.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                How We Use It
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Use of your information</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We use your information to send you campaign updates, respond to your inquiries, process contributions in compliance with applicable law, and improve this website. We do not sell your personal information to third parties.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Communications
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Opting out</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                By providing your contact information, you may receive campaign-related messages. Message and data rates may apply. You can opt out at any time by replying STOP to a text message or by contacting us at{' '}
                <a href={`mailto:${siteData.contact.email}`} className="font-semibold underline" style={{ color: colors.accent[400] }}>{siteData.contact.email}</a>.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Cookies & Analytics
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Website technology</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                This site may use cookies or similar technologies to remember preferences and to understand how visitors use the site. You can adjust your browser settings to limit or block cookies if you prefer.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Your Rights
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Questions and requests</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If you have questions about this policy or wish to request access to or correction of your information, please contact us at{' '}
                <a href={`mailto:${siteData.contact.email}`} className="font-semibold underline" style={{ color: colors.accent[400] }}>{siteData.contact.email}</a>. We may update this policy from time to time; the current version will always be posted on this page.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPage
