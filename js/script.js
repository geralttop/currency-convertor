const btn = document.querySelectorAll('button');
const img = document.querySelector('img');
const input = document.querySelectorAll('input');
const ifc = document.querySelectorAll('.input_for_currency');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('li');
const easter_egg = document.getElementById('easter_egg');

let byn_to_dollar = 0.295;
easter_egg.style.display = 'none';

ul[0].style.display = 'none';
ul[1].style.display = 'none';

//TODO: currency conversion at input[0]
input[0].addEventListener('input', function(){
    exchanger();
    easter_egg_func(); //optional function. Just a easter egg for my classmates. 73 группа лучшая
})

function exchanger(){
    if (btn[0].innerHTML == 'BYN' && btn[1].innerHTML == 'USD') {
        input[1].value =(input[0].value * byn_to_dollar).toFixed(2); //The variable is only needed for easter egg
    } else if (btn[0].innerHTML == 'BYN' && btn[1].innerHTML == 'EUR') {
        input[1].value =(input[0].value * 0.282).toFixed(2);
    } else if (btn[0].innerHTML == 'BYN' && btn[1].innerHTML == 'RUB') {
        input[1].value =(input[0].value * 29.81).toFixed(2);
    } 
    else if (btn[0].innerHTML == 'USD' && btn[1].innerHTML == 'BYN') {
        input[1].value =(input[0].value * 3.33).toFixed(2);
    } else if (btn[0].innerHTML == 'USD' && btn[1].innerHTML == 'EUR') {
        input[1].value =(input[0].value * 0.945).toFixed(2);
    } else if (btn[0].innerHTML == 'USD' && btn[1].innerHTML == 'RUB') {
        input[1].value =(input[0].value * 99.3).toFixed(2);
    } 
    else if (btn[0].innerHTML == 'EUR' && btn[1].innerHTML == 'BYN') {
        input[1].value =(input[0].value * 3.46).toFixed(2);
    } else if (btn[0].innerHTML == 'EUR' && btn[1].innerHTML == 'USD') {
        input[1].value =(input[0].value * 1.045).toFixed(2);
    } else if (btn[0].innerHTML == 'EUR' && btn[1].innerHTML == 'RUB') {
        input[1].value =(input[0].value * 103.2).toFixed(2);
    } 
    else if (btn[0].innerHTML == 'RUB' && btn[1].innerHTML == 'BYN') {
        input[1].value =(input[0].value * 0.0327).toFixed(2);
    } else if (btn[0].innerHTML == 'RUB' && btn[1].innerHTML == 'USD') {
        input[1].value =(input[0].value * 0.0097).toFixed(2);
    } else if (btn[0].innerHTML == 'RUB' && btn[1].innerHTML == 'EUR') {
        input[1].value =(input[0].value * 0.0093).toFixed(2);
    } 
    else if (btn[0].innerHTML == btn[1].innerHTML) {
        input[1].value = input[0].value;
    }
    if (input[0].value.length > 10) {
        input[0].value = input[0].value.slice(0,-1);
    }
}

//TODO: function for currency conversion at input[1]
input[1].addEventListener('input', exchanger2);

function exchanger2(){
    if (btn[0].innerHTML == 'BYN' && btn[1].innerHTML == 'USD') {
        input[0].value =(input[1].value / 0.295).toFixed(2);
    } else if (btn[0].innerHTML == 'BYN' && btn[1].innerHTML == 'EUR') {
        input[0].value =(input[1].value / 0.282).toFixed(2);
    } else if (btn[0].innerHTML == 'BYN' && btn[1].innerHTML == 'RUB') {
        input[0].value =(input[1].value / 29.81).toFixed(2);
    } 
    else if (btn[0].innerHTML == 'USD' && btn[1].innerHTML == 'BYN') {
        input[0].value =(input[1].value / 3.33).toFixed(2);
    } else if (btn[0].innerHTML == 'USD' && btn[1].innerHTML == 'EUR') {
        input[0].value =(input[1].value / 0.945).toFixed(2);
    } else if (btn[0].innerHTML == 'USD' && btn[1].innerHTML == 'RUB') {
        input[0].value =(input[1].value / 99.3).toFixed(2);
    } 
    else if (btn[0].innerHTML == 'EUR' && btn[1].innerHTML == 'BYN') {
        input[0].value =(input[1].value / 3.46).toFixed(2);
    } else if (btn[0].innerHTML == 'EUR' && btn[1].innerHTML == 'USD') {
        input[0].value =(input[1].value / 1.045).toFixed(2);
    } else if (btn[0].innerHTML == 'EUR' && btn[1].innerHTML == 'RUB') {
        input[0].value =(input[1].value / 103.2).toFixed(2);
    } 
    else if (btn[0].innerHTML == 'RUB' && btn[1].innerHTML == 'BYN') {
        input[0].value =(input[1].value / 0.0327).toFixed(2);
    } else if (btn[0].innerHTML == 'RUB' && btn[1].innerHTML == 'USD') {
        input[0].value =(input[1].value / 0.0097).toFixed(2);
    } else if (btn[0].innerHTML == 'RUB' && btn[1].innerHTML == 'EUR') {
        input[0].value =(input[1].value / 0.0093).toFixed(2);
    } 
    else if (btn[0].innerHTML == btn[1].innerHTML) {
        input[1].value = input[0].value;
    }
    if (input[1].value.length > 10) {
        input[1].value = input[1].value.slice(0,-1);
    }
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

//easter egg for 73ТП
easter_egg.addEventListener('click', btd);

function btd(){
    byn_to_dollar = 73;
    exchanger();
}

function easter_egg_func(){
    if (input[0].value == 73) {
        easter_egg.style.display = 'block';
    } else {
        easter_egg.style.display = 'none';
    }
}

console.log('Изменил код для гитхаба');