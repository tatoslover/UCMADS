/**
 * Main JavaScript Entry Point
 * Initializes all functionality for the MADS Portfolio site
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all modules
  console.log("MADS Portfolio site initialized");

  // Wait for templates to be loaded before applying configuration
  // This ensures the DOM elements exist before we try to access them
  if (window.templatesLoaded) {
    applySiteConfiguration();
  } else {
    // If templates aren't loaded yet, wait for them
    window.addEventListener("templatesLoaded", function () {
      applySiteConfiguration();
    });
  }
});

/**
 * Applies site configuration settings from config.js
 */
function applySiteConfiguration() {
  // Set page title
  document.title = SiteConfig.site.title;

  // Update header content
  loadHeaderContent();

  // Update image paths
  loadImagePaths();

  // Load intro section content
  loadIntroContent();

  // Load courses section title
  loadCoursesTitle();

  // Update footer text from config
  loadFooterContent();

  // Configure theme behavior
  if (!SiteConfig.features.darkMode) {
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      themeToggle.style.display = "none";
    }
  }
}

/**
 * Loads the header content from configuration
 */
function loadHeaderContent() {
  const headerTitle = document.getElementById("header-title");
  const headerTagline = document.getElementById("header-tagline");

  if (headerTitle && SiteConfig.ui.header.title) {
    headerTitle.textContent = SiteConfig.ui.header.title;
  }

  if (headerTagline && SiteConfig.ui.header.tagline) {
    headerTagline.textContent = SiteConfig.ui.header.tagline;
  }
}

/**
 * Loads image paths from configuration
 */
function loadImagePaths() {
  const profileImage = document.getElementById("profile-image");
  const universityLogo = document.getElementById("university-logo");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  const githubIcon = document.querySelector(".github-icon");

  if (profileImage && SiteConfig.paths.profileImage) {
    profileImage.src = SiteConfig.paths.profileImage;
  }

  if (universityLogo && SiteConfig.paths.universityLogo) {
    universityLogo.src = SiteConfig.paths.universityLogo;
  }

  if (sunIcon && SiteConfig.paths.sunIcon) {
    sunIcon.src = SiteConfig.paths.sunIcon;
  }

  if (moonIcon && SiteConfig.paths.moonIcon) {
    moonIcon.src = SiteConfig.paths.moonIcon;
  }

  if (githubIcon && SiteConfig.paths.githubIcon) {
    githubIcon.src = SiteConfig.paths.githubIcon;
  }
}

/**
 * Loads the intro section content from configuration
 */
function loadIntroContent() {
  const introTitle = document.getElementById("intro-title");
  const introContent = document.getElementById("intro-content");

  if (introTitle && SiteConfig.ui.intro.title) {
    introTitle.textContent = SiteConfig.ui.intro.title;
  }

  if (introContent && SiteConfig.ui.intro.paragraphs) {
    // Clear any existing content
    introContent.innerHTML = "";

    // Add each paragraph
    SiteConfig.ui.intro.paragraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      introContent.appendChild(p);
    });
  }
}

/**
 * Loads the courses section title from configuration
 */
function loadCoursesTitle() {
  const coursesTitle = document.getElementById("courses-title");

  if (coursesTitle && SiteConfig.ui.courses.title) {
    coursesTitle.textContent = SiteConfig.ui.courses.title;
  }
}

/**
 * Loads the footer content from configuration
 */
function loadFooterContent() {
  const footerTextElement = document.getElementById("footer-text");
  const githubLink = document.getElementById("github-link");
  const githubText = document.getElementById("github-text");

  if (footerTextElement && SiteConfig.features.dynamicContent) {
    footerTextElement.textContent = SiteConfig.ui.footer.text;
  }

  if (githubLink && SiteConfig.site.repository) {
    githubLink.href = SiteConfig.site.repository;
  }

  if (githubText && SiteConfig.ui.footer.githubLinkText) {
    githubText.textContent = SiteConfig.ui.footer.githubLinkText;
  }
}
