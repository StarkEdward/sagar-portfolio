// ============================================================
// portfolioData.js — Centralized configuration for Sagar Kamble's Portfolio
// ============================================================

export const personalInfo = {
  name: "Sagar Kamble",
  firstName: "Sagar",
  brandName: "Sagar Kamble",
  title: "DevOps Engineer",
  location: "Pune, Maharashtra",
  phone: "+91 7972555358",
  emails: {
    primary: "sagarit620@gmail.com",
    secondary: "sagarit620@gmail.com",
  },
  summary:
    "Application Support Engineer (DevOps) with over 4 years of experience leveraging Cloud and DevOps tools such as Terraform, Kubernetes, and AWS to build efficient, scalable cloud solutions through automation.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/StarkEdward",
  linkedin: "mailto:sagarit620@gmail.com", // Fallback if no LinkedIn provided
  instagram: "mailto:sagarit620@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Sagar Kamble",
  titleHighlight: "DevOps Engineer",
  subtitle:
    "I build efficient, scalable cloud solutions through automation using Terraform, Kubernetes, and AWS.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Call Me",
    href: "tel:+917972555358",
  },
  ctaEmail: {
    text: "Email Me",
    href: "mailto:sagarit620@gmail.com?subject=Hiring Inquiry - Portfolio&body=Hello Sagar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sagar Kamble</span>, an Application Support Engineer (DevOps) based in Pune, Maharashtra, dedicated to crafting robust CI/CD pipelines, containerized deployments, and resilient cloud architectures.`,
  techStack: ["AWS", "Kubernetes", "Terraform"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I automate and scale infrastructure",
  description:
    "I follow a structured, highly technical approach to turn infrastructure requirements into robust cloud environments.",
  cards: [
    {
      number: "01",
      title: "Architect",
      text: "I start by designing secure, highly available, and scalable cloud architectures tailored to specific business needs.",
    },
    {
      number: "02",
      title: "Provision",
      text: "Using Infrastructure as Code (Terraform, Ansible) to provision and configure resources consistently and repeatedly.",
    },
    {
      number: "03",
      title: "Automate",
      text: "Building robust CI/CD pipelines using GitLab CI and Jenkins to accelerate deployments and eliminate manual effort.",
    },
    {
      number: "04",
      title: "Monitor",
      text: "Integrating proactive monitoring and centralized logging (Prometheus, Grafana, CloudWatch) to ensure system reliability.",
    },
  ],
  endText: "Ready to scale!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 90 },
        { name: "EC2 & VPC", level: 95 },
        { name: "S3 & RDS", level: 90 },
        { name: "EKS & ECS", level: 85 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Ansible", level: 85 },
        { name: "CloudFormation", level: 80 }
      ]
    },
    {
      title: "Containerization",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes (EKS)", level: 88 },
        { name: "Docker Compose", level: 90 }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "GitLab CI/CD", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "GitHub Actions", level: 80 }
      ]
    },
    {
      title: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", level: 88 },
        { name: "Grafana", level: 90 },
        { name: "AWS CloudWatch", level: 95 }
      ]
    },
    {
      title: "Scripting & OS",
      skills: [
        { name: "Linux (Ubuntu/RHEL)", level: 90 },
        { name: "Bash/Shell Scripting", level: 95 },
        { name: "Python", level: 75 }
      ]
    }
  ]
};

export const experienceList = [
  {
    organization: "Kyndryl Inc. (Client: IBM - Vodafone Idea Ltd)",
    role: "Application Support Engineer (DevOps)",
    duration: "Sep 2022 - Dec 2024",
    location: "Pune, Maharashtra",
    skills: ["CI/CD", "AWS", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
    tech: ["GitLab CI", "Jenkins", "EKS", "CloudWatch"],
    description: "Built and managed CI/CD pipelines accelerating deployments by 70%. Automated AWS infrastructure with Terraform. Managed Kubernetes clusters and integrated Prometheus/Grafana for monitoring."
  },
  {
    organization: "Bravezone Softech Pvt. Ltd. (Client: RBL Bank)",
    role: "Application Support Engineer (DevOps)",
    duration: "Apr 2020 - Sep 2022",
    location: "Pune, Maharashtra",
    skills: ["Terraform", "Ansible", "Docker", "AWS SSM", "Shell Scripting"],
    tech: ["GitHub", "Jenkins", "Ansible", "AWS SSM"],
    description: "Managed on-premises and cloud virtual machines. Developed Ansible playbooks improving operational efficiency by 30%. Created shell scripts for automated backups and log aggregation."
  }
];

export const softSkillsList = [
  { name: "Incident Management", icon: "🚨", desc: "Resolving incidents within SLA by identifying root causes and applying permanent fixes." },
  { name: "Disaster Recovery", icon: "🔄", desc: "Conducting DR drills and implementing robust backup strategies ensuring system readiness." },
  { name: "Security & Compliance", icon: "🔒", desc: "Enforcing cloud security best practices (IAM, VPC, SSL renewals) for resilient infrastructures." },
  { name: "Automation First", icon: "⚙️", desc: "Focusing on reducing manual effort and minimizing human errors through scripting and IaC." },
  { name: "Cross-Team Collaboration", icon: "🤝", desc: "Working closely with developers and stakeholders to troubleshoot issues and optimize performance." },
  { name: "System Optimization", icon: "🚀", desc: "Implementing load balancers and auto-scaling to optimize resource usage and reduce latency." },
  { name: "Documentation", icon: "📝", desc: "Authored comprehensive SOPs and runbooks for deployments, rollbacks, and incident workflows." },
  { name: "Problem Solving", icon: "🧩", desc: "Analyzing logs and metrics for performance tuning and proactively mitigating production downtime." }
];

export const projects = [
  {
    id: "bingo-bash",
    number: "01",
    badge: "🎮 Multiplayer",
    title: "Bingo Bash Game - Multiplayer",
    description:
      "A real-time multiplayer Bingo game that allows users to play against each other in synchronized sessions. Features real-time state management, secure matchmaking, and interactive UI for seamless gameplay.",
    techTags: ["React", "Node.js", "WebSockets", "Docker"],
    links: {
      github: "https://github.com/StarkEdward",
      demo: null,
    },
    image: "/projects/Screenshot 2026-07-10 223239.png",
    isFlagship: true,
  },
  {
    id: "tejprash",
    number: "02",
    badge: "⚡ Booking WebApp",
    title: "tejprash.online",
    description:
      "An on-demand electrician booking web application connecting users with verified local electricians. It handles real-time booking, provider availability, scheduling, and user management.",
    techTags: ["React", "Express", "MongoDB", "AWS"],
    links: {
      github: "https://github.com/StarkEdward",
      demo: null,
    },
    image: "/projects/Screenshot 2026-07-10 223440.png",
    isFlagship: false,
  },
  {
    id: "anaesthesiology",
    number: "03",
    badge: "🏥 Healthcare System",
    title: "Anaesthesiology Inventory & PAC System",
    description:
      "A comprehensive Inventory Management and Pre-Anesthesia Checkup (PAC) system tailored for the anaesthesiology department. It streamlines medical supply tracking, automates inventory alerts, and manages critical PAC records securely.",
    techTags: ["React", "Node.js", "PostgreSQL", "CI/CD"],
    links: {
      github: "https://github.com/StarkEdward",
      demo: null,
    },
    image: "/projects/Screenshot 2026-07-10 223708.png",
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      icon: "☁️",
    }
  ],
  viewAllUrl: "/Certificates.pdf",
};

export const education = {
  degree: "Bachelor of Engineering",
  institution: "Kavayitri Bahinabai Chaudhari North Maharashtra University Jalgaon",
  cgpa: "7.62 / 10",
  graduation: "Graduated",
  twelfth: "12th - 56.33%",
  tenth: "10th - 80.73%",
};

export const footerContent = {
  taglines: [
    "Application Support Engineer (DevOps)",
    "AWS · Terraform · Kubernetes",
    "Scalable Cloud Architectures",
  ],
  credential: "AWS Solutions Architect Associate",
  copyright: `© ${new Date().getFullYear()} Sagar Kamble | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
