function expandContainer() {
  let container1 = document.querySelector('.container-left');
  container1.classList.toggle('expanded');

  let linkContainer = document.getElementById('link-container');

  // Check if the content is already there; if so, clear it
  if (linkContainer.innerHTML.trim() === "") {
      linkContainer.innerHTML = `
          <nav>
              <p class="border-bottom border-top link-title">Pages:</p>
              <a class="link1 hidden" href="./itis3135/index.html">3135 Website</a>
          </nav>
          <nav>
              <p class="border-bottom border-top link-title">3135 Pages:</p>
              <a class="link1" href="itis3135/hilliarddevelopment.com/index.html">Hilliard Development</a>
              <a class="link1" href="itis3135/relaxed-hippo">Relaxed Hippo Haberdashery</a>
              <a class="link1" href="itis3135/stuff/Bad! FILE.htm">Bad Webpage</a>
          </nav>
          
          <nav>
            <p class="border-bottom border-top link-title">Additional links</p>
            <a class="link1" href="https://www.linkedin.com/in/ryan-hilliard-9a5534319/">LinkedIn Account</a>
            <a class="link1" href="https://github.com/rhillia4">GitHub Account</a>
          </nav>
      `;
  } else {
      linkContainer.innerHTML = "";
  }
}
