/**
 * Theme Toggle Functionality
 * Controls light/dark mode preferences and transitions
 */

document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
});

/**
 * Initializes the theme based on user preferences
 */
function initializeTheme() {
  const themeToggle = document.getElementById("theme-toggle-btn");
  const htmlElement = document.documentElement;

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    htmlElement.setAttribute("data-theme", "dark");
  }

  // Update button appearance based on current theme
  updateButtonAppearance();

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", function () {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateButtonAppearance();
  });
}

/**
 * Updates the theme toggle button appearance based on current theme
 */
function updateButtonAppearance() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  if (currentTheme === "dark") {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  }
}
