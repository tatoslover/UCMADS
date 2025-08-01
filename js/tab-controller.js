/**
 * Tab Controller for Portfolio Website
 *
 * This script handles the tab functionality for the course portfolio sections,
 * allowing users to switch between different course tabs without page reload.
 */

document.addEventListener("DOMContentLoaded", function () {
  // Get all tab items and tab panes
  const tabItems = document.querySelectorAll(".tab-item");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Initial activation of the first tab if none are active
  if (!document.querySelector(".tab-item.active")) {
    if (tabItems.length > 0) {
      tabItems[0].classList.add("active");
      const firstTabId = tabItems[0].getAttribute("data-tab");
      document.getElementById(firstTabId)?.classList.add("active");
    }
  }

  // Add click event listener to each tab item
  tabItems.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // Get the tab identifier from data attribute
      const tabId = this.getAttribute("data-tab");

      // Remove active class from all tabs and panes
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });

      tabPanes.forEach(function (pane) {
        pane.classList.remove("active");
      });

      // Add active class to clicked tab and corresponding pane
      this.classList.add("active");
      const targetPane = document.getElementById(tabId);
      if (targetPane) {
        targetPane.classList.add("active");

        // Smooth scroll to the tab content if on mobile
        if (window.innerWidth < 768) {
          targetPane.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Handle deep linking - activate tab based on URL hash
  function handleHashChange() {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash) {
      // Find the tab with matching data-tab attribute
      const targetTab = document.querySelector(`.tab-item[data-tab="${hash}"]`);
      if (targetTab) {
        targetTab.click();
      }
    }
  }

  // Check for hash on page load
  handleHashChange();

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange);

  // Add scroll animation for tab navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });

        // Update URL hash without scrolling
        history.pushState(null, null, `#${targetId}`);

        // If it's a tab, activate it
        const targetTab = document.querySelector(
          `.tab-item[data-tab="${targetId}"]`,
        );
        if (targetTab) {
          targetTab.click();
        }
      }
    });
  });

  // Add animation effect when scrolling to elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  // Observe sections for animation
  document
    .querySelectorAll("section, .course-card, .project-preview")
    .forEach((section) => {
      section.classList.add("fade-in-element");
      observer.observe(section);
    });
});

// Add CSS animation classes dynamically
const style = document.createElement("style");
style.textContent = `
    .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .tab-item {
        position: relative;
    }

    .tab-item.active::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--accent);
        animation: tabActivate 0.3s ease-in-out;
    }

    @keyframes tabActivate {
        0% { width: 0; left: 50%; }
        100% { width: 100%; left: 0; }
    }

    /* No animations for logos */
`;
document.head.appendChild(style);

// Add keyboard navigation for tabs
document.addEventListener("keydown", function (e) {
  const activeTab = document.querySelector(".tab-item.active");
  if (!activeTab) return;

  // Right arrow key - next tab
  if (e.key === "ArrowRight") {
    const nextTab = activeTab.nextElementSibling;
    if (nextTab && nextTab.classList.contains("tab-item")) {
      nextTab.click();
      e.preventDefault();
    }
  }

  // Left arrow key - previous tab
  if (e.key === "ArrowLeft") {
    const prevTab = activeTab.previousElementSibling;
    if (prevTab && prevTab.classList.contains("tab-item")) {
      prevTab.click();
      e.preventDefault();
    }
  }
});

// No animations for logos
