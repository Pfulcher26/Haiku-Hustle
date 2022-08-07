let arrowIcon = document.querySelector('#arrow-icon');
console.log(arrowIcon);
arrowIcon.addEventListener('click', ()=> {
  let instructions = document.querySelector('.instructions');
  instructions.style.visibility !== "hidden" ? instructions.style.visibility = "hidden" : instructions.style.visibility = "visible"; 
});

//create new variable that stores current line value
//need to establish a previous index variable to allow innerHTML content to switch
//places
let lineHTML= ""
let previousIndex = ""
let clickSound = new Audio('click.wav')
let clickSoundTwo = new Audio('click2.wav')

//loops through every element in the selected group and attaches event listeners
let line = document.querySelectorAll('.list-group-item');

for(i = 0; i < line.length; i++) {
  let currentElement = line[i] 
  line[i].addEventListener('click', function(){
    if (lineHTML === "") {
      clickSound.play()
      currentElement.classList.add('disabled')
      lineHTML = currentElement.innerHTML;
      previousIndex = currentElement
    } else {
      clickSoundTwo.play()
      lineHTML !== currentElement.innerHTML 
      previousIndex.innerHTML = currentElement.innerHTML 
      previousIndex.classList.remove('disabled')
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



