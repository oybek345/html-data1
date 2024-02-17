const scriptURL = 'https://script.google.com/macros/s/AKfycbxvmURr8ybj9iew8FNMvqpGo75F67U2ClMrTecy0gBGAJvZga14JPdV7oafRVqMTOYk/exec'

const form = document.forms['contact-form']

let btn =document.getElementById("submit")

form.addEventListener('submit', e => {
    btn.disabled=true;
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
        setTimeout(() => {
          btn.disabled=false;
        }, 3000);
      })

