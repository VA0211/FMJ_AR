const scriptURL = 'https://script.google.com/macros/s/AKfycbwHFp164xtieGxVqUhCZh1u4cEzIdC-3rgMRmCNZepbqU6TsNaREOi4B7LctpyE5c0rRg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})