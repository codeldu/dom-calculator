let first = document.querySelector('#first');
let second = document.querySelector('#second');

let selectBox = document.querySelector('#arf');
let equalBtn = document.querySelector('.equal');

let total = document.querySelector('#total');
let clearBtn = document.querySelector('#clear')

// selectBox.addEventListener('change', (e) => {
//     switch (e.target.value) {
//         case 'plus':

//             break;
//         case 'minus':
//             console.log("cix");
//             break;
//         case 'multiply':
//             console.log("vur");
//             break;
//         case 'divide':
//             console.log("bol");
//             break;
//         default: console.log("err");
//             break;
//     }
// })

equalBtn.addEventListener('click', function () {
    switch (selectBox.value) {
        case 'plus':
            total.innerText = Number(first.value) + Number(second.value)
            break;
        case 'minus':
            total.innerText = Number(first.value) - Number(second.value)
            break;
        case 'multiply':
            total.innerText = Number(first.value) * Number(second.value)
            break;
        case 'divide':
            total.innerText = Number(first.value) / Number(second.value)
            break;
        default: console.log("err");
            break;
    }
})

clearBtn.addEventListener('click', ()=>{
    let inputs = document.querySelectorAll('input');
    console.log(inputs);
    inputs.forEach(babek=>{
       babek.value = ""
    })
})