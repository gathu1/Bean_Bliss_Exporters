const button = document.getElementById('triggerPayment');
    button.addEventListener('click', () => {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const amount = document.getElementById('amount').value;
 console.log(`Triggering payment for amount ${amount} to phone number ${phoneNumber}...`);
});
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer LdRHVTRcZoBKBoB33qppZAbKXGDI");
fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzI1MTAwMzEx",
    "Timestamp": "20240325100311",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 800,
    "PartyA": 254708855315,
    "PartyB": 174379,
    "PhoneNumber": phoneNumber,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X"
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));