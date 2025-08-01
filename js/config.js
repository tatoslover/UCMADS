/**
 * Site Configuration
 * Central location for site-wide settings and metadata
 */

const SiteConfig = {
  // Site metadata
  site: {
    title: "MADS Portfolio | Samuel Love",
    author: "Samuel Love",
    description: "Academic work showcasing data science and programming skills",
    footerText: "Designed & Coded by Samuel Love",
    repository: "https://github.com/tatoslover/UCMADS",
  },

  // UI configuration
  ui: {
    // Theme settings
    defaultTheme: "light", // 'light', 'dark', or 'system'

    // Header settings
    header: {
      title: "Course Projects",
      tagline: "Academic work showcasing data science and programming skills",
    },

    // Intro section
    intro: {
      title: "Project Collection",
      paragraphs: [
        "This page showcases projects completed during various courses in data science, programming, and machine learning. Each tab represents a different course with detailed project information, code samples, and technical documentation.",
        "These projects represent a selection of coursework completed during my academic studies. They demonstrate proficiency in programming, data analysis, visualization, and machine learning techniques.",
        "Each project includes comprehensive documentation, source code, and analysis of results. The goal is to showcase both technical skills and the ability to solve complex problems using computational methods.",
      ],
    },

    // Courses section
    courses: {
      title: "Course Projects",
    },

    // Footer settings
    footer: {
      text: "Designed & Coded by Samuel Love",
      showGithubLink: true,
      githubLinkText: "View Source Code on GitHub",
    },
  },

  // Content paths
  paths: {
    coursesData: "data/courses.json",
    profileImage: "assets/profile.png",
    universityLogo: "assets/UC.svg",
    sunIcon: "assets/sun-icon.svg",
    moonIcon: "assets/moon-icon.svg",
    githubIcon: "assets/github-icon.svg",
  },

  // Feature flags for enabling/disabling functionality
  features: {
    darkMode: true,
    responsiveDesign: true,
    dynamicContent: true,
  },
};

// Make the config globally accessible
window.SiteConfig = SiteConfig;
