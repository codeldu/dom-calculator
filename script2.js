let password = null;

let openBtn = document.querySelector('#openModal');

let closeBtn = document.querySelector('#closeSpan');

let closeBtnTwo = document.querySelector('#closeSpanPass');

let modal = document.querySelector('.modal-layout');

let passTab = document.querySelector('.modal-layout-pass')

let inputPass = document.querySelector('#pass');
let okBtn = document.querySelector('#passOk');

let saveBtn = document.querySelector('#save')

let firstPass = document.querySelector('#firstPass')

openBtn.addEventListener('click', ()=>{
    passTab.style.display = 'flex'
})

closeBtnTwo.addEventListener('click', ()=>{
    passTab.style.display = 'none'
})


closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none'
})



modal.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target != modal){
        return;
    }
    modal.style.display = 'none'
})

document.addEventListener('keydown', (e)=>{
    if (e.key == 'Escape') {
        modal.style.display = 'none'
    }
})

okBtn.addEventListener('click', ()=>{
    
    if (inputPass.value == password) {
        passTab.style.display = "none";
        modal.style.display = "flex"
    }

})

saveBtn.addEventListener('click', ()=>{
    password = firstPass.value;
    console.log(password);
})