// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the submit button from FORM
var submit = document.getElementById("finalize");

// Get the second button Bienvenue dans le Fléau !


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    alert("Vous ne pouvez pas quitter le Fléau");
  }
}

// When the user clicks on submit button, close the modal and change text
submit.onclick = function() {
    var secondBtn = document.getElementById("mySecondBtn");
    
    if(secondBtn.classList.contains('hide')){
        secondBtn.classList.remove('hide');
    }
    else{
        secondBtn.classList.add("hide");
    }
     modal.style.display = "none";
    
}