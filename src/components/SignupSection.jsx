import { useState } from 'react'
import AnimateIn from './ui/AnimateIn'
import { colors } from '@/config/colors'
import siteData from '../config/siteData'
import candidatePhoto from '../assets/candidate-portrait.jpg'

function SignupSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    zipCode: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ firstName: '', email: '', zipCode: '' })
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div
          className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20"
          style={{ backgroundColor: colors.neutral[50] }}
        >
          <div className="max-w-md mx-auto w-full lg:ml-auto lg:mr-16 text-center lg:text-left">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: colors.accent[400] }}
              >
                {siteData.signup.sectionLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight tracking-tight text-primary-950"
              >
                Sign Up To Receive Updates
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <style>{`
                  .signup-input::placeholder {
                    font-weight: 700;
                    color: ${colors.neutral[500]};
                  }
                `}</style>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="signup-input w-full px-5 py-4 rounded-md bg-white border-2 text-neutral-900 focus:outline-none transition-all shadow-sm text-lg font-semibold border-neutral-200 focus:border-accent-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="signup-input w-full px-5 py-4 rounded-md bg-white border-2 text-neutral-900 focus:outline-none transition-all shadow-sm text-lg font-semibold border-neutral-200 focus:border-accent-400"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code*"
                  pattern="[0-9]{5}"
                  maxLength="5"
                  className="signup-input w-full px-5 py-4 rounded-md bg-white border-2 text-neutral-900 focus:outline-none transition-all shadow-sm text-lg font-semibold border-neutral-200 focus:border-accent-400"
                  required
                />
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-5 py-4 font-bold text-sm tracking-[0.15em] uppercase rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
                    style={{ backgroundColor: colors.accent[400], color: colors.white }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.accent[500] }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.accent[400] }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </AnimateIn>
          </div>
        </div>

        <div className="relative min-h-[350px] lg:min-h-full overflow-hidden">
          <img src={candidatePhoto} alt="Candidate" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default SignupSection
