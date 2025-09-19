// ==========================
// Navbar Toggle
// ==========================
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}

// ==========================
// Contact Form Validation
// ==========================
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting

    // Grab form fields
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    let isValid = true;
    let errors = [];

    // Name validation
    if (name.value.trim() === "") {
      isValid = false;
      errors.push("Name is required.");
    }

    // Email validation (basic pattern)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
      isValid = false;
      errors.push("Email is required.");
    } else if (!email.value.match(emailPattern)) {
      isValid = false;
      errors.push("Please enter a valid email address.");
    }

    // Message validation
    if (message.value.trim() === "") {
      isValid = false;
      errors.push("Message cannot be empty.");
    }

    // Show validation feedback
    const feedback = document.querySelector("#form-feedback");
    if (!isValid) {
      feedback.style.color = "red";
      feedback.innerHTML = errors.join("<br>");
    } else {
      feedback.style.color = "green";
      feedback.innerHTML = "Form submitted successfully ✅";

      // Optionally clear the form
      name.value = "";
      email.value = "";
      message.value = "";
    }
  });
}
