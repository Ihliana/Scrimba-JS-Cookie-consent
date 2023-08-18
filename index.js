/*
Aside Challenge:
1. Log out the phrase "Modal Opened!" 
   after a 1.5 second delay.
*/

/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

const modal = document.getElementById("modal")

setTimeout(() => modal.style.display = "inline", 1500)