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
}

// Call preloadContent when the page loads
document.addEventListener("DOMContentLoaded", preloadContent);

$(document).ready(function() {
  // Select all thumbnails
  const thumbnails = $(".thumbnail");

  // Set up an event listener for each thumbnail
  thumbnails.each(function() {
      $(this).click(function() {
          // Get the source of the clicked thumbnail
          const newSrc = $(this).attr("id");
          // Get the caption of the clicked thumbnail
          const newCaption = $(this).data("caption");
          console.log(newSrc);
          console.log(newCaption);

          // Change the main image to the clicked thumbnail's image
          $("#mainImage").attr("src", `images/large-images/${newSrc}.jpg`);
          // Update the caption
          $("#caption").text(newCaption);
      });
  });
});


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


function toggleContent() {
  const contentContainer = document.getElementById("content-container");
  contentContainer.innerHTML = contentContainer.innerHTML.trim() === ""
    ? "<p>To be determined</p>"
    : "";
}