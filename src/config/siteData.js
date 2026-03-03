/**
 * Site Data Configuration
 *
 * All candidate-specific content lives here.
 * To re-skin this template for a new candidate, update this file
 * and swap out the images in src/assets/.
 */

const siteData = {
  // ── Candidate ──────────────────────────────────────────────
  candidate: {
    firstName: 'Timmy',
    lastName: 'Beson',
    fullName: 'Timmy Beson',
  },

  // ── Campaign ───────────────────────────────────────────────
  campaign: {
    name: 'Timmy Beson for Bay County',
    slogan: 'Standing up for Bay County.',
    donateUrl: 'https://secure.anedot.com/friends-of-timothy-h-beson/donate',
    paidFor: 'Paid for by Friends of Timothy H. Beson, PO Box 88, Kawkawlin, MI 48631',
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: 'info@timmybeson.com',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
    },
    privacyUrl: '#',
    termsUrl: '#',
  },

  // ── Donation ───────────────────────────────────────────────
  donation: {
    amounts: [10, 25, 50, 100, 250],
    disclaimer: 'Contributions are not deductible for federal income tax purposes.',
  },

  // ── Navigation ────────────────────────────────────────────
  navigation: {
    links: [
      { label: 'MEET TIMMY', href: '/about' },
      { label: 'ISSUES', href: '/issues' },
      { label: 'NEWS', href: '/news' },
      { label: 'CONTACT', href: '/contact' },
    ],
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    headline: 'Fighting for Bay County.',
    subtitle: 'Running for reelection as State Representative, 96th House District.',
    disclaimerText: 'By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out.',
  },

  // ── Image + Text Section ───────────────────────────────────
  imageText: {
    headline: 'Championing Solutions. Electing Change.',
    subheading: 'We believe in the power of diverse voices to drive meaningful change.',
  },

  // ── About Section (Homepage) ────────────────────────────────
  about: {
    heading: 'About Timmy',
    bio: [
      'Timmy Beson is a lifelong resident of Bay County, a graduate of John Glenn High School, and the owner of his family business, Beson\'s Market, in Bay City.',
      'He graduated from Saginaw Valley State University with a degree in Business Management. He is the proud father of two daughters and one son, all of whom attend Bangor Public Schools. He and his wife, Lisa, have been married for 20 years.',
      'Before serving Bay County in Lansing, Timmy served as a School Board Member for Bangor Township Schools.',
      'When Timmy is not grilling up delicious BBQ he can be found golfing, camping, or hunting with family and friends.',
    ],
  },

  // ── About Page (Full Page) ────────────────────────────────
  aboutPage: {
    sectionLabel: 'Meet Timmy Beson',
    headline: 'A Voice for Bay County.',
    intro: [
      'Timmy Beson is a lifelong resident of Bay County, a graduate of John Glenn High School, and the owner of his family business, Beson\'s Market, in Bay City. He is running to represent our community in Lansing with the same values that have guided his life: family, faith, and service.',
      'He graduated from Saginaw Valley State University with a degree in Business Management. He and his wife, Lisa, have been married for 20 years and are the proud parents of two daughters and one son, all of whom attend Bangor Public Schools.',
    ],
    bioLabel: 'From Our Community',
    bioHeading: 'His Story',
    bio: [
      'Timmy Beson is a lifelong resident of Bay County, a John Glenn High School graduate, and the owner of his family business, Beson\'s Market, in Bay City. He graduated from Saginaw Valley State University with a degree in Business Management and is the proud father of two daughters and one son, all of whom attend Bangor Public Schools; he and his wife, Lisa, have been married for 20 years. Before serving Bay County in Lansing, Timmy served as a School Board Member for Bangor Township Schools. When he\'s not grilling up delicious BBQ, he can be found golfing, camping, or hunting with family and friends.',
    ],
    valuesLabel: 'Our Platform',
    valuesHeading: 'What Timmy Stands For',
    valuesSubheading: 'Core principles guiding his campaign for Bay County.',
    values: [
      {
        title: 'Family & Community',
        description: 'Timmy believes strong families and strong schools build strong communities. He will fight for parents, teachers, and students so every child has the opportunity to succeed.',
      },
      {
        title: 'Supporting Law & Order',
        description: 'Timmy is a strong supporter of our men and women in blue. He will oppose any effort that harms law enforcement\'s ability to keep our communities safe.',
      },
      {
        title: 'Fiscal Responsibility',
        description: 'As a small business owner, Timmy knows that every dollar counts. In Lansing, he will work for bipartisan solutions to fix our roads and protect taxpayers.',
      },
    ],
    ctaLabel: 'Get Involved',
    ctaHeading: 'Stand With Timmy',
    ctaText: 'Timmy can\'t do this alone. Join the fight to send a proven leader to Lansing who will stand up for Bay County families, support our schools, and protect our way of life.',
  },

  // ── Agenda / Issues Page ──────────────────────────────────────
  agenda: {
    sectionLabel: 'Issues',
    headline: 'Standing Up for Bay County.',
    intro: [
      'Timmy Beson is running on a clear agenda built on the values that matter to Bay County: safe schools, strong communities, and real solutions for our roads and economy. He will work with both parties in Lansing to deliver results.',
      'From supporting parents and teachers to backing law enforcement and expanding skilled trades, Timmy has a concrete plan to fight for the families and businesses that make our community strong.',
    ],
    prioritiesLabel: 'Issues',
    prioritiesHeading: 'What Timmy Stands For',
    prioritiesSubheading: 'Seven priorities Timmy will champion in Lansing for Bay County.',
    priorities: [
      {
        number: '1',
        title: 'Standing up for Parents and Teachers',
        description: 'When local school officials were attempting to force in-person instruction, Timmy sat down with parents and teachers to listen to their concerns. He became a leading voice for a smarter plan to safely resume instruction. Timmy\'s committed to the safety and security of our children, parents and teachers, and supports measures to help fix learning loss caused by the COVID-19 pandemic.',
      },
      {
        number: '2',
        title: 'Supporting Law Enforcement',
        description: 'Timmy is a strong supporter of our men and women in blue who risk their lives every day to keep us safe. Calls to defund our local police will put our communities in danger. He will oppose any effort that harms law enforcement\'s ability to do their job.',
      },
      {
        number: '3',
        title: 'Expanding Skilled Trades Programs',
        description: 'The Beson family have been avid supporters of the Bay/Arenac ISD, our local career center. Michigan students should have a pathway towards a good-paying career without having to attend college. In Lansing, he will continue to support efforts to expand career-based learning opportunities.',
      },
      {
        number: '4',
        title: 'Fixing our Roads',
        description: "While Michigan's roads need work, the Governor's proposed 45 cent gas tax increase is not the answer. Neither is placing tolls on Bay City bridges. In Lansing, Timmy will work with both parties to find a bipartisan solution to fix our roads and bridges.",
      },
      {
        number: '5',
        title: 'Protecting the Unborn',
        description: 'As a proud father of three, husband and Catholic, Timmy is unapologetically pro-life. Every child is a gift from God and deserves to have an opportunity to live their life to the fullest.',
      },
      {
        number: '6',
        title: 'Looking out for our Seniors',
        description: 'In Lansing Timmy will fight to protect senior citizens from fraudulent scams. He also supports a repeal of the pension tax, which imposes an unfair burden on seniors who are already living on a fixed income.',
      },
      {
        number: '7',
        title: 'Protecting our Constitutional Rights',
        description: 'As a gun owner and avid hunter, Timmy will make sure our Second Amendment right to keep and bear arms will not be infringed upon. Every Michigander has the right to keep their home, family and property safe.',
      },
    ],
    commitmentsLabel: 'Core Commitments',
    commitmentsHeading: 'Promises You Can Count On',
    commitmentsSubheading: 'The foundational commitments that will guide every vote.',
    commitments: [],
    ctaLabel: 'Get Involved',
    ctaHeading: 'Stand With Timmy',
    ctaText: 'This agenda only becomes reality with your support. Join Bay County residents who are ready to send a proven leader to Lansing to stand up for our families, our schools, and our community.',
  },

  // ── Signup Section ─────────────────────────────────────────
  signup: {
    heading: 'Sign Up to Join Us',
    subheading: 'Be part of the movement for Bay County.',
    description: [
      'Join our community and help us build a stronger Bay County. Your voice matters, and together we can make a difference for our families and our future.',
      'Every contribution — no matter the size — goes directly toward reaching voters, supporting our grassroots effort, and funding the campaign that will send Timmy to Lansing to fight for you.',
    ],
  },

  // ── About Intro (Homepage image + intro block) ─────────────
  aboutIntro: {
    sectionLabel: 'Meet Timmy',
    headline: 'Your Neighbor. Your Advocate.',
    intro: 'A lifelong Bay County resident and small business owner, Timmy Beson is running to represent our community in Lansing — standing up for families, schools, and the values that make our area strong.',
  },

  // ── News & Press ─────────────────────────────────────────
  news: {
    sectionHeading: 'News & Press',
    articles: [
      {
        slug: 'bold-economic-agenda',
        date: '2026-02-06',
        category: 'Press Release',
        image: 'image1',
        title: 'Timmy Beson Releases Plan to Support Bay County Families and Small Business',
        excerpt: 'Today, Timmy Beson unveiled his plan to support working families and small businesses across Bay County, including expanding skilled trades and career-based learning at the Bay/Arenac ISD.',
        body: [
          'Today, Timmy Beson unveiled his plan to support working families and small businesses across Bay County, including expanding skilled trades and career-based learning at the Bay/Arenac ISD.',
          'The plan focuses on lowering the burden on taxpayers while investing in roads, schools, and career pathways. "Bay County families deserve a representative who listens and delivers," Beson said.',
          'As the owner of Beson\'s Market, Timmy knows what it takes to meet payroll and serve the community. His plan includes support for the local career center and opposition to tolls on Bay City bridges.',
          'The campaign has made economic opportunity and safe communities centerpieces of its platform, with detailed positions on education, law enforcement, and infrastructure.',
        ],
      },
      {
        slug: 'education-coalition-endorsement',
        date: '2026-02-03',
        category: 'Press Release',
        image: 'image2',
        title: 'Beson Campaign Highlights Support for Parents and Teachers',
        excerpt: 'Timmy Beson, a former Bangor Township School Board member, reaffirmed his commitment to the safety of students, parents, and teachers and to addressing learning loss.',
        body: [
          'Timmy Beson, a former Bangor Township School Board member, reaffirmed his commitment to the safety of students, parents, and teachers and to addressing learning loss.',
          'When local school officials were attempting to force in-person instruction, Timmy sat down with parents and teachers to listen to their concerns and became a leading voice for a smarter plan to safely resume instruction.',
          '"Every child in Bay County deserves a safe place to learn and the support they need to succeed," Beson said. "I will fight for our schools and our families in Lansing."',
          'Timmy\'s three children attend Bangor Public Schools, and his experience on the school board gives him firsthand knowledge of the challenges facing our educators and families.',
        ],
      },
      {
        slug: 'bipartisan-healthcare-action',
        date: '2026-01-28',
        category: 'Press Release',
        image: 'image3',
        title: 'Beson Pledges to Look Out for Seniors in Lansing',
        excerpt: 'At a community event in Bay City, Timmy Beson outlined his plan to protect seniors from scams and support a repeal of the pension tax.',
        body: [
          'At a community event in Bay City, Timmy Beson outlined his plan to protect seniors from scams and support a repeal of the pension tax.',
          '"Seniors on a fixed income should not be hit with an unfair pension tax," Beson said. "In Lansing I will fight to protect our seniors from fraudulent scams and to repeal this burden."',
          'Timmy has made looking out for our seniors one of his seven core priorities, alongside supporting law enforcement, fixing our roads, and protecting constitutional rights.',
          'The campaign has been meeting with voters across Bay County to share his agenda and listen to concerns about the cost of living and retirement security.',
        ],
      },
      {
        slug: 'veterans-support-initiative',
        date: '2026-01-22',
        category: 'Campaign Update',
        image: 'image4',
        title: 'Beson Campaign Builds Grassroots Support Across Bay County',
        excerpt: 'The Timmy Beson campaign announced strong support from voters across Bay County, with volunteers and donors from Bangor Township, Bay City, and surrounding communities.',
        body: [
          'The Timmy Beson campaign announced strong support from voters across Bay County, with volunteers and donors from Bangor Township, Bay City, and surrounding communities.',
          'Timmy, a lifelong Bay County resident and owner of Beson\'s Market, has been meeting with families, small business owners, and community leaders to share his vision for Lansing.',
          '"I am running to stand up for Bay County — for our parents, our teachers, our law enforcement, and our way of life," Beson said. "Together we can send a proven leader to Lansing."',
          'The campaign has made supporting law enforcement, expanding skilled trades, and fixing our roads without tolls or a 45-cent gas tax key pillars of its platform.',
        ],
      },
      {
        slug: 'grassroots-fundraising-milestone',
        date: '2026-01-15',
        category: 'Campaign Update',
        image: 'image5',
        title: 'Beson Campaign Reaches Fundraising Milestone',
        excerpt: 'The Timmy Beson campaign announced it has reached a grassroots fundraising milestone, with support from residents across Bay County.',
        body: [
          'The Timmy Beson campaign announced it has reached a grassroots fundraising milestone, with support from residents across Bay County.',
          'Contributions have come from small business owners, parents, educators, and community members who want a representative who will stand up for Bay County in Lansing.',
          '"I am grateful for every supporter who has joined this fight," Beson said. "Your support helps us reach more voters and share our message: we need bipartisan solutions on roads, support for our schools, and respect for our law enforcement."',
          'Paid for by Friends of Timothy H. Beson, PO Box 88, Kawkawlin, MI 48631.',
        ],
      },
      {
        slug: 'climate-resilience-plan',
        date: '2026-01-08',
        category: 'Policy',
        image: 'image6',
        title: 'Beson Outlines Bipartisan Approach to Fixing Michigan Roads',
        excerpt: 'Timmy Beson released his position on infrastructure, opposing the Governor\'s 45-cent gas tax increase and tolls on Bay City bridges while pledging to work across the aisle for real solutions.',
        body: [
          'Timmy Beson released his position on infrastructure, opposing the Governor\'s 45-cent gas tax increase and tolls on Bay City bridges while pledging to work across the aisle for real solutions.',
          '"Michigan\'s roads need work, but raising the gas tax by 45 cents and putting tolls on our bridges is not the answer for Bay County families," Beson said. "In Lansing I will work with both parties to find a bipartisan solution to fix our roads and bridges."',
          'Fixing our roads is one of seven priorities Timmy has outlined for his campaign, alongside standing up for parents and teachers, supporting law enforcement, expanding skilled trades, protecting the unborn, looking out for seniors, and protecting Second Amendment rights.',
          'Timmy is a lifelong resident of Bay County, a John Glenn High School graduate, and the owner of Beson\'s Market in Bay City.',
        ],
      },
    ],
  },

  // ── Popup Modal ────────────────────────────────────────────
  popup: {
    headline: 'Join our movement and help stand up for Bay County.',
    disclaimerText: 'By providing your contact information, you agree to receive updates and messages from us. Message and data rates may apply. Reply STOP to opt out. Your information will not be shared with third parties.',
  },

  // ── Meta / SEO ─────────────────────────────────────────────
  meta: {
    title: 'Timmy Beson | Standing Up for Bay County',
    description: 'Timmy Beson is a lifelong Bay County resident, owner of Beson\'s Market, and former Bangor Township School Board member. He is running to represent Bay County in Lansing and stand up for families, teachers, and law enforcement.',
    keywords: 'Timmy Beson, Bay County, Michigan, campaign, Beson\'s Market, Bangor Township, Kawkawlin, state representative',
  },
}

export default siteData
