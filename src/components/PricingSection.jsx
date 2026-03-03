import { memo } from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

const baseDonateUrl = siteData.campaign.donateUrl

function getDonateUrl(amount) {
  if (amount === 'Other') return baseDonateUrl
  const separator = baseDonateUrl.includes('?') ? '&' : '?'
  return `${baseDonateUrl}${separator}amount=${amount}`
}

function ContributionButtons() {
  const amounts = [...siteData.donation.amounts, 'Other']

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {amounts.map((amount, index) => (
        <a
          key={index}
          href={getDonateUrl(amount)}
          className="px-4 py-4 md:px-6 md:py-5 rounded-md font-semibold text-base md:text-lg transition-all duration-200 shadow-md hover:shadow-lg text-center no-underline"
          style={{
            backgroundColor: colors.white,
            border: `2px solid ${colors.accent[400]}`,
            color: colors.accent[400],
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.neutral[100] }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.white }}
        >
          {typeof amount === 'number' ? `$${amount}` : amount}
        </a>
      ))}
    </div>
  )
}

const SectionHeading = memo(function SectionHeading() {
  return (
    <TextAnimate as="h2" animation="fadeIn" by="word" delay={0.2} once className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-tight tracking-tight text-center" style={{ color: colors.accent[400] }}>
      Choose Your Contribution
    </TextAnimate>
  )
})

const InfoText = memo(function InfoText() {
  return (
    <div className="text-center space-y-2">
      <TextAnimate as="p" animation="fadeIn" by="word" delay={0} once className="text-sm md:text-base text-neutral-700">
        Your support helps us continue our mission to create positive change.
      </TextAnimate>
      <TextAnimate as="p" animation="fadeIn" by="word" delay={0.1} once className="text-xs md:text-sm text-neutral-600">
        {siteData.donation.disclaimer}
      </TextAnimate>
    </div>
  )
})

function PricingSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16" style={{ backgroundColor: colors.neutral[50] }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading />
        <AnimateIn delay={0.4}><ContributionButtons /></AnimateIn>
        <AnimateIn delay={0.6}><InfoText /></AnimateIn>
      </div>
    </section>
  )
}

export default PricingSection
