// Variables to store preloaded content
let headerContent = "";
let footerContent = "";
let portfolioContent = "";

// Function to preload content
function preloadContent() {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => headerContent = data)
    .catch((error) => console.error("Error loading header:", error));

    fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => footerContent = data)
    .catch((error) => console.error("Error loading footer:", error));

    fetch("components/portfolio.html")
    .then((response) => response.text())
    .then((data) => portfolioContent = data)
    .catch((error) => console.error("Error loading footer:", error));
}

// Call preloadContent when the page loads
document.addEventListener("DOMContentLoaded", preloadContent);

function toggleSidebar() {
  const container1 = document.querySelector(".container-left");
  container1.classList.toggle("expanded");

  const linkContainer = document.getElementById("link-container");

  // Check if content is already there; if so, clear it
  if (linkContainer.innerHTML.trim() === "") {
    linkContainer.innerHTML = `
      <header>${headerContent}</header>
      <footer>${footerContent}</footer>
    `;

    // Ensure the script is executed after inserting content
    const script = document.createElement("script");
    script.src = "scripts/HTMLInclude.js";
    script.onload = function () {
      if (typeof includeHTML === "function") {
        includeHTML();
      }
    };
    document.body.appendChild(script);
  } else {
    linkContainer.innerHTML = "";
  }
}

function togglePortfolio() {
  const portfolioContainer = document.getElementById("portfolio-container");

  // Check if the content is already there; if so, clear it
  portfolioContainer.innerHTML = portfolioContainer.innerHTML.trim() === ""
    ? portfolioContent
    : "";
}
