// Book details for this month and next month
const thisMonthsBook = {
    title: "Banyan Moon",
    author: "Thao Thai",
    bio: '"Banyan Moon" by Thao Thai is a multigenerational family saga that follows three Vietnamese American women from the 1960s to the present, exploring themes of grief, motherhood, and the complexities of family relationships, particularly between mothers and daughters.',
    date: "04-21-2025",
    discussionLead: "Shannon",
    location: "Lilac Realty",
    img: "images/thisMonthsCover.jpg"
};

const nextMonthsBook = {
    title: "The Gown",
    author: "Jennifer Robson",
    bio: '"The Gown: A Novel of the Royal Wedding" by Jennifer Robson follows two embroiderers, Ann Hughes and Miriam Dassin, in 1947 London as they work on Princess Elizabeth\'s wedding gown, juxtaposed with Heather Mackenzie\'s 2016 search for answers about her grandmother\'s connection to the gown and Miriam.',
    date: "05-01-2025",
    discussionLead: "Margaret",
    location: "Lilac Realty",
    img: "images/nextMonthsCover.jpg"
};

// Function to dynamically load book details
function loadBook(idName, book) {
    const contentField = document.getElementById(idName);
    contentField.innerHTML = `
    <h3>${contentField.title}'s Book</h3>
    <img src="${book.img}" alt="Book Cover" />
    <p><span class="bold">Book Title:</span> <span id="book-title">${book.title}</span></p>
    <p><span class="bold">Author:</span> <span id="author-name">${book.author}</span></p>
    <p><span class="bold">Summary:</span> <span id="book-summary">${book.bio}</span></p>
    <h3>${contentField.title}'s Meeting Information</h3>
    <p><span class="bold">Location:</span> <span id="meeting-location">${book.location}</span></p>
    <p><span class="bold">Date:</span> <span id="meeting-date">${book.date}</span></p>
    <p><span class="bold">Discussion Lead:</span> <span id="discussion-lead">${book.discussionLead}</span></p>
    `;
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            
            if (name === "" || email === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }
            
            alert(`Thank you for joining, ${name}!`);
            form.reset();
        });
    }

    // Dynamic Event List
    const eventsList = document.getElementById("events-list");
    if (eventsList) {
        fetch("events.json") // Assume events are stored in a JSON file
            .then((response) => response.json())
            .then((data) => {
                data.forEach((event) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${event.date} - ${event.title}`;
                    eventsList.appendChild(listItem);
                });
            })
            .catch((error) => console.error("Error loading events:", error));
    }

    // Load Book of the Month on page load
    loadBook('this-months-book-content', thisMonthsBook); // Call this when the DOM is ready
    loadBook('next-months-book-content', nextMonthsBook); // Call this when the DOM is ready
});

