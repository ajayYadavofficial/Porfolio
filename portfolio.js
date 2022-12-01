import emoji from "react-easy-emoji";

export const greetings = {
  name: "Ajay Yadav",
  title: "Hi all, I'm Ajay",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Socket Programming on JAVA and Python",
  resumeLink:
    "https://drive.google.com/file/d/1UdSsE4j7UYlgeGdp8BhYkcKxahb3gGH3/view?usp=sharing",
};

export const openSource = {
  githubUserName: "ajayYadavofficial",
};

export const contact = {};

export const socialLinks = {
  url: "https://github.com/ajayYadavofficial",
  linkedin: "https://www.linkedin.com/in/aj-yadav/",
  github: "https://github.com/ajayYadavofficial",
  instagram: "",
  facebook: "",
  twitter: "https://twitter.com/Ajayyad97286645",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "logos:sentry-icon",
        },
      ],
    },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "SRM Institute Of Science and Technology",
    subHeader: "B.Tech in Computer Science",
    duration: "September 2020 - going",
    desc: "",
    grade: "",
    descBullets: [
      "Also a passionate about Programming and CP Algorithms",
      "Building a current project for society",
    ],
  },
];

export const experience = [
  {
    role: "Wordpress Developer Intern",
    company: "Codesign",
    companylogo: "/img/icons/common/dusecaSoftware.jpg",
    date: "Apr 2022 – Jun 2022",
    desc: "I worked as Wordpress Developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
  },
  //   {
  //     role: "API Engineer",
  //     company: "Duseca Software",
  //     companylogo: "/img/icons/common/dusecaSoftware.jpg",
  //     date: "Jan 2022 – Mar 2022",
  //     desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
  //     // descBullets: [
  //     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     // ],
  //   },
  //   {
  //     role: "Full Stack Developer",
  //     company: "Bleed-AI",
  //     companylogo: "/img/icons/common/bleedAI.jpg",
  //     date: "Sept 2021 - Oct 2021",
  //     desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
  //   },
  //   {
  //     role: "Backend Developer",
  //     company: "Wapidu",
  //     companylogo: "/img/icons/common/wapidu.jpg",
  //     date: "Sept 2021",
  //     desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
  //   },
];

export const projects = [
  {
    name: "Ecommerce Website Amazon",
    desc: "Used ReactJs, Node Js, Axios, FireBase, React Context Api",
    github: "https://github.com/ajayYadavofficial/EcommWebsiteAmazon",
    link: "https://e-clone-app-1f29a.web.app/",
  },
  {
    name: "HealthOMeter",
    desc: "This is a project based on IOT device that helps to monitor ones health status, this device is a pulse oximeter and can connect to internet to show the status to a user.",
    github: "https://github.com/ajayYadavofficial/Health_O_Meter",
  },
  {
    name: "Tindog",
    desc: "Get hands-on experience in technical skills with Tindog",
    github: "https://github.com/ajayYadavofficial/Tindog",
	link: "https://ajayyadavofficial.github.io/Tindog/",
  },
  {
    name: "NewsLetter-subscription",
    desc: "Here I have learn how to use mailchimp, heroku and Api",
    github: "https://github.com/ajayYadavofficial/NewsLetter-subscription",
  },
];

export const feedbacks = [
  {
    name: "Ashutosh",
    feedback:
      "Got my ecommerce website running smoothly",
  },
  {
    name: "Lydia Maria",
    // feedback:
    //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Ajay Yadav",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Ajay Yadav",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://portfolio.ajyadav.com/",
  keywords: [
    "Ajay",
    "Ajay Yadav",
    // "@1hanzla100",
    // "1hanzla100",
    "Portfolio",
    "Ajay Portfolio ",
    "Ajay Yadav Portfolio",
  ],
};
