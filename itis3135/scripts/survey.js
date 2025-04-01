document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("introForm").addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm();
    });

    document.getElementById("introForm").addEventListener("reset", function () {
        document.getElementById("output").innerHTML = "";
    });

    // Automatically add default courses on page load
    addDefault();
});

function addDefault() {
    addCourse("ITIS 3135", "Web-based Application Design and Development: Required class/interested in learning.");
    addCourse("ITSC-2175", "Logic and Algorithms: Required class/interested in learning.");
    addCourse("ITSC-2181", "Intro to Computer Systems: Required class/interested in learning.");
    addCourse("ITSC-3155", "Software Engineering: Required class/interested in learning.");
    addCourse("STAT-2122", "Intro to Prob & Stat: Required class/less interested in learning.");
}

function addCourse(courseName = "", courseDescription = "") {
    const courseDiv = document.getElementById("courses");
    const newCourse = document.createElement("div");
    newCourse.className = "course-entry";

    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.name = "courseName";  // Add name attribute
    courseInput.placeholder = courseName || "Enter course name";
    courseInput.value = courseName;
    courseInput.required = true;

    const courseDescInput = document.createElement("input");
    courseDescInput.type = "text";
    courseDescInput.name = "courseDescription";  // Add name attribute
    courseDescInput.placeholder = courseDescription || "Enter course description";
    courseDescInput.value = courseDescription;
    courseDescInput.required = true;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";
    deleteBtn.onclick = function () {
        newCourse.remove();
    };

    newCourse.appendChild(courseInput);
    newCourse.appendChild(document.createTextNode(" - "));
    newCourse.appendChild(courseDescInput);
    newCourse.appendChild(deleteBtn);
    courseDiv.appendChild(newCourse);
}

function submitForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const image = document.getElementById("image").files[0];
    const caption = document.getElementById("caption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webBackground = document.getElementById("webBackground").value;
    const platform = document.getElementById("platform").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const anythingElse = document.getElementById("anythingElse").value;
    const agree = document.getElementById("agree").checked;

    if (!agree) {
        alert("You must agree to the terms before submitting.");
        return;
    }

    // Collect courses
    const courses = [];
    document.querySelectorAll(".course-entry").forEach(courseEntry => {
        const courseName = courseEntry.querySelector("[name='courseName']").value;
        const courseDescription = courseEntry.querySelector("[name='courseDescription']").value;
        courses.push(`${courseName} - ${courseDescription}`);
    });

    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("output").innerHTML = `
            <h1>${name} | ${mascot}</h1>
            <figure>
            <img class="img-size" src="${e.target.result}" alt="profile-pic">
            <figcaption>${caption}</figcaption>
            </figure>
      
            <section id="content-container">
                <ul class="list">
                    <li><b>Personal Background:</b> ${personalBackground}</li>
                    <li><b>Professional Background:</b> ${professionalBackground}</li>
                    <li><b>Academic Background:</b> ${academicBackground}</li>
                    <li><b>Background in this Subject:</b> ${webBackground}</li>
                    <li><b>Primary Computer Platform:</b> ${platform}</li>
                    <li><b>Courses I'm Taking & Why:</b></li>
                    <li style="list-style-type: none;">
                        <ul>
                            ${courses.map(course => `<li>${course}</li>`).join("")}
                        </ul>
                    </li>
                    <li><b>Funny/Interesting Item to Remember me by:</b> ${funnyThing}</li>
                    <li><b>I'd also like to Share:</b> ${anythingElse}</li>
                </ul>
            </section>
            <br>
            <button onclick="resetForm()">Reset</button>
        `;
        document.getElementById("introForm").style.display = "none";
    };

    if (image) {
        reader.readAsDataURL(image);
    } else {
        alert("Please upload a valid image.");
    }
}

function resetForm() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("introForm").reset();
    document.getElementById("introForm").style.display = "block";
    document.getElementById("courses").innerHTML = "";  // Clear added courses
    addDefault();  // Re-add default courses
}