//state variables 

//sounds

const clickSound = new Audio('click.wav');
const clickSoundTwo = new Audio('click2.wav');
const clickSoundThree = new Audio('click3.wav');
const victorySound = new Audio('victory.wav');
const yesSound = new Audio('yes.wav')
const feetSong = new Audio('FEET.mp4');
const ohNo = new Audio('ohno.wav');

//DOM
const instructions = document.querySelector('.instructions');
const haikuLines = document.querySelector('.haiku-lines')
const arrowIcon = document.querySelector('#arrow-icon');
const questionIcon = document.querySelector('#question-icon');
const resetIcon = document.querySelector('#reset');
const muteIcon = document.querySelector('#mute');
const unMuteIcon = document.querySelector('#un-mute');
const submit = document.querySelector('#seal');
const roundBox = document.querySelector('.round-box');
const scoreBox = document.querySelector('#score');
const resultBox = document.querySelector('#result');

//Creates a nested array where the inner arrays contains objects with key
//value pairs that petain to the haiku line and id associated with the line
const haikuArray = [
  [
    {
    "line": "Oh, tranquility!",
    "id": 0
  },
  { 
    "line": "Penetrating the very rock",
    "id": 1
  },
  {
    "line": "A cicada's voice",
    "id": 2
  }
],
[
  {
    "line": "Period",
    "id": 0
  },
  { 
    "line": "One blue egg all summer long",
    "id": 1
  },
  {
    "line": "Now gone",
    "id": 2
  }
],
[
  {
    "line": "The rains join together",
    "id": 0
  },
  { 
    "line": "How swift it is",
    "id": 1
  },
  {
    "line": "Mogami River",
    "id": 2
  }
],
[
  {
    "line": "A world of dew",
    "id": 0
  },
  { 
    "line": "And within every dewdrop",
    "id": 1
  },
  {
    "line": "A world of struggle",
    "id": 2
  }
],
[
  {
    "line": "The light of a candle",
    "id": 0
  },
  { 
    "line": "Is transferred to another candle",
    "id": 1
  },
  {
    "line": "Spring Twilight",
    "id": 2
  }
],
[
  {
    "line": "The apparition of these",
    "id": 0
  },
  { 
    "line": "Faces in the crowd",
    "id": 1
  },
  {
    "line": "Petals on a wet black bough",
    "id": 2
  }
],
[
  {
    "line": "Quietly, quietly",
    "id": 0
  },
  { 
    "line": "Yellow mountain roses fall",
    "id": 1
  },
  {
    "line": "Sound of the rapids",
    "id": 2
  }
],
[
  {
    "line": "The first cold shower",
    "id": 0
  },
  { 
    "line": "Even the monkey seems to want",
    "id": 1
  },
  {
    "line": "A little coat of straw",
    "id": 2
  }
],
[
  {
    "line": "Old pond",
    "id": 0
  },
  { 
    "line": "Frog leaps in",
    "id": 1
  },
  {
    "line": "Water's sound",
    "id": 2
  }
],
[
  {
    "line": "The wind of mt fuji",
    "id": 0
  },
  { 
    "line": "I've brought on my fan",
    "id": 1
  },
  {
    "line": "A gift from Edo",
    "id": 2
  }
],
[
  {
    "line": "Of Edo's rain",
    "id": 0
  },
  { 
    "line": "How many mouths did you drink",
    "id": 1
  },
  {
    "line": "Cuckoo",
    "id": 2
  }
],
[
  {
    "line": "On a branch",
    "id": 0
  },
  { 
    "line": "Floating downriver",
    "id": 1
  },
  {
    "line": "A cricket, singing",
    "id": 2
  }
],
[
  {
    "line": "She never saw fire",
    "id": 0
  },
  { 
    "line": "But her eyes smolder for the",
    "id": 1
  },
  {
    "line": "Cold death of Buddha",
    "id": 2
  }
],
[
  {
    "line": "Of Edo's rain",
    "id": 0
  },
  { 
    "line": "How many mouths did you drink",
    "id": 1
  },
  {
    "line": "Cuckoo",
    "id": 2
  }
],
[
  {
    "line": "Once more as I wait",
    "id": 0
  },
  { 
    "line": "For you, night and icy wind",
    "id": 1
  },
  {
    "line": "Melt into cold rain",
    "id": 2
  }
],
[
  {
    "line": "In the August grass",
    "id": 0
  },
  { 
    "line": "Struck by the last rays of sun",
    "id": 1
  },
  {
    "line": "The cracked teacup screams",
    "id": 2
  }
],
[
  {
    "line": "From time to time",
    "id": 0
  },
  { 
    "line": "The clouds give rest",
    "id": 1
  },
  {
    "line": "To the moon beholders",
    "id": 2
  }
] 
]

//Array of responses that are issued when the user presses the question icon
const questionButtonArray = [
  "Click arrow to start",
  "",
  "Arrange the lines in proper order, but be careful, you only have once chance at perfection",
  "",
  "There are nine rounds.",
  "",
  "At the end of nine rounds, you may start again.",
  "",
  "Haiku is the plural of haiku",
  "",
  "Haiku began in thirteenth-century Japan as the opening phrase of renga, an oral poem, generally a hundred stanzas long, which was also composed syllabically.",
  "",
  "Haiku emphasize simplicity, intensity and directness of expression.",
  "",
  "They focus on a brief moment in time, an ability to read in one breath and a sudden sense of enlightenment.",
  "",
  "Haiku consist of three phrases that contain a 'kireji', or cutting word, 17 'on' in a 5,6,5 pattern, and a 'kigo', or seasonal reference.",
  "",
  "Mastuo Basho is widely considered the master of the haiku.",
  "",
  "Since their inception in thirteenth century Japan, haiku have been written all over the world.",
  "",
  "Have you thought about writing a haiku yourself?",
  "",
  "Think of the last time you were happ.", 
  "",
  "If that's too hard, think of the last time you were almost happy.",
  "",
  "Good.",
  "",
  "Now capture that feeling and hold it in your heart.",
  "",
  "Very slowly, begin to concentrate on an image associated with that feeling.", 
  "", 
  "Turn that image into words.",
  "",
  "Don't think too hard, try to feel what your heart is saying.",
  "",
  "Now put those words into a line.",
  "",
  "And another line...", 
  "",
  "And another line...",
  "",
  "And another line...",
  "",
  "And if you get stuck, don't worry.",
  "",
  "Don't worry.",
  "",
  "There are endless chances at perfection."
]

//cached variables
//create new variable that stores current line value
let lineHTML= ""
let previousIndex = ""
let line = document.querySelectorAll('.list-group-item');
let round = 1
let score = 0 
let rendBoardCounter = 0; 
//shuffle array of arrays
let shuffledArray = shuffle(haikuArray); 
let shuffledInnerArrays = shuffledArray.map(array => shuffle(array));

//event listeners 

//arrow icon 
arrowIcon.addEventListener('click', ()=> {
  feetSong.play();
  unfade(submit);
  unfade(haikuLines);
  arrowIcon.style.visibility = 'hidden';
  submit.style.opacity = 0;
  submit.style.visibility = "visible";
  roundBox.style.visibility = "visible";
  scoreBox.style.visibility = "visible";
});

//queston icon
questionIcon.addEventListener('click', function() {
  if(questionButtonArray.length === 0) {
    instructions.style.display = "hidden"
  } else {
    instructions.style.visibility === "hidden" ? instructions.style.visibility = "visible" : instructions.style.visibility = "hidden"; 
    instructions.innerText = questionButtonArray[0];
    questionButtonArray.shift()
    console.log(questionButtonArray)
    clickSoundThree.play();
  }
});

//mute icon
muteIcon.addEventListener('click', ()=> {
  feetSong.pause()
  muteIcon.style.visibility = "hidden";
  unMuteIcon.style.visibility = "visible";
});

//unmute icon
unMuteIcon.addEventListener('click', ()=> {
  feetSong.play()
  unMuteIcon.style.visibility = "hidden";
  muteIcon.style.visibility = "visible";
});

//submit icon
submit.addEventListener('click', determineWinner); 

//reset icon 
resetIcon.addEventListener('click', init)

//functions

//initialization function 
function init() {
  lineHTML= ""
  previousIndex = ""
  round = 1;
  roundBox.innerHTML = round;
  score = 0 
  scoreBox.innerHTML = score; 
  rendBoardCounter = 0; 
  resultBox.innerHTML = "";
  shuffledArray = shuffle(haikuArray);
  shuffledInnerArrays = shuffledArray.map(array => shuffle(array));
  rendBoard();
  resetIcon.style.visibility = "hidden";
  arrowIcon.style.visibility = "visible";
  }

//rendboard function
function rendBoard() {
  for(let i=0; i<line.length; i++){
    line[i].id = shuffledInnerArrays[rendBoardCounter][i].id;
    line[i].innerHTML = shuffledInnerArrays[rendBoardCounter][i].line; 
  }
  lineHTML = ""
  line.forEach(element => element.style.background = 'white');
  line.forEach(element => element.style.background = 'white');
  line.forEach(element => element.classList.remove('disabled'));

}

//function to determine winner
function determineWinner() {
  clickSound.play()
    let array = []
  for(let i=0; i<line.length; i++){
    array.push(line[i].id)
  } 
  let arrayString = array.toString()
  if(arrayString === "0,1,2" && round === 9 || round === 9){
      resetIcon.style.visibility = "visible";
      submit.style.visibility = "hidden";
      feetSong.pause()
      victorySound.play()
      fade(haikuLines)
      resultBox.innerHTML = `You have reached the end.  You solved ${score} haiku.  Breathe deep and ascend.`
    } else if(arrayString === "0,1,2"){
    yesSound.play();
    round += 1;
    roundBox.innerHTML = round; 
    score += 1;
    scoreBox.innerText = score; 
    rendBoardCounter += 1
    rendBoard()
    
  } else {
    ohNo.play();
    round += 1;
    roundBox.innerHTML = round; 
    rendBoardCounter += 1
    rendBoard()
  }
};

//function to handle sorting the DOM elements containing haiku lines
for(i = 0; i < line.length; i++) {
  let currentElement = line[i] 
  line[i].addEventListener('click', function(){
    if (lineHTML === "") {
      clickSound.play()
      currentElement.style.background = 'goldenrod'; 
      currentElement.classList.add('disabled');
      lineHTML = currentElement.innerHTML;
      previousIndex = currentElement
      previousID = currentElement.id 
      previousElement = currentElement
    } else {
      clickSoundTwo.play()
      previousIndex.style.background = 'white';
      previousIndex.classList.remove('disabled')
      previousIndex.innerHTML = currentElement.innerHTML 
      currentElement.innerHTML = lineHTML;
      previousElement.id = currentElement.id
      currentElement.id = previousID
    } 
  });
}

//Array shuffle function 
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex 
  //While there are elements left 
  while (currentIndex != 0) {
    //create a random index and select an element based on that index 
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    //swapping array items based on random index 
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


//fade in function 
function unfade(element) {
  var op = 0.05;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.05;
  }, 85);
}

//fade out function 
function fade(element) {
  var op = .05;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.05;
  }, 50);
}