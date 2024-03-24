
const btnPlus = document.querySelector('[data-action="plus"]');
const btnMinus = document.querySelector('[data-action="minus"]');
const counter = document.querySelector('[data-counter]');



btnPlus.addEventListener('click', function(){
    console.log('Plus click');
    counter.innerText = ++counter.innerText;
});

btnMinus.addEventListener('click', function(){
    console.log('Minus click');
    if (parseInt(counter.innerText) === 0) {
      return 
    } 
    counter.innerText = --counter.innerText;
});   

