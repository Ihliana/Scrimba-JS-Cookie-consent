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

   /*   
      Challenge: 
      1. Inside the body of this event listener, 
         create a const and set it equals to a new 
         instance of FormData which takes in our HTML 
         form element as a parameter.
      2. Log out the const (you should just get 
         a FormData object).
   */ 

   const consentFormData = new FormData(consentForm)


   /*   
      Challenge: 
      1. Create a const to store the user's name and
         use a FormData method to extract the 
         submitted name from the FormData object.
      2. Insert the user's name into the HTML string
         that contains the final message we show our
         users.
   */

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

   setTimeout(function(){
      document.getElementById('modal-inner').innerHTML = `
         <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
               <img src="images/pirate.gif">
            </div>
      ` 
   }, 3000)
})
