const scriptURL = 'https://script.google.com/macros/s/AKfycbxNquQZH2cEkDN9DPCQ3TQrWEgKNtswoHGh0f4JU5lFzCmY4QVnwCHOMOH3-m1OXIM4Vg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})