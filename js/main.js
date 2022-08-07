let arrowIcon = document.querySelector('#arrow-icon');
console.log(arrowIcon);
arrowIcon.addEventListener('click', ()=> {
  let instructions = document.querySelector('.instructions');
  instructions.style.visibility !== "hidden" ? instructions.style.visibility = "hidden" : instructions.style.visibility = "visible"; 
});

let line = document.querySelectorAll('.list-group-item');
line.forEach((el) => {
  el.addEventListener('click', function(){
    !el.classList.contains('active') ? el.classList.add('active'): el.classList.remove('active');  
  })
});

