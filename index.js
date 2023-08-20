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
         <h2>Thanks you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
               <img src="images/pirate.gif">
            </div>
      ` 
   }, 3000)
})


/*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
the accept button, the HTML string below
is inserted into the modal-text div.

<div class="modal-inner-loading">
<img src="images/loading.svg" class="loading">
<p id="uploadText">
Uploading your data to the dark web...
</p>
</div>
*/

/*   
Challenge: 
1. Use a setTimeout to make the phrase "Uploading
   your data to the dark web" change to "Making the 
   sale..." after 1.5 seconds.
⚠️ Do not change the loading svg!
*/  

/*   
Challenge: 
1. Make it so that 1.5 seconds after seeing the 
   "Making the sale..." message, the modal is 
   cleared of its content and the following 
   string of HTML is displayed instead.
   
   `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    ` 
*/  