
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





//establish a way to select the content of the line 
// console.log(line[0].innerHTML)

