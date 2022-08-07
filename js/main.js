let arrowIcon = document.querySelector('#arrow-icon');
console.log(arrowIcon);
arrowIcon.addEventListener('click', ()=> {
  let instructions = document.querySelector('.instructions');
  instructions.style.visibility !== "hidden" ? instructions.style.visibility = "hidden" : instructions.style.visibility = "visible"; 
});