document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("formResponse");

    if (!name || !email || !message) {
        response.style.color = "red";
        response.textContent = "Please fill in all fields.";
        return;
    }

    response.style.color = "green";
    response.textContent = "Thanks for reaching out! We'll get back to you soon ✨";

    this.reset();
});