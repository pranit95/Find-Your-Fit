let emailSend = document.getElementById("myhome__left_verifyEmail--link-btn")

emailSend.addEventListener('click', () => {
    emailSend.innerText = 'Email Sent!'
    emailSend.style.backgroundColor = "rgb(250,250,250)"
    emailSend.style.color = "rgb(185,185,185)"
})

let newsShare = document.getElementById("newsfeed__share-btn")

newsShare.addEventListener('click', () => {
    let textArea = document.getElementById("newsText")
    if(textArea.innerHTML != ""){
       getBlog() 
    }
})

function getBlog(){

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x) close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
