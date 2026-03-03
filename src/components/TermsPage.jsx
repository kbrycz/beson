import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function TermsPage() {
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
                Terms & Conditions
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
              Please read these terms.
            </TextAnimate>
            <AnimateIn delay={0.3}>
              <p className="text-neutral-600 text-lg leading-relaxed">
                By using this website, you agree to these terms of use. If you do not agree, please do not use the site.
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
                Use of Site
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Acceptable use</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                This website is operated by {siteData.campaign.name}. You may use it for lawful purposes only. You may not use the site to harass others, distribute malicious content, or violate any applicable laws. We reserve the right to restrict access or remove content that we deem inappropriate.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Donations
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Contributions</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Contributions to the campaign are voluntary and may be used for campaign purposes. {siteData.donation.disclaimer} This site is {siteData.campaign.paidFor}.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Content You Provide
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">User content</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                When you submit information through our contact form or signup, you represent that it is accurate and that you have the right to provide it. We may use that information as described in our Privacy Policy. Do not submit content that is defamatory, abusive, or infringes on others’ rights.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Disclaimer
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">No warranties</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                This website is provided “as is.” We do not warrant that it will be uninterrupted or error-free. We are not liable for any damages arising from your use of the site or from any linked third-party sites.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Governing Law
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Jurisdiction</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                These terms are governed by the laws of the State of Michigan. Any dispute relating to this site or these terms shall be subject to the exclusive jurisdiction of the courts of Michigan.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: colors.accent[400] }}
              >
                Contact
              </p>
              <h2 className="text-xl font-bold text-primary-950 mb-4">Questions</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                For questions about these terms, please contact us at{' '}
                <a href={`mailto:${siteData.contact.email}`} className="font-semibold underline" style={{ color: colors.accent[400] }}>{siteData.contact.email}</a>. We may update these terms from time to time; the current version will be posted on this page.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsPage
