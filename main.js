// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function init(){
 document.querySelectorAll('article footer ul li span').forEach(function(element){
  element.addEventListener('click', function(event){
    
    mimicServerCall()
    .then(function(response){
     if (event.target.innerHTML === EMPTY_HEART){
      event.target.innerHTML = FULL_HEART
      event.target.className = "activated-heart"
     } else {
      event.target.innerHTML = EMPTY_HEART
      event.target.className = 'like-glyph'
     }

    })
    .catch(function(error){
      const errorElement = document.querySelector('div')
      if(error){
        errorElement.className = ''
      }
      setTimeout(() => errorElement.className = "hidden", 3000)
    })
  })
 })
 
}

document.addEventListener("DOMContentLoaded", init)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
