export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const portfolioData = {
  name: "Breed G. Canencia",
  title: "Full-stack Software Engineer",
  tagline: "Building scalable web applications with modern technologies",
  about: "Full-stack Software Engineer with over 5 years of experience in developing and maintaining scalable web applications. Proficient in React.js, Node.js, Express.js, and various databases. Passionate about creating clean, efficient code and delivering high-quality user experiences.",
  
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "SQL", "PHP"]
    },
    {
      category: "Frontend",
      items: ["React.js", "AngularJS", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Laravel (PHP)"]
    },
    {
      category: "Database & ORM",
      items: ["PostgreSQL", "MySQL", "Sequelize"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Joi", "Celebrate", "Docker"]
    }
  ] as Skill[],

  experience: [
    {
      company: "Cody Web Development",
      position: "Full-stack Software Engineer",
      period: "August 2022 - Present",
      description: [
        "Develop and maintain scalable web applications utilizing React.js, Node.js, and Express.js",
        "Design and implement RESTful APIs to ensure seamless frontend integration",
        "Build modern, responsive user interfaces using Tailwind CSS and CSS3",
        "Collaborate with cross-functional teams to deliver high-quality software solutions"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "PostgreSQL", "RESTful APIs"]
    },
    {
      company: "GoodApps Inc.",
      position: "Full-stack Developer",
      period: "April 2021 - June 2022",
      description: [
        "Acted as a full-stack developer managing internal projects using AngularJS and Node.js",
        "Engineered systems from the ground up, covering both frontend and backend requirements",
        "Developed new functional components and features to enhance project capabilities",
        "Implemented database solutions using MySQL and Sequelize ORM"
      ],
      technologies: ["AngularJS", "Node.js", "Express.js", "MySQL", "Sequelize"]
    },
    {
      company: "NexSeed Inc.",
      position: "Web Developer",
      period: "November 2019 - March 2020",
      description: [
        "Built custom static websites from scratch",
        "Developed responsive layouts using HTML5, CSS3, and JavaScript",
        "Collaborated with design team to implement pixel-perfect interfaces"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      company: "Nerubia Web Solutions Inc.",
      position: "Web Developer",
      period: "June 2018 - October 2019",
      description: [
        "Developed and maintained web applications for various clients",
        "Worked on both frontend and backend development using PHP and Laravel",
        "Implemented database solutions and optimized query performance"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "HTML5", "CSS3", "JavaScript"]
    }
  ] as Experience[],

  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, and payment integration. Built with React.js, Node.js, and PostgreSQL.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"]
    },
    {
      title: "API Gateway Service",
      description: "A robust API gateway with request validation, rate limiting, and comprehensive logging using Joi and Celebrate for validation.",
      technologies: ["Node.js", "Express.js", "Joi", "Celebrate", "Redis"]
    },
    {
      title: "Corporate Website",
      description: "A modern, responsive corporate website with dynamic content management and SEO optimization.",
      technologies: ["React.js", "Tailwind CSS", "Next.js", "Contentful"]
    }
  ] as Project[],

  education: {
    degree: "Bachelor of Science in Information and Communication Technology",
    institution: "Cebu Technological University",
    period: "2014 - 2018"
  },

  contact: {
    email: "canenciabreed1@gmail.com",
    location: "Philippines",
    github: "https://github.com/Deerby10",
    linkedin: "https://www.linkedin.com/in/breed-canencia/"
  }
};
