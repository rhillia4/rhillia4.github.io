// Variables to store preloaded content
let headerContent = "";
let footerContent = "";

// Function to preload content
async function preloadContent() {
  try {
    const headerResponse = await fetch("components/header.html");
    headerContent = await headerResponse.text();

    const footerResponse = await fetch("components/footer.html");
    footerContent = await footerResponse.text();
    
    const topBarResponse = await fetch("components/top-bar.html");
    topBarContent = await topBarResponse.text();

    const aboutGolfResponse = await fetch("components/about-golf.html");
    aboutGolfContent = await aboutGolfResponse.text();

    const homepageResponse = await fetch("components/homepage.html");
    homepageContent = await homepageResponse.text();

    const golfSeasonsResponse = await fetch("components/golf-seasons.html");
    golfSeasonsContent = await golfSeasonsResponse.text();

    const golfSpotsResponse = await fetch("components/golf-spots.html");
    golfSpotsContent = await golfSpotsResponse.text();

    const golfExplainedResponse = await fetch("components/golf-explained.html");
    golfExplainedContent = await golfExplainedResponse.text();

    const golfEnjoyableResponse = await fetch("components/golf-enjoyable.html");
    golfEnjoyableContent = await golfEnjoyableResponse.text();

    // Insert the footer into the page after fetching
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      footerContainer.innerHTML = footerContent;
    }

    // Insert sidebar structure
    const sidebar = document.querySelector(".container-left");
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="menu-icon" onclick="toggleSidebar()">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <section id="link-container"></section>
      `;
    }
  } catch (error) {
    console.error("Error preloading content:", error);
  }
  const container1 = document.querySelector(".top-bar");

  container1.innerHTML = `${topBarContent}`;
}

// Call preloadContent when the page loads
document.addEventListener("DOMContentLoaded", preloadContent);

async function toggleTopBar() {
  const container1 = document.querySelector(".top-bar");
  container1.classList.toggle("expanded");

  // const linkContainer = document.getElementById("top-bar-link-container");

  if (container1.innerHTML.trim() === "") {
    container1.innerHTML = `${topBarContent}`;

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
    container1.innerHTML = "";
  }
}

async function toggleSidebar() {
  const container1 = document.querySelector(".container-left");
  container1.classList.toggle("expanded");

  const linkContainer = document.getElementById("link-container");

  if (linkContainer.innerHTML.trim() === "") {
    if (!headerContent) {
      // Ensure content is loaded before inserting
      const headerResponse = await fetch("components/header.html");
      headerContent = await headerResponse.text();
    }
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

async function aboutGolf(){
  const container1 = document.querySelector(".content");

    if (!aboutGolfContent) {
      // Ensure content is loaded before inserting
      const aboutGolfResponse = await fetch("components/aboutGolf.html");
      aboutGolfContent = await aboutGolfResponse.text();
    }
    container1.innerHTML = `${aboutGolfContent}`;

    // Ensure the script is executed after inserting content
    const script = document.createElement("script");
    script.src = "scripts/HTMLInclude.js";
    script.onload = function () {
      if (typeof includeHTML === "function") {
        includeHTML();
      }
    };
    document.body.appendChild(script);
  }

async function homePage() {
  const container1 = document.querySelector(".content");

    if (!homepageContent) {
      // Ensure content is loaded before inserting
      const homepageResponse = await fetch("components/homepage.html");
      homepageContent = await homepageResponse.text();
      }
    container1.innerHTML = `${homepageContent}`;

    // Ensure the script is executed after inserting content
    const script = document.createElement("script");
    script.src = "scripts/HTMLInclude.js";
    script.onload = function () {
      if (typeof includeHTML === "function") {
        includeHTML();
      }
    };
    document.body.appendChild(script);
  }
async function golfSeason() {
  const container1 = document.querySelector(".content");

    if (!golfSeasonsContent) {
      // Ensure content is loaded before inserting
      const golfSeasonsResponse = await fetch("components/homepage.html");
      golfSeasonsContent = await golfSeasonsResponse.text();
      }
    container1.innerHTML = `${golfSeasonsContent}`;

    // Ensure the script is executed after inserting content
    const script = document.createElement("script");
    script.src = "scripts/HTMLInclude.js";
    script.onload = function () {
      if (typeof includeHTML === "function") {
        includeHTML();
      }
    };
    document.body.appendChild(script);
  }
async function golfSpots() {
  const container1 = document.querySelector(".content");

    if (!golfSpotsContent) {
      // Ensure content is loaded before inserting
      const golfSpotsResponse = await fetch("components/homepage.html");
      golfSpotsContent = await golfSpotsResponse.text();
      }
    container1.innerHTML = `${golfSpotsContent}`;

    // Ensure the script is executed after inserting content
    const script = document.createElement("script");
    script.src = "scripts/HTMLInclude.js";
    script.onload = function () {
      if (typeof includeHTML === "function") {
        includeHTML();
      }
    };
    document.body.appendChild(script);
  }
async function golfExplained() {
  const container1 = document.querySelector(".content");

    if (!golfExplainedContent) {
      // Ensure content is loaded before inserting
      const golfExplainedResponse = await fetch("components/homepage.html");
      golfExplainedContent = await golfExplainedResponse.text();
      }
    container1.innerHTML = `${golfExplainedContent}`;

    // Ensure the script is executed after inserting content
    const script = document.createElement("script");
    script.src = "scripts/HTMLInclude.js";
    script.onload = function () {
      if (typeof includeHTML === "function") {
        includeHTML();
      }
    };
    document.body.appendChild(script);
  }
async function golfEnjoyable() {
  const container1 = document.querySelector(".content");

    if (!golfEnjoyableContent) {
      // Ensure content is loaded before inserting
      const golfEnjoyableResponse = await fetch("components/homepage.html");
      golfEnjoyableContent = await golfEnjoyableResponse.text();
      }
    container1.innerHTML = `${golfEnjoyableContent}`;

    // Ensure the script is executed after inserting content
    const script = document.createElement("script");
    script.src = "scripts/HTMLInclude.js";
    script.onload = function () {
      if (typeof includeHTML === "function") {
        includeHTML();
      }
    };
    document.body.appendChild(script);
  }







