// Adding event listener to contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Preventing default form submission behavior

    var formData = new FormData(this); // Getting form data

    setTimeout(function () {
      alert(
        "Your message has been successfully submitted! We will get back to you shortly."
      ); // Displaying success message
      document.getElementById("contactForm").reset(); // Resetting form after submission
    }, 100); // Delay for alert message
  });

// Function to validate contact form
function validateForm() {
  // Getting form inputs
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  // Checking if any field is empty
  if (name.value == "" || email.value == "" || message.value == "") {
    alert("Please fill all the fields."); // Displaying error message
    return false; // Returning false to prevent form submission
  }

  // Regular expression to validate email format
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    alert("Please enter a valid email address."); // Displaying error message for invalid email format
    return false; // Returning false to prevent form submission
  }

  return true; // Returning true if form validation is successful
}
