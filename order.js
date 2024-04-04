const checkbox =
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

function sendMail() {
    var params = {
      from_name  : document.getElementById("yname").value,
      email_id : document.getElementById("email_id").value,
      phone_number : document.getElementById("pnumber").value,
      company : document.getElementById("cname").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_xtgcoz7", "template_r4x6zap", params).then(function (res) {
      alert("success!" + res.status);
    })
  }
  
  const button = document.getElementById('triggerPayment');
    button.addEventListener('click', () => {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const amount = document.getElementById('amount').value;
 console.log(`Triggering payment for amount ${amount} to phone number ${phoneNumber}...`);
});
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer T2v1x5QMd1E2sKpIvDAW2f639kGd");

fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwNDAzMDkwNDQw",
    "Timestamp": "20240403090440",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254708374149,
    "PartyB": 174379,
    "PhoneNumber": 254708374149,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));
