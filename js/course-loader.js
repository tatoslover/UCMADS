/**
 * Course Loader and Tab Functionality
 * Handles fetching course data and managing tab interactions
 */

document.addEventListener("DOMContentLoaded", function () {
    // Load courses data and initialize the page
    loadCourses();
});

/**
 * Fetches course data from JSON file
 */
async function loadCourses() {
    try {
        const response = await fetch("data/courses.json");
        if (!response.ok) {
            throw new Error("Failed to load courses data");
        }

        const courses = await response.json();
        populateCourseList(courses);
    } catch (error) {
        console.error("Error loading courses:", error);
        displayErrorMessage("Failed to load course data. Please try again later.");
    }
}

/**
 * Displays an error message on the page
 * @param {string} message - The error message to display
 */
function displayErrorMessage(message) {
    const coursesSection = document.querySelector('.courses .container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <p>${message}</p>
        <button onclick="loadCourses()">Retry</button>
    `;

    // Clear any existing content and show error
    const tabsContainer = document.querySelector('.tabs');
    if (tabsContainer) {
        tabsContainer.style.display = 'none';
        coursesSection.insertBefore(errorDiv, tabsContainer);
    }
}

/**
 * Populates the course list from JSON data
 * @param {Array} courses - Array of course objects
 */
function populateCourseList(courses) {
    const tabHeader = document.getElementById("tab-header");
    const tabContent = document.getElementById("tab-content");
    const tabTemplate = document.getElementById("course-tab-template");
    const contentTemplate = document.getElementById("course-content-template");

    // Clear existing content
    tabHeader.innerHTML = "";
    tabContent.innerHTML = "";

    // Show loading indicator if needed
    const tabs = document.querySelector('.tabs');
    tabs.style.display = 'block';

    // Remove any error messages
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }

    courses.forEach((course, index) => {
        // Create tab
        const tabClone = tabTemplate.content.cloneNode(true);
        const tabItem = tabClone.querySelector(".tab-item");

        tabItem.setAttribute("data-tab", course.id);
        if (index === 0) tabItem.classList.add("active");
        tabItem.querySelector("span").textContent = course.code;

        // Create content pane
        const contentClone = contentTemplate.content.cloneNode(true);
        const contentPane = contentClone.querySelector(".tab-pane");

        contentPane.id = course.id;
        if (index === 0) contentPane.classList.add("active");

        contentPane.querySelector("h3").textContent = `${course.code}: ${course.title}`;
        contentPane.querySelector(".course-term").textContent = course.year;

        // Add description paragraphs
        const descriptionContainer = contentPane.querySelector(".course-description");
        course.description.forEach((paragraph) => {
            const p = document.createElement("p");
            p.textContent = paragraph;
            descriptionContainer.appendChild(p);
        });

        // Add learning outcomes
        const outcomesList = contentPane.querySelector(".outcomes-list");
        course.outcomes.forEach((outcome) => {
            const li = document.createElement("li");
            li.textContent = outcome;
            outcomesList.appendChild(li);
        });

        // Append to DOM
        tabHeader.appendChild(tabItem);
        tabContent.appendChild(contentPane);
    });

    // Initialize the tabs
    initializeTabs();
}

/**
 * Sets up tab click event listeners
 */
function initializeTabs() {
    const tabItems = document.querySelectorAll(".tab-item");

    tabItems.forEach(function (tab) {
        tab.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");

            // Remove active class from all tabs and panes
            document
                .querySelectorAll(".tab-item")
                .forEach(function (item) {
                    item.classList.remove("active");
                });

            document
                .querySelectorAll(".tab-pane")
                .forEach(function (pane) {
                    pane.classList.remove("active");
                });

            // Add active class to clicked tab and corresponding pane
            this.classList.add("active");
            const targetPane = document.getElementById(tabId);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });
}
