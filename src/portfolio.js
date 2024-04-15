/* Change this file to get your personal Portfolio */
import thegoodpsy from './assests/images/thegoodpsy.png'
import thefoundryapp from './assests/images/thefoundryapp.jpeg'
import joonaak from './assests/images/joonaak.jpeg'
import mdf from './assests/images/mdf.png'
import talkstack from './assests/images/talkstack.png'
import talkstackblack from './assests/images/talkstackblack.jpg'

// Your Summary And Greeting Section
import React from "react";
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ra",
  title: "Cheng Sokdara Portfolio",
  subTitle: emoji([
    "Software Engineer. 🚀",
    <br />,
    "Specialize in ReactJs, React Native and NodeJs. ⚛️",
    // <br />,
    // "Experienced in Kotlin and Java for Android. 🤖",
    <br />,
    "Proficient in NextJs, Firebase, GraphQL and Twilio. ☁️",
    <br />,
    <br />,
    "With more than a decade of experience in the field, I can make any applications for any platforms. 💪",
    <br />,
    <br />,
    "javascript, react, react-native, node, electron, android, kotlin, java, firebase, graphql, aws amplify, etc...",
  ]),
  resumeLink:
    "https://chengsokdara.github.io/resume",
};

// Your Social Media Link
const socialMediaLinks = {
  github: "https://github.com/chengsokdara",
  linkedin: "https://www.linkedin.com/in/chengsokdara",
  gmail: "chengsokdara@gmail.com",
  // gitlab: "https://gitlab.com/chengsokdara",
  // facebook: "https://www.facebook.com/homi3",
  // instagram: "https://www.instagram.com/homi3kh",
  // twitter: "https://twitter.com/homi3kh",
};

// Your Skills Section
const skillsSection = {
  title: "Skills",
  subTitle:
    "From idea concept to project planning, turning it into UI/UX, actual coding, testing for quality, and releasing production grade application to the mass.",
  skills: [
    emoji(
      "⚡ Develop cross-platform mobile app for Android and iOS using React Native."
    ),
    emoji(
      "⚡ Develop web application using ReactJs, NextJs, Redux, GraphQL, Firebase."
    ),
    emoji(
      "⚡ Develop desktop application using ElectronJs for Windows, macOS and Linux."
    ),
    emoji(
      "⚡ Develop backend microservice with NodeJs, AWS Lambda, Firebase Functions."
    ),
    emoji(
      "⚡ Project management or scrum with Trello, ClickUp, GitHub Project."
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "ReactJs & React Native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Kotlin & Java for Android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Desktop Program with ElectronJs",
      fontAwesomeClassname: "fab fa-windows",
    },
    {
      skillName: "UI/UX",
      fontAwesomeClassname: "fab fa-figma",
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-dice-d20",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      stack: "Mobile (Specialist)",
      progressPercentage: "90%",
    },
    {
      stack: "Frontend (Specialist)", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      stack: "UI/UX (Specialist)",
      progressPercentage: "80%",
    },
    {
      stack: "Backend (Intermediate)",
      progressPercentage: "70%",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken:
    "Z2hwX0VRWWg2anV0aWxBcm5SMVd5MkZiaU05c1Q4Y2ZtVzE3czk3aw==",
  githubUserName: "chengsokdara",
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Personal Projects
const personalProjects = {
  title: "Personal Projects",
  subTitle:
    "Mobile app I made all by myself either as a hobby or to learn new technology.",
  projects: [
    {
      name: "Wedding Manager",
      image:
        "https://play-lh.googleusercontent.com/eoP1rxXk0UGUcVU8PUywxSL-6G9jIMcxk9TbeJLJ36tleJX9QJc8IRE4oILZQ53Jj_M=s360-rw",
      link: "https://play.google.com/store/apps/details?id=com.chengsokdara.wedding.manager",
    },
    {
      name: "KhmerQR Pro",
      image:
        "https://play-lh.googleusercontent.com/N6R8UGGkEGRLRDsWwFkkh4TtEPfE8HFIwHoH8MB7vMzVJ7IASiLqjg6l9vkk3Nlt-w=s360-rw",
      link: "https://play.google.com/store/apps/details?id=com.rawewhat.khmerqr.paid",
    },
    {
      name: "KhmerQR",
      image:
        "https://play-lh.googleusercontent.com/-Y1Jjp_y_0bJz8t3sTwZ__VHZHxPvGcMN51in5_tnOG6LlOMzEI8lXKDKWMUl-gN_A=s360-rw",
      link: "https://play.google.com/store/apps/details?id=com.rawewhat.khmerqr",
    },
    {
      name: "KHmeter",
      image:
        "https://play-lh.googleusercontent.com/8hfSbVBDz6na1biEyq5w068qxeCatgPKGr3B8jSMO9vltT71CbWvg6G-6KIanvYSEIGi=s180-rw",
      link: "https://play.google.com/store/apps/details?id=com.daradev.taximeter",
    },
    {
      name: "Khmer Live TV",
      image:
        "https://image.winudf.com/v2/image1/Y29tLmRhcmFkZXYudHZfaWNvbl8xNTQxMjQ3NDYyXzAwMQ/icon.png?w=170&fakeurl=1",
      link: "https://apkpure.com/khmer-live-tv/com.daradev.tv",
    },
    {
      name: "Khmer Font Store",
      image:
        "https://lh3.googleusercontent.com/WDnI-suefO27BgRGi8-oSjUXkEAIaHTxvEDZa8Vr9iBXQxYPplYSxY-5gvcUKsufc_c=s180-rw",
      link: "https://play.google.com/store/apps/details?id=com.daradev.fontstore",
    },
    {
      name: "Khmer Unicode Installer",
      image:
        "https://lh3.googleusercontent.com/DBcbktYKyuNKjPKe7SO2MarZM23l6E23Gx8bQ5kU0dfMtcBVwDaB5rId67jHiKSuKwo=s180-rw",
      link: "https://play.google.com/store/apps/details?id=com.blogspot.androidsanctum.kui",
    },
  ],
};

// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Work Projects",
  subtitle: "Web and mobile apps that I contributed over the year.",
  projects: [
    {
      name: 'TalkStack API (A.I. Call Agent)',
      image: talkstackblack,
      link: 'https://talkstack.ai'
    },
    {
      name: 'TalkStack Dashboard (Drag and Drop Studio)',
      image: talkstackblack,
      link: 'https://talkstack.ai'
    },
    {
      name: "Thegoodpsy Web App (contributor)",
      image: thegoodpsy,
      link: "https://thegoodpsy.com/"
    },
    {
      name: "Thegoodpsy iOS App (solo-develop)",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/6b/ba/04/6bba049e-329a-04b5-0321-8ee0d46d07af/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png",
      link: "https://apps.apple.com/us/app/thegoodpsy/id1617026748",
    },
    {
      name: "Thegoodpsy Android App (solo-develop)",
      image: "https://play-lh.googleusercontent.com/mwp3rRcxaACiaq3z0R7YwTwIyGDZMTWjNMiisZw57VZ6shr8allGr0sq_ZkwIgmB6A=w480-h960-rw",
      link: "https://play.google.com/store/apps/details?id=com.thegoodpsy.mobile",
    },
    {
      name: "Cybersecurity Web App (solo-develop)",
      image:
        "https://cybersecurity-kh.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Flogo-header.a40315cbcfe69c794183347a2f8951ec.png&w=256&q=75",
      link: "https://cybersecurity-kh.com",
    },
    {
      name: "MDF Commerce Web App (contributor)",
      image: mdf,
      link: "https://mdf-commerce.vercel.app/",
    },
    {
      name: "MELP Mobile App (co-develop)",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/7d/92/8d7d9257-5ff1-0c99-ce2a-01f97ece7ebd/AppIcon-prod-0-0-1x_U007emarketing-0-5-0-0-85-220.png/460x0w.png",
      link: "https://melp.com/",
    },
    {
      name: "NO-CV iOS App (contributor)",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/ae/d9/de/aed9de04-bf14-a4e4-0e63-4e520143539e/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png",
      link: "https://apps.apple.com/gb/app/no-cv/id1515692284",
    },
    {
      name: "NO-CV Android App (contributor)",
      image:
        "https://play-lh.googleusercontent.com/2RtouLIshDIrnpxQUsWjc9yJrRYxwcTiXfiljTRR-4K55cGERBF1q7rJNOuLKPe2kg=s360-rw",
      link: "https://play.google.com/store/apps/details?id=eu.nocvapp.nocv",
    },
    {
      name: "KOTRA-riel iOS App (co-develop)",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/61/22/0e/61220e5a-2536-918b-d53b-821d625996ca/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png",
      link: "https://apps.apple.com/dk/app/kotra-riel/id1548441646",
    },
    {
      name: "KOTRA-riel Android App (co-develop)",
      image:
        "https://play-lh.googleusercontent.com/10B7UIYmmxVP4-FPu3VrHfPP4x7TdTb6f_w1Ww9ixgzML5r-fNvW0SqSV7ZfV9gI7D8=s180-rw",
      link: "https://play.google.com/store/apps/details?id=com.she_investment.kotra_riel",
    },
    {
      name: "Joonaak Driver Mobile App (co-develop)",
      image:
        "https://play-lh.googleusercontent.com/HYT8Bsv__FQAuepbzQbEG6ZWN3NMKiY4doaORh2h3PGjCXmZvCD0XjgjlAYplMe__u11=s360-rw",
      link: "https://play.google.com/store/apps/details?id=com.joonaakdriver",
    },
    {
      name: "Joonaak Merchant Mobile App (solo-develop)",
      image:
        "https://lh3.googleusercontent.com/5ynblL2_5PpTFErTivBLDIYh1wG2I7paoM3p8S7FXnQZ9DdVmiBED4rQUOMii1a8QlSQ=s180-rw",
      link: "https://play.google.com/store/apps/details?id=com.joonaak_merchant_app",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More
const achievementSection = {
  title: emoji("Work Experience 💼 "),
  subtitle: "Previous workplaces and what I have learned.",

  achivementsCards: [
    {
      title: "Joonaak Enterprise Solutions",
      subtitle: "Senior JavaScript Developer",
      image:
        "https://joonaak.com/wp-content/uploads/revslider/main_slider1/Joonaak-Logo-copy.png",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More
const worksSection = {
  title: emoji("Work Experience 💼 "),
  subtitle: "Previous workplaces and what I have contributed.",

  workCards: [
    {
      title: 'TalkStack A.I.',
      subtitle: 'Software Engineer',
      year: "Aug 01, 2023 - February 20, 2024",
      image: talkstack,
      footerLink: [
        {
          name: 'TalkStack API'
        },
        {
          name: 'TalkStack Dashboard - Studio'
        }
      ],
      backgroundColor: "#1A1A1A"
    },
    {
      title: "Websie S.R.L.",
      subtitle: "Senior Mobile Developer",
      year: "Mar 01, 2022 - Oct 31, 2022",
      image: thegoodpsy,
      footerLink: [
        {
          name: "Thegoodpsy Web App",
          url: "https://thegoodpsy.com/",
        },
        {
          name: "Thegoodpsy iOS App",
          url: "https://apps.apple.com/us/app/thegoodpsy/id1617026748",
        },
        {
          name: "Thegoodpsy Android App",
          url: "https://play.google.com/store/apps/details?id=com.thegoodpsy.mobile",
        }
      ],
    },
    // {
    //   title: "The Foundry",
    //   subtitle: "Freelance React Developer",
    //   year: "Jul 19, 2021 - Present",
    //   image:
    //     "https://thefoundry.app/wp/wp-content/themes/thefoundry/images/TheFoundry_Logo-White.png",
    //   footerLink: [{ name: "Cybersecurity", url: "" }],
    //   backgroundColor: "#14213d",
    // },
    // {
    //   title: "Mediapark Cambodia",
    //   subtitle: "Senior React Developer",
    //   year: "Apr 1, 2021 - June 1, 2021",
    //   image:
    //     "https://mediapark.com/wp-content/themes/mediapark/assets/images/mp_logo_white.png",
    //   footerLink: [
    //     { name: "MELP (releasing)", url: "" },
    //     {
    //       name: "NO-CV for iOS",
    //       url: "https://apps.apple.com/gb/app/no-cv/id1515692284",
    //     },
    //     {
    //       name: "NO-CV for Android",
    //       url: "https://play.google.com/store/apps/details?id=eu.nocvapp.nocv",
    //     },
    //   ],
    //   backgroundColor: "#000000",
    // },
    {
      title: "thefoundry.app",
      subtitle: "Senior Web Developer",
      year: "Apr 20, 2020 - Feb 28, 2022",
      image: thefoundryapp,
      footerLink: [
        {
          name: "KOTRA-riel for iOS",
          url: "https://apps.apple.com/dk/app/kotra-riel/id1548441646",
        },
        {
          name: "KOTRA-riel for Android",
          url: "https://play.google.com/store/apps/details?id=com.she_investment.kotra_riel&hl=en&gl=US",
        },
      ],
      // backgroundColor: "#14213d",
    },
    // {
    //   title: "Ezpizee",
    //   subtitle: "Senior Frontend Developer",
    //   year: "Mar 02, 2020 - Apr 02, 2020",
    //   image: "https://cdn.ezpz.solutions/assets/logo/default-logo_inverted.svg",
    //   footerLink: [{ name: "E-comerce POS App", url: "" }],
    //   backgroundColor: "#075aa5",
    // },
    // {
    //   title: "IDP / ACE Cambodia",
    //   subtitle: "Web & Mobile Application Developer",
    //   year: "Jan 09, 2020 - Feb 28, 2020",
    //   image:
    //     "https://www.idp.com/medias/idp-logo.svg?context=bWFzdGVyfHJvb3R8NjQ4MXxpbWFnZS9zdmcreG1sfGg2OS9oZWYvOTkwNjA4MDU0Njg0Ni5zdmd8NzEzYzk0M2E0M2M5ZTY0MjM0ZGMwNzIzMDhiM2U3MzBkZWU0OTczMTZkOGQwYjA3NTFmYTVhMWViYWFhZDBiMg",
    //   footerLink: [
    //     { name: "CamDebate App (Private)", url: "" },
    //     {
    //       name: "Calculate Distance Service",
    //       url: "",
    //     },
    //   ],
    // },
    // {
    //   title: "Clik Asia",
    //   subtitle: "JavaScript Developer",
    //   year: "Jul 08, 2019 - Aug 01, 2019",
    //   image:
    //     "https://clik.asia/static/logo-landscape-c2779f10cbc832a5d8a4c00f1eeee8d6.png",
    //   footerLink: [
    //     {
    //       name: "ActStore",
    //       url: "https://github.com/egislook/actstore",
    //     },
    //   ],
    // },
    {
      title: "Joonaak Enterprise Solutions",
      subtitle: "Senior JavaScript Developer",
      year: "Oct 01, 2018 - Dec 01, 2019",
      image: joonaak,
      footerLink: [
        {
          name: "Telegram Bill Bot",
          url: "https://joonaak-bill-bot.web.app/",
        },
        {
          name: "Joonaak Hub v2",
          url: "https://joonaak-hub.web.app/",
        },
      ],
    },
  ],
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
      url: 'https://medium.com/@chengsokdara/transform-your-speech-into-text-with-the-power-of-openai-and-usewhisper-ca78f8e74160',
      title: 'useWhisper, react hook for OpenAI Whisper',
      description: 'Transform Your Speech into Text with the Power of OpenAI and useWhisper'
    },
    {
      url: "https://medium.com/@chengsokdara/global-state-management-purely-with-react-hooks-using-config-like-react-navigation-a9550c3c64cb",
      title: "StoRa, redux simplified",
      description:
        "Global state management purely with React Hooks — using config like React Navigation.",
    },
    {
      url: "https://medium.com/@chengsokdara/simplified-api-to-use-firestore-written-in-hook-for-react-ff6e31725ebc",
      title: "QueRa, firestore simplified",
      description: "Simplified API to use Firestore written in hook for React.",
    },
  ],
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C",
    },
  ],
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Got a great idea you want to become reality?",
  number: "+85586558716",
  email_address: "chengsokdara@gmail.com",
};

//Twitter Section
const twitterDetails = {
  userName: "homi3kh", //Replace "twitter" with your twitter username without @
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  openSource,
  personalProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  worksSection,
};
