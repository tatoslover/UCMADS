/**
 * HTML Templates
 * This file contains HTML templates that will be dynamically inserted into the page
 */

document.addEventListener("DOMContentLoaded", function () {
  loadTemplates();

  // Dispatch event to notify that templates are loaded
  window.templatesLoaded = true;
  window.dispatchEvent(new Event("templatesLoaded"));
});

/**
 * Load all HTML templates into the page
 */
function loadTemplates() {
  // Load the theme toggle
  loadThemeToggle();

  // Load the header
  loadHeader();

  // Load the intro section
  loadIntroSection();

  // Load the courses section
  loadCoursesSection();

  // Load the footer
  loadFooter();

  // Load template elements
  loadTemplateElements();
}

/**
 * Load the theme toggle HTML
 */
function loadThemeToggle() {
  const container = document.getElementById("theme-toggle-container");
  if (!container) return;

  container.innerHTML = `
    <div class="theme-toggle">
      <button id="theme-toggle-btn" aria-label="Toggle dark mode">
        <img alt="Light mode" class="sun-icon" />
        <img alt="Dark mode" class="moon-icon" />
      </button>
    </div>
  `;
}

/**
 * Load the header HTML
 */
function loadHeader() {
  const header = document.getElementById("main-header");
  if (!header) return;

  header.innerHTML = `
    <div class="container">
      <div class="header-content">
        <div class="header-container">
          <div class="logo-left">
            <img alt="Samuel Love" id="profile-image" />
          </div>
          <div class="profile-text">
            <h1 id="header-title"></h1>
            <p id="header-tagline" class="tagline"></p>
          </div>
          <div class="logo-right">
            <img alt="University of Canterbury Logo" id="university-logo" />
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Load the intro section HTML
 */
function loadIntroSection() {
  const intro = document.getElementById("intro-section");
  if (!intro) return;

  intro.className = "intro";
  intro.innerHTML = `
    <div class="container">
      <h2 id="intro-title"></h2>
      <div id="intro-content"></div>
    </div>
  `;
}

/**
 * Load the courses section HTML
 */
function loadCoursesSection() {
  const courses = document.getElementById("courses-section");
  if (!courses) return;

  courses.className = "courses";
  courses.innerHTML = `
    <div class="container">
      <h2 id="courses-title"></h2>
      <div class="tabs">
        <div class="tab-header" id="tab-header">
          <!-- Course tabs will be dynamically inserted here -->
        </div>
        <div class="tab-content" id="tab-content">
          <!-- Course content will be dynamically inserted here -->
        </div>
      </div>
    </div>
  `;
}

/**
 * Load the footer HTML
 */
function loadFooter() {
  const footer = document.getElementById("main-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <p id="footer-text"></p>
      <div class="footer-links">
        <a id="github-link" target="_blank" class="github-link">
          <img alt="GitHub" class="github-icon" />
          <span id="github-text">View Source Code on GitHub</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * Load template elements for course tabs and content
 */
function loadTemplateElements() {
  const templatesContainer = document.getElementById("templates");
  if (!templatesContainer) return;

  // Create course tab template
  const tabTemplate = document.createElement("template");
  tabTemplate.id = "course-tab-template";
  tabTemplate.innerHTML = `
    <div class="tab-item" data-tab="">
      <span></span>
    </div>
  `;

  // Create course content template
  const contentTemplate = document.createElement("template");
  contentTemplate.id = "course-content-template";
  contentTemplate.innerHTML = `
    <div class="tab-pane" id="">
      <div class="course-card">
        <div class="course-header">
          <div class="course-header-content">
            <h3></h3>
            <span class="course-term"></span>
            <a href="#" class="btn btn-view disabled">View Project</a>
          </div>
        </div>
        <div class="course-body">
          <div class="course-description"></div>
          <div class="skills-learned">
            <h4>Learning Outcomes</h4>
            <ul class="outcomes-list"></ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add templates to the container
  templatesContainer.appendChild(tabTemplate);
  templatesContainer.appendChild(contentTemplate);
}
