
//state variables 
const clickSound = new Audio('click.wav')
const clickSoundTwo = new Audio('click2.wav')
const feetSong = new Audio('FEET.mp4')
const instructions = document.querySelector('.instructions');
const haikuLines = document.querySelector('.haiku-lines')
const arrowIcon = document.querySelector('#arrow-icon');
console.log(arrowIcon);

//cached variables
//create new variable that stores current line value
let lineHTML= ""
//need to establish a previous index variable to allow innerHTML content to switch
//places
let previousIndex = ""
let line = document.querySelectorAll('.list-group-item');

//event listeners 
arrowIcon.addEventListener('click', ()=> {
  feetSong.play()
  haikuLines.style.visibility ="visible";
  instructions.style.visibility !== "hidden" ? instructions.style.visibility = "hidden" : instructions.style.visibility = "visible"; 
});

//functions 
//loops through every element in the selected group and attaches event listeners
for(i = 0; i < line.length; i++) {
  let currentElement = line[i] 
  line[i].addEventListener('click', function(){
    if (lineHTML === "") {
      clickSound.play()
      currentElement.style.background = 'goldenrod'; 
      currentElement.classList.add('disabled')
      lineHTML = currentElement.innerHTML;
      previousIndex = currentElement
    } else {
      clickSoundTwo.play()
      previousIndex.style.background = 'white';
      previousIndex.classList.remove('disabled')
      lineHTML !== currentElement.innerHTML 
      previousIndex.innerHTML = currentElement.innerHTML 
      currentElement.innerHTML = lineHTML;
      lineHTML = ""
    } 
  });
}



// line.forEach((el, index) => {
//   el.addEventListener('click', function(){
//     if (lineHTML === "") {
//       lineHTML = el.innerHTML;
//       previousIndex = el[index]
//     } else {
//       lineHTML !== el.innerHTML 
//       el.innerHTML = lineHTML;
//       previousIndex = el.innerHTML 
//       lineHTML = ""
//     } 
//     // !el.classList.contains('active') ? el.classList.add('active'): el.classList.remove('active');  
//   })
// });




//establish a way to select the content of the line 
// console.log(line[0].innerHTML)



