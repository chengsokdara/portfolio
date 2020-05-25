/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section
import React from "react";
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ra",
  title: "Cheng Sokdara Portfolio",
  subTitle: emoji([
    "A Multiversal Stack Software Engineer. 🚀",
    <br />,
    "Expertise in NodeJs, ReactJs and React Native. ⚛️",
    <br />,
    "Experienced in Kotlin and Java for Android. 🤖",
    <br />,
    "Proficient in mananging Firebase and AWS. ☁️",
    <br />,
    <br />,
    "With almost a decade of experience in the field, I can make any applications for any platforms. 💪",
    <br />,
    <br />,
    "javascript, node, react, react-native, electron, android, kotlin, java, firebase, graphql, aws, etc...",
  ]),
  resumeLink:
    "https://docs.google.com/document/d/1PIxudE13LQjNhPPm42nOloR9EO8nhcalvnijZi68lPk/edit?usp=sharing",
};

// Your Social Media Link
const socialMediaLinks = {
  github: "https://github.com/rawewhat",
  linkedin: "https://www.linkedin.com/in/chengsokdara",
  gmail: "chengsokdara@gmail.com",
  gitlab: "https://gitlab.com/chengsokdara",
  facebook: "https://www.facebook.com/homi3",
  //instagram: "https://www.instagram.com/homi3kh",
  twitter: "https://twitter.com/homi3kh",
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
      stack: "Mobile (Expert+)",
      progressPercentage: "90%",
    },
    {
      stack: "Frontend (Expert)", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      stack: "Backend (Intermediate)",
      progressPercentage: "70%",
    },
    {
      stack: "UI/UX (Intermediate)",
      progressPercentage: "70%",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken:
    "MjI3OWI4MDZkNmRmYmJmMzVkMTZmOThjMDQ2YzQ1MTYwZjJmMmQwZA==",
  githubUserName: "chengsokdara",
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Personal & Work Projects",
  subtitle:
    "Mobile apps I made by myself and help to make over the year, completely self-learn.",
  projects: [
    {
      name: "Khmer Live TV",
      image:
        "https://image.winudf.com/v2/image1/Y29tLmRhcmFkZXYudHZfaWNvbl8xNTQxMjQ3NDYyXzAwMQ/icon.png?w=170&fakeurl=1",
      link: "https://apkpure.com/khmer-live-tv/com.daradev.tv",
    },
    {
      name: "Khmer Unicode Installer",
      image:
        "https://lh3.googleusercontent.com/DBcbktYKyuNKjPKe7SO2MarZM23l6E23Gx8bQ5kU0dfMtcBVwDaB5rId67jHiKSuKwo=s180-rw",
      link:
        "https://play.google.com/store/apps/details?id=com.blogspot.androidsanctum.kui",
    },
    {
      name: "Khmer Font Store",
      image:
        "https://lh3.googleusercontent.com/WDnI-suefO27BgRGi8-oSjUXkEAIaHTxvEDZa8Vr9iBXQxYPplYSxY-5gvcUKsufc_c=s180-rw",
      link:
        "https://play.google.com/store/apps/details?id=com.daradev.fontstore",
    },
    {
      name: "Joonaak Merchant",
      image:
        "https://lh3.googleusercontent.com/5ynblL2_5PpTFErTivBLDIYh1wG2I7paoM3p8S7FXnQZ9DdVmiBED4rQUOMii1a8QlSQ=s180-rw",
      link:
        "https://play.google.com/store/apps/details?id=com.joonaak_merchant_app",
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
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
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
      title: "THe Foundry",
      subtitle: "Senior Web Developer",
      year: "Apr 20, 2020 - Present",
      image:
        "https://scontent.fpnh20-1.fna.fbcdn.net/v/t1.0-9/80787183_102929864555882_2269820603106066432_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeFRQ6lkT5BWY2L_qbwwM5jTOGT-87sbLIs4ZP7zuxssizjzkWDJQGKAl-_m2mwKGzA&_nc_oc=AQlWN1A7alwzTdK6eCtPPYyghuQLn05cvJjdeYcnPYJQBNM8BgaYpkJzytPN0WXasWE&_nc_ht=scontent.fpnh20-1.fna&oh=88e074ec3866cbb90bbf7a699fc9d527&oe=5EEF5EF6",
      footerLink: [{ name: "KOTRA-riel by SHE Investment", url: "" }],
    },
    {
      title: "Ezpizee",
      subtitle: "Senior Frontend Developer",
      year: "Mar 02, 2020 - Apr 02, 2020",
      image:
        "https://scontent.fpnh20-1.fna.fbcdn.net/v/t1.0-9/67798721_1365710246909463_1158632599929749504_n.png?_nc_cat=107&_nc_sid=7aed08&_nc_eui2=AeHGZw72A1YBhDBDqWoVGGntUzBAEkDnWL5TMEASQOdYvun-47xPEhbjI-3LvSemXc0&_nc_oc=AQlS8VmMKAxsyuBWhVS59rISW7xXJ0bNwB4xxG4HjVcSceMXrTpa4T-KlVEO7vHrO-4&_nc_ht=scontent.fpnh20-1.fna&oh=49f6c6bdbbb2aac132f563287b7eaca5&oe=5EEF1599",
      footerLink: [{ name: "E-comerce POS App", url: "" }],
    },
    {
      title: "IDP / ACE Cambodia",
      subtitle: "Web & Mobile Application Developer",
      year: "Jan 09, 2020 - Feb 28, 2020",
      image:
        "https://scontent.fpnh20-1.fna.fbcdn.net/v/t1.0-9/40647524_1875544829206887_6077611403693260800_n.jpg?_nc_cat=1&_nc_sid=85a577&_nc_eui2=AeHYWacLRc8XzNpkEAZIWIzeYnV0xqPkA1RidXTGo-QDVJYPi5HpsJwC78Ml0ILnWio&_nc_oc=AQkXpCZZlQ3rirVfl1ci_BQp__mzIaaDGcpXC7t_nOnxyFbcKG_qUgLHLtmxK6tf3g4&_nc_ht=scontent.fpnh20-1.fna&oh=39cb2cd15548c622fd175aa7cb4e5247&oe=5EEEC333",
      footerLink: [
        { name: "CamDebate App (Private)", url: "" },
        {
          name: "Calculate Distance Service",
          url: "",
        },
      ],
    },
    {
      title: "Clik Asia",
      subtitle: "JavaScript Developer",
      year: "Jul 08, 2019 - Aug 01, 2019",
      image:
        "https://scontent.fpnh20-1.fna.fbcdn.net/v/t1.0-9/35147391_2111436182437279_8211977959578271744_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeHrAG-3v4-L0UZqul8fCsOQExIcb-opT3ATEhxv6ilPcMKhCK333KJ-8LEFFyzrSOA&_nc_oc=AQnI5VDneMlGwRS0I9avWgzNoDjxGuuXOxDI-fJfKnKlaWkSIj1tHNXGk6TWQ4NS1RU&_nc_ht=scontent.fpnh20-1.fna&oh=ca8d70b73481f60a5d4d1c2e091cfabc&oe=5EF08C95",
      footerLink: [
        {
          name: "ActStore",
          url: "https://github.com/egislook/actstore",
        },
      ],
    },
    {
      title: "Joonaak Enterprise Solutions",
      subtitle: "Senior JavaScript Developer",
      year: "Oct 01, 2018 - Dec 01, 2019",
      image:
        "https://joonaak.com/wp-content/uploads/revslider/main_slider1/Joonaak-Logo-copy.png",
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
      url:
        "https://medium.com/@chengsokdara/global-state-management-purely-with-react-hooks-using-config-like-react-navigation-a9550c3c64cb",
      title: "StoRa, redux simplified",
      description:
        "Global state management purely with React Hooks — using config like React Navigation.",
    },
    {
      url:
        "https://medium.com/@chengsokdara/simplified-api-to-use-firestore-written-in-hook-for-react-ff6e31725ebc",
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
  subtitle: "Got a great idea you want to be come reality?",
  number: "+855-86-558-716",
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  worksSection,
};
