'use strict';

const myPcBtn = document.querySelector('.desktop-pc');
const myPcExplorer = document.querySelector('.desktop__pc');

const exloperBtn = document.querySelector('.exloperBtn');

const startMenuBtn = document.querySelector('.footer-startMenu');
const startMenu = document.querySelector('.desktop__start');

const turnOffBtn = document.querySelector('.shutdownBtn');
const turnOffMenu = document.querySelector('.sidebar__turnon');

const trayBtn = document.querySelector('.trayBtn');
const trayMenu = document.querySelector('.footer__tray');

const internetBtn = document.querySelector('.internetBtn');
const internetMenu = document.querySelector('.footer__internet');

const closeMyPcBtn = document.querySelector('.closeMyPc');
const trayMyPcBtn = document.querySelector('.trayMyPc');

const dropdownExlorerBtn = document.querySelector('.dropdownMyPcItems');
const exlorerMyPcItems = document.querySelector('.canHide-wrapper');

const dropdownDisksBtn = document.querySelector('.dropdownDisks');
const allDisks = document.querySelector('.disks__all');

const currentTimeField = document.querySelector('.current-time');

function currentTime(){
    let time = new Date();
    return time.toLocaleString();
}

setInterval(() => currentTimeField.innerHTML = currentTime(), 500);

myPcBtn.onclick = () =>{
    myPcExplorer.classList.add('_active');
    startMenu.classList.remove('_active');
}

startMenuBtn.onclick = () =>{
    startMenu.classList.toggle('_active');
    turnOffMenu.classList.remove('_active');
}

turnOffBtn.onclick = () =>{
    turnOffMenu.classList.toggle('_active');
}

trayBtn.onclick = () =>{
    trayMenu.classList.toggle('_active');
    internetMenu.classList.remove('_active');
}

internetBtn.onclick = () =>{
    internetMenu.classList.toggle('_active');
    trayMenu.classList.remove('_active');
}

closeMyPcBtn.onclick = () =>{
    myPcExplorer.classList.remove('_active');
}

exloperBtn.onclick = () =>{
    myPcExplorer.classList.add('_active');
}

trayMyPcBtn.onclick = () =>{
    myPcExplorer.classList.remove('_active');
}

dropdownExlorerBtn.onclick = () =>{
    exlorerMyPcItems.classList.toggle('_hidden');
}

dropdownDisksBtn.onclick = () =>{
    allDisks.classList.toggle('_hidden');
}