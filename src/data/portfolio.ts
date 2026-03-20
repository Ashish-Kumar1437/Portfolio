export const personalInfo = {
  name: "Ashish Kumar",
  title: "Full Stack Engineer",
  subtitle: "I design & build end-to-end systems — from pixel-perfect frontends to robust backend services — that scale to hundreds of thousands of users.",
  email: "ashishvg1437@gmail.com",
  phone: "+91 7082968167",
  linkedin: "https://www.linkedin.com/in/ashishkumar1502",
  github: "https://github.com/Ashish-Kumar1437",
  hackerrank: "https://www.hackerrank.com/profile/ashishvg1437",
  about:
    "Full Stack Engineer currently at PhonePe, previously at Moveinsync where I modernized enterprise transportation infrastructure serving 500K+ daily users. I work across the entire stack — React, Angular, Next.js on the frontend; Spring Boot, Node.js, PostgreSQL, and AWS on the backend. From building real-time WebSocket dashboards to designing RESTful APIs and deploying on AWS, I thrive at the intersection of great UX and solid engineering.",
};

export const education = {
  institution: "Lovely Professional University",
  degree: "B.Tech in Computer Science & Engineering",
  cgpa: "8.35",
  duration: "June 2020 - May 2024",
};

export const skills = {
  languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Java",
    "SQL",
    "C++",
    "SASS",
  ],
  frontend: [
    "React.js",
    "Angular",
    "Next.js",
    "Svelte",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
    "RxJS",
    "NgRx",
    "Micro Frontend",
    "HighCharts",
    "Google Maps API",
  ],
  backend: [
    "Node.js",
    "Spring Boot",
    "GraphQL",
    "REST APIs",
    "WebSockets",
    "JWT",
    "PostgreSQL",
    "JSP / Servlets",
    "WebHooks",
  ],
  tools: [
    "Git",
    "npm",
    "nvm",
    "Vite",
    "Webpack",
    "Jenkins",
    "AWS (S3, EC2, RDS)",
    "Postman",
    "Nginx",
  ],
  coreSkills: [
    "Data Structures & Algorithms",
    "Communication",
    "Troubleshooting",
    "Team Leadership",
    "Decision Making",
  ],
};

export const experiences = [
  {
    role: "Software Development Engineer 1",
    company: "PhonePe",
    duration: "Dec 2025 – Present",
    logo: "https://logo.clearbit.com/phonepe.com",
    description:
      "Building internal tools and enterprise integrations at one of India's largest fintech platforms.",
    highlights: [
      "Built Google Groups community feature for UMS frontpage, integrating Google Groups API to fetch and display community data, enhancing internal collaboration",
      "Implemented SAML-based authentication for SuccessFactors integration, enabling secure Single Sign-On (SSO) and enhancing enterprise identity management",
      "Developed Employee Photo sync pipeline from SuccessFactors, automating profile image synchronization and ensuring data consistency across HR systems",
    ],
  },
  {
    role: "Software Engineer",
    company: "Moveinsync",
    duration: "Apr 2024 – Dec 2025",
    logo: "https://logo.clearbit.com/moveinsync.com",
    description:
      "Led full-stack development across the enterprise transportation platform, serving 500K+ daily users with 99.9% uptime.",
    highlights: [
      "Full ownership of 7 production modules, orchestrating complete lifecycle from conception to deployment, maintaining 99.9% uptime for 500K+ daily users",
      "Spearheaded migration of 15+ legacy interfaces from JSP to Angular leveraging Micro Frontend Architecture",
      "Implemented Module Federation in Mobility platform, accelerating page load times by 60% with encrypted data interchange",
      "Streamlined build pipelines achieving 70-80% reduction in initial load time and 30% performance improvement",
      "Transformed 25+ legacy servlet endpoints into RESTful APIs with comprehensive error handling and validation",
      "Delivered real-time tracking dashboards via WebSocket, handling 10K+ location updates/minute across 1,500+ active routes",
      "Designed scalable solutions with 4 cross-functional squads, coaching 3 junior engineers",
      "Authored 50+ pages of architectural documentation, maintained 95%+ test coverage",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Moveinsync",
    duration: "Feb 2023 – Mar 2024",
    logo: "https://logo.clearbit.com/moveinsync.com",
    description:
      "Joined as an intern and rapidly contributed to geospatial features, analytics dashboards, and UI modernization across the Mobility platform.",
    highlights: [
      "Integrated Google Maps API visualizing geospatial data for 2,000+ vehicles with custom markers, polylines, and geofencing",
      "Constructed interactive analytics dashboards using HighCharts generating 500+ daily insights",
      "Overhauled UI/UX for 8 core modules with responsive grids, slashing user workflow duration by 35%",
      "Crafted reusable Angular components with RxJS for state orchestration and lazy loading optimization",
      "Established JWT authentication pipeline with role-based authorization across multiple domains",
      "Enhanced frontend via virtual scrolling, progressive image loading, and 25% bundle size reduction",
    ],
  },
];

export const projects = [
  {
    title: "EdTech Platform",
    duration: "July 2024 - December 2024",
    tech: [
      "Spring Boot",
      "PostgreSQL",
      "Next.js",
      "React",
      "TypeScript",
      "SCSS",
      "Tailwind CSS",
      "Framer Motion",
      "AWS",
    ],
    highlights: [
      "Scalable EdTech ecosystem with encrypted JWT auth, 1,000+ learners and 50+ concurrent sessions",
      "AWS infrastructure (S3, EC2, RDS) achieving 99.9% availability managing 5TB+ data with sub-100ms queries",
      "Responsive frontend via Next.js with 90+ Lighthouse score and 1.5s median page render",
      "Razorpay gateway processing INR 2.5L+ transactions with 99.8% completion rate",
      "Rate limiting via sliding window on 12 critical endpoints, mitigating traffic by 90%",
    ],
    liveUrl: "https://www.innoknowvex.in",
  },
];

export const stats = [
  { label: "Production Modules", value: "7+" },
  { label: "Daily Users", value: "500K+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Perf. Boost", value: "60%" },
];
