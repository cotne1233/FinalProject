document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            if (validateInput(nameInput) && validateInput(emailInput) && validateInput(messageInput)) {
                alert("Form submitted successfully!");
            } else {
                alert("Please fill out all fields correctly.");
            }
        });
    }

    function validateInput(input) {
        return input.value.trim() !== "";
    }
});
