let reng = document.querySelector('#reng');
let bg = document.querySelector('.main');


reng.addEventListener('input', (nermin)=>{
    bg.style.backgroundColor = nermin.target.value
})