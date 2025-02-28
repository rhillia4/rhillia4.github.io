function expandContainer() {
  let container1 = document.querySelector('.container-left');
  container1.classList.toggle('expanded');

  let linkContainer = document.getElementById('link-container');

  // Check if content is already there; if so, clear it
  if (linkContainer.innerHTML.trim() === "") {
      linkContainer.innerHTML = `
      <header>
          <div data-include="components/header.html"></div>
      </header>
      <footer>
          <div data-include="components/footer.html"></div>
      </footer>
      `;

      // Ensure the script is reloaded after inserting the HTML
      let script = document.createElement("script");
      script.src = "scripts/HTMLInclude.js";
      script.onload = function() {
          if (typeof includeHTML === "function") {
              includeHTML();
          }
      };
      document.body.appendChild(script);

  } else {
      linkContainer.innerHTML = "";
  }
}
function expandPortfolio() {
  let portfolioContainer = document.getElementById('portfolio-container');

  // Check if the content is already there; if so, clear it
  if (portfolioContainer.innerHTML.trim() === "") {
    portfolioContainer.innerHTML = `
      <p>To be determined</p>
      `;
  } else {
    portfolioContainer.innerHTML = "";
  }
}
