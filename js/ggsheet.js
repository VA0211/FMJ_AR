const scriptURL = 'https://script.google.com/macros/s/AKfycbxxmjH6Tcn5yVVroLzS5FXZ9SlSTAlHFpuZKHdeWh_GNyXhoMF7zGM6g_ZqoYZEyPGSVA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})