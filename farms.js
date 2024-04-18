const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

function sendMail() {
    var params = {
      from_name  : document.getElementById("fname").value,
      from_pane  : document.getElementById("lname").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_1p8t0ck", "template_neq8i1j", params).then(function () {
      
    
      document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // ... handle the form data, e.g., send it to a server
        this.reset(); // Reset the form fields after handling the submission
      });
      
    })
  }
  