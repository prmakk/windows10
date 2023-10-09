'use strict';

const myPC = document.querySelector('.desktop-pc');
const myPcExplorer = document.querySelector('.desktop__pc');

const startMenu = document.querySelector('.desktop__start');
const startMenuBtn = document.querySelector('.footer-startMenu');

const currentTimeField = document.querySelector('.current-time');

function currentTime(){
    let time = new Date();
    return time.toLocaleString();
}

setInterval(() => currentTimeField.innerHTML = currentTime(), 1000);

myPC.onclick = () =>{
    myPcExplorer.classList.toggle('_active');
}

startMenuBtn.onclick = () =>{
    startMenu.classList.toggle('_active');
}