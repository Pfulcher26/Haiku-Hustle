
//state variables 
const clickSound = new Audio('click.wav');
const clickSoundTwo = new Audio('click2.wav');
const clickSoundThree = new Audio('click3.wav');
const feetSong = new Audio('FEET.mp4');
const instructions = document.querySelector('.instructions');
const haikuLines = document.querySelector('.haiku-lines')
const arrowIcon = document.querySelector('#arrow-icon');
const questionIcon = document.querySelector('#question-icon');
const submit = document.querySelector('#seal')
const roundBox = document.querySelector('.round-box')
const scoreBox = document.querySelector('#score')
//Creates a nested array where the inner arrays contains objects with key
//value pairs that petain to the haiku line and id associated with the line
const haikuArray = [
  [
    {
    "line": "Oh, tranquility!",
    "id": 1
  },
  { 
    "line": "Penetrating the very rock",
    "id": 2
  },
  {
    "line": "A cicada's voice",
    "id": 3
  }
],
[
  {
    "line": "Even in Kyoto",
    "id": 1
  },
  { 
    "line": "Hearing the cuckoo's cry",
    "id": 2
  },
  {
    "line": "I long for Kyoto",
    "id": 3
  }
],
[
  {
    "line": "The rains of summer join together",
    "id": 1
  },
  { 
    "line": "How swift it is",
    "id": 2
  },
  {
    "line": "Mogami River",
    "id": 3
  }
],
[
  {
    "line": "A world of dew",
    "id": 1
  },
  { 
    "line": "And within every dewdrop",
    "id": 2
  },
  {
    "line": "A world of struggle",
    "id": 3
  }
],
[
  {
    "line": "The light of a candle",
    "id": 1
  },
  { 
    "line": "Is transferred to another candle",
    "id": 2
  },
  {
    "line": "Spring Twilight",
    "id": 3
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



//event listeners 
arrowIcon.addEventListener('click', ()=> {
  feetSong.play()
  unfade(haikuLines)
  arrowIcon.style.visibility = 'hidden';
});

questionIcon.addEventListener('click', ()=> {
  instructions.style.visibility !== "hidden" ? instructions.style.visibility = "hidden" : instructions.style.visibility = "visible"; 
  clickSoundThree.play();
});

//can make the checkForWinner function separate 
submit.addEventListener('click', ()=>{
  clickSound.play()
  let array = []
  for(let i=0; i<line.length; i++){
    array.push(line[i].id)
  } 
  if(array.toString() === "0,1,2"){
    round += 1;
    roundBox.innerHTML = round; 
    score += 1; 
    scoreBox.innerText = score; 
  } else {
    round += 1;
    roundBox.innerHTML = round; 
  };
});
 
//functions 
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



//make an array of objects for haikus, potentially create a class
//object, should have id's, sort them, loop over lines,
//and either create new elements, or replace the old ids
//and innerHTML 

//establish a way to select the content of the line 
// console.log(line[0].innerHTML)

