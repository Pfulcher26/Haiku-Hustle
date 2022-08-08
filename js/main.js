


//state variables 
//sounds
const clickSound = new Audio('click.wav');
const clickSoundTwo = new Audio('click2.wav');
const clickSoundThree = new Audio('click3.wav');
const victorySound = new Audio('victory.wav');
const yesSound = new Audio('yes.wav')
const feetSong = new Audio('FEET.mp4');
const ohNo = new Audio('ohno.wav')
//DOM
const instructions = document.querySelector('.instructions');
const haikuLines = document.querySelector('.haiku-lines')
const arrowIcon = document.querySelector('#arrow-icon');
const questionIcon = document.querySelector('#question-icon');
const resetIcon = document.querySelector('#reset');
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
]
]

//cached variables
//create new variable that stores current line value
let lineHTML= ""
//need to establish a previous index variable to allow innerHTML content to switch
//places
let previousIndex = ""
let line = document.querySelectorAll('.list-group-item');
let round = 0
let score = 0 
let rendBoardCounter = 0; 
//shuffle array of arrays
let shuffledArray = shuffle(haikuArray); 
let shuffledInnerArrays = shuffledArray.map(array => shuffle(array));

//event listeners 
arrowIcon.addEventListener('click', ()=> {
  feetSong.play();
  unfade(submit);
  unfade(haikuLines);
  arrowIcon.style.visibility = 'hidden';
  submit.style.opacity = 0;
  submit.style.visibility = "visible";
});

questionIcon.addEventListener('click', ()=> {
  instructions.style.visibility !== "hidden" ? instructions.style.visibility = "hidden" : instructions.style.visibility = "visible"; 
  clickSoundThree.play();
});

submit.addEventListener('click', determineWinner); 

resetIcon.addEventListener('click', init)

//functions
function determineWinner() {
  clickSound.play()
  if(round === 7) {
    resetIcon.style.visibility = "visible";
    submit.style.visibility = "hidden";
    round += 1;
    roundBox.innerHTML = round; 
    feetSong.pause()
    victorySound.play()
    fade(haikuLines)
    resultBox.innerHTML = `You have reached the end.  You solved ${score} haiku.  Breathe deep and ascend.`
  } else {
    let array = []
  for(let i=0; i<line.length; i++){
    array.push(line[i].id)
  } 
  let arrayString = array.toString()
  if(arrayString === "0,1,2"){
    console.log('win')
    yesSound.play()
    round += 1;
    roundBox.innerHTML = round; 
    score += 1
    scoreBox.innerText = score; 
    rendBoardCounter += 1
    rendBoard()
  } else {
    console.log('lose')
    ohNo.play();
    round += 1;
    roundBox.innerHTML = round; 
    rendBoardCounter += 1
    rendBoard()
  }
  }
};

//functions 
function init() {
  lineHTML= ""
  previousIndex = ""
  round = 0;
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
  feetSong.stop()
  }

//loops through every element in the selected group and attaches event listeners
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
      lineHTML !== currentElement.innerHTML 
      previousIndex.innerHTML = currentElement.innerHTML 
      currentElement.innerHTML = lineHTML;
      previousElement.id = currentElement.id
      currentElement.id = previousID
      lineHTML = ""
    } 
  });
}

//Array shuffle function 
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// rendboard function
function rendBoard() {
  for(let i=0; i<line.length; i++){
    line[i].id = shuffledInnerArrays[rendBoardCounter][i].id;
    line[i].innerHTML = shuffledInnerArrays[rendBoardCounter][i].line; 
  }
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