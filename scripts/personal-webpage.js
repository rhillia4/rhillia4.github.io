// Variables to store preloaded content
let headerContent = "";
let footerContent = "";
let portfolioContent = "";

// Function to preload content
async function preloadContent() {
    try {
      const headerResponse = await fetch("components/header.html");
      headerContent = await headerResponse.text();
  
      const footerResponse = await fetch("components/footer.html");
      footerContent = await footerResponse.text();
      
      const portfolioResponse = await fetch("components/portfolio.html");
      portfolioContent = await portfolioResponse.text();
  
      // Insert the footer into the page after fetching
      document.getElementById("footer-container").innerHTML = footerContent;
      document.querySelector(".container-left").innerHTML = 
          `
          <div class="menu-icon" onclick="toggleSidebar()">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <section id="link-container">
          </section>
          `;
    } catch (error) {
      console.error("Error preloading content:", error);
    }
      
}

// Call preloadContent when the page loads
document.addEventListener("DOMContentLoaded", preloadContent);

function toggleSidebar() {
  const container1 = document.querySelector(".container-left");
  container1.classList.toggle("expanded");

  const linkContainer = document.getElementById("link-container");

  if (linkContainer.innerHTML.trim() === "") {
    linkContainer.innerHTML = `<header>${headerContent}</header>`;

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
