// ===============================
// 1️⃣ Movie Click Interaction
// ===============================

document.addEventListener("click", function(e) {

    const movie = e.target.closest(".movie");

    if (movie) {
        const movieName = movie.querySelector("h3").innerText;
        alert("You selected: " + movieName + " 🎬");
    }

});


// ===============================
// 2️⃣ Sidebar Toggle
// ===============================

const menuBtn = document.querySelector(".open-menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function(e) {
    e.preventDefault();
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});


// ===============================
// 3️⃣ Mobile Number Validation
// ===============================

const mobileInput = document.getElementById("mobileNo");

mobileInput.addEventListener("blur", function() {
    const mobileValue = mobileInput.value.trim();

    if (mobileValue === "") {
        alert("Mobile number cannot be empty!");
    }
    else if (!/^[0-9]{10}$/.test(mobileValue)) {
        alert("Enter valid 10-digit mobile number!");
    }
});


// ===============================
// 4️⃣ Like Button Interaction
// ===============================

document.addEventListener("click", function(e) {

    const icon = e.target.closest(".card-body ion-icon");

    if (icon) {
        e.stopPropagation();

        if (icon.classList.contains("liked")) {
            icon.style.color = "#c4242b"; // original red
            icon.classList.remove("liked");
        } else {
            icon.style.color = "green"; // visible change
            icon.classList.add("liked");
        }
    }

});

// ===== DARK MODE =====

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.innerText = "Light";
        } else {
            themeBtn.innerText = "Dark";
        }

    });
}

// ===============================
// 6️⃣ Feedback Modal
// ===============================

const feedbackBtn = document.getElementById("feedbackBtn");
const feedbackModal = document.getElementById("feedbackModal");
const closeFeedback = document.getElementById("closeFeedback");
const submitFeedback = document.getElementById("submitFeedback");

feedbackBtn.addEventListener("click", function(e) {
    e.preventDefault();
    feedbackModal.style.display = "block";
});

closeFeedback.addEventListener("click", function() {
    feedbackModal.style.display = "none";
});

submitFeedback.addEventListener("click", function() {

    const name = document.getElementById("feedbackName").value.trim();
    const text = document.getElementById("feedbackText").value.trim();

    if (name === "" || text === "") {
        alert("Please fill all fields!");
    } else {
        alert("Thank you for your feedback, " + name + "!");
        feedbackModal.style.display = "none";
    }
});
