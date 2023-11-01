'use strict';

const calculationResult = document.querySelector('.calculationResult');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.clearAll');
const backspace = document.querySelector('.backspace');
const separator = document.querySelector('.separator');

const nineNum = document.querySelector('.nine');
const eightNum = document.querySelector('.eight');
const sevenNum = document.querySelector('.seven');
const sixNum = document.querySelector('.six');
const fiveNum = document.querySelector('.five');
const fourNum = document.querySelector('.four');
const threeNum = document.querySelector('.three');
const twoNum = document.querySelector('.two');
const oneNum = document.querySelector('.one');
const zeroNum = document.querySelector('.zero');


equal.onclick = () =>{
    let result = eval(calculationResult.value);
    if(Number.isInteger(result)) calculationResult.value = result;
    else calculationResult.value = result.toFixed(3);
}

clearAll.onclick = () =>{
    calculationResult.value = '';
}

nineNum.onclick = () =>{
    calculationResult.value += '9';
}

eightNum.onclick = () =>{
    calculationResult.value += '8';
}

sevenNum.onclick = () =>{
    calculationResult.value += '7';
}

sixNum.onclick = () =>{
    calculationResult.value += '6';
}

fiveNum.onclick = () =>{
    calculationResult.value += '5';
}

fourNum.onclick = () =>{
    calculationResult.value += '4';
}

threeNum.onclick = () =>{
    calculationResult.value += '3';
}

twoNum.onclick = () =>{
    calculationResult.value += '2';
}

oneNum.onclick = () =>{
    calculationResult.value += '1';
}

zeroNum.onclick = () =>{
    calculationResult.value += '0';
}

multiply.onclick = () =>{
    calculationResult.value += '*';
}

add.onclick = () =>{
    calculationResult.value += '+';
}

minus.onclick = () =>{
    calculationResult.value += '-';
}

divide.onclick = () =>{
    calculationResult.value += '/';
}

backspace.onclick = () =>{
    let arr = [...calculationResult.value];
    arr.pop();
    calculationResult.value = arr.join('');
}

separator.onclick = () =>{
    calculationResult.value += '.';
}

if(calculationResult.value === Infinity){
    calculationResult.value = 'Error';
}