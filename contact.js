function sendMail() {
  var params = {
    from_name  : document.getElementById("fname").value,
    from_pane  : document.getElementById("lname").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value,
  }
  emailjs.send("service_1p8t0ck", "template_neq8i1j", params).then(function (res) {
    alert("success!" + res.status);
    document.querySelector('form').reset();

  })

}

const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// function sendMail() {
//   // Get the values from the form fields
//   var fromName = document.getElementById("fname").value;
//   var fromName = document.getElementById("lname").value;
//   var emailId = document.getElementById("email_id").value;
//   var message = document.getElementById("message").value;

//   // Check if any of the fields are empty
//   if (fromName === "" || emailId === "" || message === "") {
//     alert("All fields must be filled out.");
//     return false; // Prevent the email from being sent
//   }

//   // Parameters to be sent to EmailJS
//   var params = {
//     from_name: fromName,
//     email_id: emailId,
//     message: message,
//   };

//   // Send the email with EmailJS
//   emailjs.send("service_1p8t0ck", "template_neq8i1j", params)
//     .then(function (res) {
//       alert("Success! " + res.status);
//     }, function (error) {
//       alert("Failed to send email. " + error);
//     });
// }
