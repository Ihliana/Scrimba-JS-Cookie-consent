const modal = document.getElementById("modal")
const modalCloseModal = document.getElementById("modal-close-btn")
modalCloseModal.addEventListener('click', function(){
   modal.style.display = "none"
})

setTimeout(function(){
   modal.style.display = 'inline'
}, 1500)


/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/  



const consentForm = document.getElementById("consent-form")
consentForm.addEventListener("submit", (e) => {
   e.preventDefault()
   console.log('form submitted')
})