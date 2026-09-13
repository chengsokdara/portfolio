export const site = {
  name: 'Sokdara Cheng',
  role: 'Senior React Native + React Engineer',
  location: 'Phnom Penh, Cambodia · ICT+7',
  tagline:
    'I ship Play/App Store apps and own Khmer + English mobile/web end-to-end — solo or as your senior RN/React hire.',
  email: 'chengsokdara@gmail.com',
  phoneDisplay: '+855 86 558 716',
  phoneTel: '+85586558716',
  resumeUrl: 'https://chengsokdara.github.io/resume/v2',
  siteUrl: 'https://chengsokdara.github.io/',
  idealClients:
    'SEA startups, Cambodian SMEs, and global teams that need a solo RN/React engineer with light backend — plus AI/voice product teams.',
} as const

export const social = {
  github: 'https://github.com/chengsokdara',
  linkedin: 'https://www.linkedin.com/in/chengsokdara',
  email: 'mailto:chengsokdara@gmail.com',
  medium: 'https://medium.com/@chengsokdara',
} as const

export const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Expo',
  'Node.js',
  'Firebase',
  'Twilio',
  'OpenAI / voice',
  'GraphQL',
  'Tailwind CSS',
  'Stripe',
] as const

export const offers = [
  {
    id: 'rn-mvp',
    title: 'React Native MVP to the stores',
    blurb:
      'Greenfield or rescue an RN/Expo app: navigation, auth, payments, CI, and Play/App Store submission — scoped to what you need to launch.',
    outcome: 'A shippable build with store-ready release notes.',
    cta: 'Scope on a call',
  },
  {
    id: 'khmer-i18n',
    title: 'Khmer + English product i18n',
    blurb:
      'Layouts, fonts, copy flows, and QA for Khmer/English mobile and web — including keyboards, RTL-adjacent edge cases, and bilingual UX.',
    outcome: 'A product that feels native to Cambodian and international users.',
    cta: 'Starting from a scoped sprint',
  },
  {
    id: 'voice-ai',
    title: 'Voice / AI feature slice',
    blurb:
      'Whisper transcription, Twilio voice, or OpenAI-powered flows integrated into your RN/React stack — grounded in production work at TalkStack and open-source use-whisper.',
    outcome: 'A working voice feature with clear API boundaries.',
    cta: 'Scope on a call',
  },
] as const

export const experience = [
  {
    company: 'HireSplit',
    role: 'Freelance Software Engineer',
    period: 'Feb 2024 – Jun 2025',
    place: 'Remote',
    summary:
      'Led end-to-end development of a Next.js referral platform with TypeScript, Tailwind CSS, and Material UI.',
    highlights: [
      'Client and candidate dashboards backed by Firebase Firestore.',
      'ATS integrations (Vincere, eBoss) so recruiters sync candidates without leaving the product.',
    ],
    links: [] as { label: string; href: string }[],
  },
  {
    company: 'TalkStack A.I.',
    role: 'Software Engineer',
    period: 'Aug 2023 – Feb 2024',
    place: 'Singapore (Remote)',
    summary:
      'Built AI phone-outreach systems: Express APIs, Twilio voice, OpenAI scripts, and a React Flow studio.',
    highlights: [
      'Twilio outbound/programmable voice with OpenAI GPT dynamic scripts.',
      'ElevenLabs / Play.ht voices; Deepgram and Google Speech for realtime audio; Azure Blob for storage.',
      'Shipped a React (Vite) + React Flow drag-and-drop call-script studio.',
    ],
    links: [{ label: 'talkstack.ai', href: 'https://talkstack.ai' }],
  },
  {
    company: 'Thegoodpsy',
    role: 'Senior Mobile Developer',
    period: 'Mar 2022 – Oct 2022',
    place: 'Brussels, Belgium (Remote)',
    summary:
      'Partnered with the CTO to port core web flows to React Native for iOS and Android.',
    highlights: [
      'Twilio Conversations + Video (WebRTC) for psychologist/patient chat and video.',
      'Stripe payments; production builds on the App Store and Google Play.',
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/thegoodpsy/id1617026748',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.thegoodpsy.mobile',
      },
    ],
  },
  {
    company: 'The Foundry / KOTRA-Riel',
    role: 'Senior Web Developer',
    period: 'Apr 2020 – Feb 2022',
    place: 'Phnom Penh, Cambodia',
    summary:
      'Led a team of four on KOTRA-Riel (React Native) and shipped Next.js products for The Foundry.',
    highlights: [
      'KOTRA-Riel: product management, charts, i18n, Firebase, and store releases.',
      'cybersecurity-kh.com admin (Next.js): courses, quizzes, animations, Firebase backend.',
      'Early design and development for MDF Commerce (Next.js).',
    ],
    links: [
      {
        label: 'KOTRA-Riel iOS',
        href: 'https://apps.apple.com/dk/app/kotra-riel/id1548441646',
      },
      {
        label: 'KOTRA-Riel Android',
        href: 'https://play.google.com/store/apps/details?id=com.she_investment.kotra_riel',
      },
    ],
  },
  {
    company: 'Joonaak',
    role: 'JavaScript Developer',
    period: 'Oct 2018 – Dec 2019',
    place: 'Phnom Penh, Cambodia',
    summary:
      'Delivery logistics: driver tracking, merchant app, billing bot, and hub tools.',
    highlights: [
      'Driver realtime tracking (React Native, maps, background geolocation) with GraphQL.',
      'Solo-developed the merchant React Native app.',
      'Telegram billing bot (Node/Express on Cloud Functions) and Joonaak Hub (Next.js).',
    ],
    links: [
      {
        label: 'Driver app',
        href: 'https://play.google.com/store/apps/details?id=com.joonaakdriver',
      },
      {
        label: 'Merchant app',
        href: 'https://play.google.com/store/apps/details?id=com.joonaak_merchant_app',
      },
    ],
  },
] as const

export const projects = [
  {
    name: 'Khmer Pride Keyboard',
    status: 'Live on Google Play',
    summary:
      'Latin-to-Khmer typing with 15,000+ words, full Khmer and English layouts, on-device suggestions, Personal Dictionary, and optional Pro themes/cloud backup.',
    proof: '1K+ downloads on Google Play',
    stack: ['Android', 'Keyboard IME', 'Khmer'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.chengsokdara.keyboard',
      },
    ],
  },
  {
    name: 'Rawaken',
    status: 'Early',
    summary:
      'Personal product in early stages — building carefully without chasing vanity metrics.',
    proof: 'Early release',
    stack: ['Mobile'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=ra.waken.app',
      },
    ],
  },
  {
    name: 'KhmerQR',
    status: 'Live on Google Play',
    summary:
      'QR scanner and generator (Expo + Redux), with a Pro variant on Google Play.',
    proof: 'Google Play listing',
    stack: ['Expo', 'Redux'],
    links: [
      {
        label: 'KhmerQR',
        href: 'https://play.google.com/store/apps/details?id=com.rawewhat.khmerqr',
      },
      {
        label: 'KhmerQR Pro',
        href: 'https://play.google.com/store/apps/details?id=com.rawewhat.khmerqr.paid',
      },
    ],
  },
  {
    name: 'KHmeter',
    status: 'Live on Google Play',
    summary: 'Khmer taximeter fare calculator with Google Maps.',
    proof: 'Google Play listing',
    stack: ['Android', 'Maps'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.daradev.taximeter',
      },
    ],
  },
  {
    name: 'Wedding Manager',
    status: 'Live on Google Play',
    summary: 'Guest lists and gift tracking with reporting for wedding hosts.',
    proof: 'Google Play listing',
    stack: ['Android'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.chengsokdara.wedding.manager',
      },
    ],
  },
] as const

export const openSource = [
  {
    name: 'use-whisper',
    stars: '~785★',
    summary:
      'React hook for OpenAI Whisper — speech-to-text with recording and transcription utilities.',
    href: 'https://github.com/chengsokdara/use-whisper',
  },
  {
    name: 'use-whisper-native',
    stars: '~15★',
    summary:
      'Expo / React Native port of use-whisper for on-device recording and Whisper transcription.',
    href: 'https://github.com/chengsokdara/use-whisper-native',
  },
] as const
