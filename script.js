// ======================================
// CONTACT FORM
// ======================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Success message
    alert(
        "Thank you, " + name + "!\n\n" +
        "Your message has been submitted successfully."
    );

    // Clear the form
    contactForm.reset();
});


// ======================================
// ACTIVE NAVIGATION
// ======================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.style.color = "white";
        });

        this.style.color = "#60a5fa";
    });

});


// ======================================
// WELCOME MESSAGE
// ======================================

console.log("Welcome to Sai Rishitha's Portfolio!");
console.log("Portfolio loaded successfully.");