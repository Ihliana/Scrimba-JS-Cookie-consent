const modal = document.getElementById("modal")
const modalCloseModal = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")

const modalText = document.getElementById('modal-text')



modalCloseModal.addEventListener('click', function(){
   modal.style.display = "none"
})

setTimeout(function(){
   modal.style.display = 'inline'
}, 1500)

consentForm.addEventListener("submit", (e) => {
   e.preventDefault()

   const consentFormData = new FormData(consentForm)

   const userName = consentFormData.get('fullName')
   
   
   modalText.innerHTML = `
         <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="upload-text">
            Uploading your data to the dark web...
            </p>
         </div>`

   setTimeout(function(){
            document.getElementById('upload-text').textContent = "Making the sale..."
     },1500)

               
      /*   
      Challenge: 
      1. Make the button that closes the modal disabled.
      2. Make that button become usable when the final 
         modal message has been displayed to the user.
      */ 

   setTimeout(function(){
      document.getElementById('modal-inner').innerHTML = `
         <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
               <img src="images/pirate.gif">
            </div>
      ` 

      modalCloseModal.disabled = false

   }, 3000)
})
