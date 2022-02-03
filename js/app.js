




const keyboardQuerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const hideOverlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const misses = document.querySelectorAll('.tries');


let missed = 0;



startButton.addEventListener('click', () => {
    if (hideOverlay.style.display == 'none') {
        listhideOverlayDiv.style.display = 'block';
    } else {
    hideOverlay.style.display = 'none';
    
    }
});



const phrases = [ 
  'when pigs fly',
  'wild goose chase',
  'break a leg',
  'raining cats and dogs',
  'piece of cake'
];




function getRandomPhraseAsArray(arr){
    let randomNumber = Math.floor(Math.random() * phrases.length); 
    return arr[randomNumber].split([,]);
   
} 


const splitString = getRandomPhraseAsArray(phrases);



function addPhraseToDisplay(arr){
    let phraseUl = document.querySelector('#phrase ul');

    for (let i=0; i<arr.length; i++){

        let li = document.createElement('li');
    
        phraseUl.appendChild(li);
        li.textContent = arr[i]; 
    if (arr[i] === ' ') {
      li.classList.add("space"); 
    } else {
        li.classList.add("letter"); 
    }
    }

}
addPhraseToDisplay(splitString); 



const letters = document.querySelectorAll('.letter');



const checkLetter = (button) => {
    let matched = null;
    for (i = 0; i < letters.length; i++) {
      if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add("show"); 
        matched = true;
      }
    }
  
    return matched;
  };

const hearts =  document.querySelectorAll(".tries img");



  keyboardQuerty.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = "chosen ";
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
       
        hearts[missed].src = 'images/lostHeart.png';
        missed++;
        
       
      }
      checkWin(); 
    }
    reset();
  }); 




function checkWin () {
  const show = document.querySelectorAll('.show'); 
  let title = document.querySelector('.title');  
  if(letters.length === show.length) {
    hideOverlay.classList.add("win");
    title.textContent = 'Congratulations, You Won!';
    hideOverlay.style.display = 'flex';
    
  } else if (missed > 4) {
    hideOverlay.classList.add("lose");
    title.textContent = 'Sorry, you lost, please try again.';
    hideOverlay.style.display = 'flex';
    
  }

}


function reset() {
  startButton.textContent = 'Reset The Game';
 
  startButton.addEventListener("click", ()  => {
    hideOverlay.style.display = 'flex';
    window.location.reload();
   
  });
}