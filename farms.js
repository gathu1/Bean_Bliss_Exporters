const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

function sendMail() {
    var params = {
      from_name  : document.getElementById("fname").value,
      from_name  : document.getElementById("lname").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_1p8t0ck", "template_neq8i1j", params).then(function (res) {
      alert("success!" + res.status);
    })
  }
  