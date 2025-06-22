// Basic Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If all OK
  alert("Thank you! Your message has been sent.");
  // You can reset form here if needed:
  // this.reset();
});
