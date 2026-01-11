// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import nodeLogo from './assets/tech_logo/nodejs.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import KIET_LOGO from './assets/education_logo/kiet_logo.jpeg';
import FCS_LOGO from './assets/education_logo/fcs_logo.png';

// Project Section Logo's
import FlexFitnessLogo from './assets/project_logo/flexfitness.png';
import DevUpLogo from './assets/project_logo/devup.png';
import LodgefyLogo from './assets/project_logo/lodgefy.png';
import MeghaLoomLogo from './assets/project_logo/meghaloom.png';
import VLCMediaPlayerLogo from './assets/project_logo/vlc_media_player.png';
import CalculatorLogo from './assets/project_logo/calculator.png';

// Coding Profile Section Logo's
import leetcode_logo from './assets/coding_profile/leetcode_logo.png';
import codeforces_logo from './assets/coding_profile/codeforces_logo.png';  
import codechef_logo from './assets/coding_profile/codechef_logo.png';
import geeksforgeeks_logo from './assets/coding_profile/geeksforgeeks_logo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodeLogo },
      // { name: 'Express', logo: expressLogo },
      // { name: 'MongoDB', logo: mongoDBLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const codingprofile = [
  {
    id: 0,
    title: "LeetCode",
    logo: leetcode_logo,
    link: "https://leetcode.com/u/ayushraj2450/",
    rank: "Knight",
    rating: "1800+",
    description: "1800+ rated on LeetCode | Solved 850+ DSA problems | Consistently improving problem-solving skills through hands-on coding.",
  },
  {
    id: 1,
    title: "Codeforces",
    logo: codeforces_logo,
    link: "https://codeforces.com/profile/Ayush_Raj_2027",
    rank: "Specialist",
    rating: "1400+",
    description: "Specialist at Codeforces | On a relentless journey to sharpen my edge in competitive programming.",
  },
  {
    id: 2,
    title: "CodeChef",
    logo: codechef_logo,
    link: "https://www.codechef.com/users/ayushraj2450",
    rank: "3 Star",
    rating: "1700+",
    description: "Achieved 2★ on CodeChef after consistent effort and dedication to enhance my problem-solving skills.",
  },
  {
    id: 3,
    title: "GfG",
    logo: geeksforgeeks_logo,
    link: "https://www.geeksforgeeks.org/user/ayushraj2006/",
    rank: "1500+",
    rating: "1500+",
    description: "1500+ rated on GeeksforGeeks | Engaged in a variety of coding challenges to enhance algorithmic thinking and coding proficiency.",
  },
];

  /*export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Technical Trainer Intern",
      company: "TeachToTech",
      date: "February 2026 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];*/
  
export const education = [
    {
      id: 0,
      img: KIET_LOGO,
      school: "KIET Group Of Institutions, Ghaziabad",
      date: "Sept 2023 - Present",
      grade: "8.77 CGPA",
      desc: "I am pursuing my B-Tech degree in Computer Science Engineering from KIET Group Of Institutions, Ghaziabad. I gained a strong foundation in Competitive programming, and computer science principles. I have studied courses such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various Coding Events of Competitive Programming and Hackathons that has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology(B.Tech) - Computer Science Engineering",
    },
    {
      id: 1,
      img: FCS_LOGO,
      school: "Fatima Convent Sr. Secondary School, Ghaziabad",
      date: "April 2022 - March 2023",
      grade: "92%",
      desc: "I completed my class 12 education from Fatima Convent Sr. Secondary School, Ghaziabad, under the CISCE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science(Java).",
      degree: "CISCE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: FCS_LOGO,
      school: "Fatima Convent Sr. Secondary School, Ghaziabad",
      date: " April 2020 - March 2021",
      grade: "87.7%",
      desc: "I completed my Class 10 education under ICSE board from Fatima Convent Sr. Secondary School, Ghaziabad, with a focus on Science and Computer applications.",
      degree: "ICSE(X) - Science with Computer Application",
    },
];
  
export const projects = [
    {
      id: 0,
      title: "FlexFitness",
      description:"FlexFitness is a modern, responsive fitness platform designed to help users achieve their health goals. Whether you're into strength training, cardio, or personalized workout plans, FlexFitness offers expert trainer guidance, progress tracking, diet plans, and more — all in one powerful, user-friendly interface.",
      image: FlexFitnessLogo,
      tags: ["React JS", "TailWind CSS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AyushRajgit/FlexFitness.git",
      webapp: "https://flex-fitness-one.vercel.app/",
    },
    {
      id: 1,
      title: "DevUp",
      description:"Welcome to DevUp, the official coding club.We empower students to grow in Competitive Programming, Web Development, Machine Learning, and more. Join us to level up your skills through hands-on projects, contests, and peer learning.",
      image: DevUpLogo,
      tags: ["React JS", "TailWind CSS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AyushRajgit/Devups-Website.git",
      webapp: "https://devups-website.vercel.app/",
    },
    {
      id: 2,
      title: "Lodgefy",
      description:"Lodgefy is a smart and user-friendly web application designed to help students and working professionals easily find the best hostels and PG accommodations. With features like real-time availability, hostel details, images, filters, and more, Lodgefy makes the search process smooth and reliable.",
      image: LodgefyLogo,
      tags: ["Bootstrap", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AyushRajgit/Lodgefy.git",
      webapp: "https://lodgefy.vercel.app/",
    },
    {
      id: 3,
      title: "MeghaLoom",
      description: "Megha Loom is a sleek, responsive weather application built using React and styled with Tailwind CSS, designed to deliver real-time weather updates in a minimalist UI 🌤️.It is deployed live on Vercel for easy access across devices.",
      image: MeghaLoomLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AyushRajgit/MeghaLoom_.git",
      webapp: "https://megha-loom.vercel.app/",
    },
    {
      id: 4,
      title: "VLC Media Player ",
      description:"A modern and responsive VLC-style web media player that allows users to play, pause, skip, and control video/audio directly from the browser — built with a sleek UI and essential playback features.",
      image: VLCMediaPlayerLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AyushRajgit/VLC-Media-Player.git",
      webapp: "https://vlc-media-player-coral.vercel.app/",
    },
    {
      id: 5,
      title: "Calculator",
      description:"A simple, responsive, and user-friendly calculator built using HTML, CSS, and JavaScript. This web app performs basic arithmetic operations such as addition, subtraction, multiplication, and division with a modern UI.",
      image: CalculatorLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AyushRajgit/Calculator.git",
      webapp: "https://calculator-silk-nu-17.vercel.app/",
    },
];  