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
function expandPortfolio() {
  let portfolioContainer = document.getElementById('portfolio-container');

  // Check if the content is already there; if so, clear it
  if (portfolioContainer.innerHTML.trim() === "") {
    portfolioContainer.innerHTML = `
    Ryan Hilliard Phone: 704-502-2483 Email: ryanhhilliard@gmail.com
EDUCATION:
University of North Carolina at Charlotte | Charlotte, NC | May 2026 Bachelor of Science in
Computer Science | Concentration: Software Engineering | UNCC GPA: 4.0
TECHNICAL SKILLS:
Languages: Python, Java, SQL
Work Experience:
Stock Analyzer Tool Project Programmer-Analyst, June 2024 – Present
● Building a tool that provides company ratings based on key quantitative and qualitative
measures. The results provide users with candidate companies to research further and
make investment buy, hold, sell decisions
UNC-Charlotte / UNC-Wilmington Computer Science Project Work, August 2023-Present
● Built a Black-Jack game that allows the user to identify number of decks, a starting
amount, and supports hand splitting and cumulative and remaining balances (Java)
● Built a single-player Yahtzee game (Python)
Rooster's Server Assistant and Food Runner, South Park, NC January 2022- May 2023
● Maintained punctual and on-time start to all shifts and averaged twenty-five hours a
week during junior and senior years of high school
● Assisted servers and ensured efficient food delivery to tables to maximize customer
satisfaction. In a typical 5-hour shift supported continuous service to 400 customers at
100 tables (factoring 1.5-hour table turns)
● Maintained cleanliness and organization in the dining area
Young Economic Scholars Investment Club, Founder, 2020-2022
● Gained leadership skills by starting an investment club at Myers Park High School since
they had no clubs for stock market investing or economics. Obtained a teacher sponsor,
managed application submission, created a booth, and recruited 50+ students to join
● Created a stock market simulation and students competed for best return while learning
how to evaluate companies and understand how the stock market works
Ruth's Chris Steak House Server Assistant, South Park, NC Summer 2020
● Supported servers with meal delivery and table service
● Provided excellent customer service to enhance dining experience
Carolina Pool Management Lifeguard, Olde Providence South, NC Summer 2020
● Monitored pool safety and enforced rules to ensure a safe environment
● Provided first aid and emergency response. Managed ten incidents
● Obtained additional certification to be able to teach young swimmers how to swim
          
      `;
  } else {
    portfolioContainer.innerHTML = "";
  }
}
