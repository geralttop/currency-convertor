const btn = document.querySelectorAll('button');
const img = document.querySelector('img');
const input = document.querySelectorAll('input');
const ifc = document.querySelectorAll('.input_for_currency');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('li');
const exchanger_obj = { //курсы валют
    'BYNUSD': 0.295,
    'BYNEUR': 0.282,
    'BYNRUB': 29.81,
    'USDBYN': 3.33,
    'USDEUR': 0.945,
    'USDRUB': 99.3,
    'EURBYN': 3.46,
    'EURUSD': 1.045,
    'EURRUB': 103.2,
    'RUBBYN': 0.0327,
    'RUBUSD': 0.0097,
    'RUBEUR': 0.0093,
    'BYNBYN': 1,
    'RUBRUB': 1,
    'USDUSD': 1,
    'EUREUR': 1,
}

ul[0].style.display = 'none';
ul[1].style.display = 'none';

//TODO: currency conversion at input[0]
input[0].addEventListener('input', function(){
    exchanger();
})

function exchanger(){
    input[1].value = (input[0].value * exchanger_obj[btn[0].innerHTML+btn[1].innerHTML]).toFixed(2);
}

//TODO: function for currency conversion at input[1]
input[1].addEventListener('input', exchanger2);

function exchanger2(){
    input[0].value = (input[1].value / exchanger_obj[btn[0].innerHTML+btn[1].innerHTML]).toFixed(2);
}

//TODO: swaps currencies when clicking on img
img.addEventListener('click', swapper);

function swapper(){
    let str = btn[0].innerHTML;
    btn[0].innerHTML = btn[1].innerHTML;
    btn[1].innerHTML = str;
    exchanger();
}

//TODO: focusing and unfocusing on input
input.forEach((e,index)=>e.addEventListener('focus', ()=>{ //focusing
    ifc[index].style.border = '#56b069 2px solid';
}))

input.forEach((e,index)=>e.addEventListener('blur', ()=>{ //unfocusing
    ifc[index].style.border = '#c5cad8 2px solid';
}))

//TODO: display of ul with currencies onclick
btn.forEach((e,index)=>e.addEventListener('click', ()=>{
    display_of_ul(index);
}));

function display_of_ul(index){ 
    if (ul[index].style.display == 'none') {
        ul[index].style.display = 'block';
    } else {
        ul[index].style.display = 'none';
    }
}

//TODO: change currency in input when clicking on currencies from ul
li.forEach((e,index)=>e.addEventListener('click', function(){
    currency_from_li(index)
    exchanger();
}))

function currency_from_li(index){
    switch(index) {
        case 0:
            btn[0].innerHTML = 'BYN';
            break;
        case 1:
            btn[0].innerHTML = 'USD';
            break;
        case 2:
            btn[0].innerHTML = 'EUR';
            break;
        case 3:
            btn[0].innerHTML = 'RUB';
            break;
        case 4:
            btn[1].innerHTML = 'BYN';
            break;
        case 5:
            btn[1].innerHTML = 'USD';
            break;
        case 6:
            btn[1].innerHTML = 'EUR';
            break;
        case 7:
            btn[1].innerHTML = 'RUB';
            break;
    }
    if (index>3) {
        ul[1].style.display = 'none';
    } else {
        ul[0].style.display = 'none';
    }
}