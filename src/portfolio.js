/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Madhuaravind P",
  title: "Hi all, I'm Madhuaravind P",
  subTitle: emoji(
    "Aspiring Data Analyst and Developer passionate about transforming raw data into actionable insights through scalable and sustainable solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TNPXOp74RA6GDe-PkvJ8lSpMy1Kja_S9/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Madhuarvind",
  linkedin: "https://www.linkedin.com/in/madhuaravind-p-a18325290/",
  gmail: "madhuaravind21@gmail.com",
  gitlab: "https://gitlab.com/Madhuarvind",
  facebook: "https://www.facebook.com/madhu.aravind.52",
  medium: "https://medium.com/@madhuaravind21",
  twitter: "https://x.com/madhuaravind21",
  kaggle: "https://www.kaggle.com/madhuaravindp",
  hackerrank: "https://www.hackerrank.com/profile/madhuaravind21",
  leetcode: "https://leetcode.com/u/Madhuaravind/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer & Data Analyst",
  skills: [
    emoji(
      "⚡ Building responsive and dynamic web apps using HTML, CSS, JavaScript, and React"
    ),
    emoji(
      "⚡ Designing efficient databases and backend systems using MySQL and APIs"
    ),
    emoji(
      "⚡ Building interactive dashboards and data pipelines using Python and Tableau"
    ),
    emoji(
      "⚡ Working on machine learning projects including regression, classification, and clustering"
    ),
    emoji(
      "⚡ Applying statistical models and algorithms to drive decision-making"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "M KUMARASAMY COLLEGE OF ENGINEERING",
      logo: require("./assets/images/mkce_logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
      duration: "August 2023 - April 2027",
      desc: "Participated in the research and published 2 papers.",
      descBullets: [
        "Completed advanced coursework in Machine Learning, Data Structures, and Artificial Intelligence",
        "Participated in hackathons and collaborative projects on AI-driven data analysis"
      ]
    },
    {
      schoolName: "GNANASAMBANDAR MATRICULATION HIGHER SECONDARY SCHOOL",
      logo: require("./assets/images/gmhss_logo.jpg"),
      subHeader: "Computer Science",
      duration: "June 2022 - April 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Excelled in Mathematics, Programming Fundamentals, and Computer Science, achieving top 10% rank"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript & React",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend & Databases (Node.js, MySQL)",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning (Scikit-learn, Pandas)",
      progressPercentage: "65%"
    },
    {
      Stack: "Visualization (Tableau)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IBM Cloud & AI",
      company: "Edunet Foundation",
      companylogo: require("./assets/images/edunet.png"),
      date: "Jul 2023 – Present",
      desc: "Analyzed data to engage and improve engagement metrics.",
      descBullets: [
        "Reduced manual effort by 60% using Python & Pandas",
        "Built BI dashboards to track key learning KPIs"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Pantech E Learning Pvt Ltd",
      companylogo: require("./assets/images/pantech.jpeg"),
      date: "December 2024 – May 2025",
      desc: "Automated data cleaning/reporting, reducing manual effort by 60% using Python & Pandas. Built BI dashboards to track key learning KPIs."
    },
    {
      role: "Frontend Developer Intern",
      company: "IBM",
      companylogo: require("./assets/images/ibm.jpg"),
      date: "Jan 2023 – Feb 2023",
      desc: "Developed responsive frontend interfaces using HTML, CSS, and JavaScript, contributing to IBM's web applications and improving user experience through modern UI/UX practices."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my notable projects from GitHub",
  projects: [
    {
      image: require("./assets/images/zomato.jpg"),
      projectName: "Zomato Data Analysis",
      projectDesc: "Data analysis project on Zomato dataset using Python, Pandas, and visualization techniques to derive insights.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Madhuarvind/zomato-data-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/smartbite.jpeg"),
      projectName: "Smartbite",
      projectDesc: "AI Powered Health Meal Suggestion App based on user preferences, built with Python.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Madhuarvind/Smartbite"
        }
      ]
    },
    {
      image: require("./assets/images/datapre.jpg.png"),
      projectName: "Data Preprocessing",
      projectDesc: "Implementation of data preprocessing techniques in Python for machine learning pipelines.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Madhuarvind/Data-preprocessing"
        }
      ]
    },
    {
      image: require("./assets/images/inventory.jpg"),
      projectName: "InventoryPro",
      projectDesc: "An inventory management system for tracking stock, orders, and sales efficiently.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Madhuarvind/InventoryPro"
        }
      ]
    },
    {
      image: require("./assets/images/store.png"),
      projectName: "Retail Sales Analysis",
      projectDesc: "Data analysis project focusing on retail sales trends, forecasting, and insights using Python and visualization tools.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Madhuarvind/Retail_sales_analysis"
        }
      ]
    },
    {
      image: require("./assets/images/codeai.png"),
      projectName: "Code Challenge AI",
      projectDesc: "AI-powered solutions to coding challenges, implementing algorithms and machine learning models.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Madhuarvind/Code_Challenge_AI"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle: "Professional Certificate in Google Data Analytics from Coursera",
      image: require("./assets/images/google.jpg"),
      imageAlt: "Google Data Analytics Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/G8705L6G8OLK"
        }
      ]
    },
    {
      title: "Python for Data Science",
      subtitle: "NPTEL Online Certification in Python for Data Science",
      image: require("./assets/images/nptel.jpg"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs17/Course/NPTEL25CS17S124900043404287557.pdf"
        }
      ]
    },
    {
      title: "GUVI Certificate",
      subtitle: "Certificate from GUVI in a relevant course",
      image: require("./assets/images/guvi.png"),
      imageAlt: "GUVI Logo",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://www.guvi.in/verify-certificate?id=n1ia71x762M819p165"
        }
      ]
    },
    {
      title: "MongoDB University Certificate",
      subtitle: "Certificate from MongoDB University",
      image: require("./assets/images/mongodb.webp"),
      imageAlt: "MongoDB Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.mongodb.com/c/ALfhHsoSRamKOD6823sWpg"
        }
      ]
    },
    {
      title: "IBM Data Science Certificate",
      subtitle: "Certificate from Cognitive Class (IBM) in Data Science",
      image: require("./assets/images/ibm.jpg"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://courses.cognitiveclass.ai/certificates/2a04012f6eac46428c2af0114d4c9864"
        }
      ]
    },
    {
      title: "Data Science Professional Certificate",
      subtitle: "Professional Certificate in Data Science from Oracle",
      image: require("./assets/images/oracle.jpg"),
      imageAlt: "Data Science Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1YT0Haa_ar0PcRThIlJ7_zS023tcpqxbX/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Machine Learning Certificate",
      subtitle: "Certificate in Machine Learning with Python",
      image: require("./assets/images/cognitive.jpg"),
      imageAlt: "Machine Learning Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1a1q98044xCxuFO__6mUTSXkKU28fUJio/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Digital Analytics & Regression Certificate",
      subtitle: "Certificate Digital Analytics & Regression",
      image: require("./assets/images/cognitive.jpg"),
      imageAlt: "Digital Analytics & Regression Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1RFJ-bnHvTRwl8eVOFJcAQHA_vxLcKBkx/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@madhuaravind21/data-analysis-with-python",
      title: "Data Analysis with Python and Pandas",
      description:
        "Exploring data analysis techniques using Python and Pandas for real-world insights and visualization."
    },
    {
      url: "https://medium.com/@madhuaravind21/building-bi-dashboards",
      title: "Building Interactive BI Dashboards",
      description:
        "How to create interactive dashboards with Tableau and Python to track key metrics and KPIs."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7904235240",
  email_address: "madhuaravind21@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
