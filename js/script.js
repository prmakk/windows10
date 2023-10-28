'use strict';

const myPcBtn = document.querySelector('.desktop-pc');
const myPcExplorer = document.querySelector('.desktop__pc');

//FOOTER VARIABLES
const exloperBtn = document.querySelector('.exloperBtn');

const startMenuBtn = document.querySelector('.footer-startMenu');
const startMenu = document.querySelector('.desktop__start');

const turnOffBtn = document.querySelector('.turnoffBtn');
const turnOffMenu = document.querySelector('.sidebar__turnon');

const trayBtn = document.querySelector('.trayBtn');
const trayMenu = document.querySelector('.footer__tray');

const internetBtn = document.querySelector('.internetBtn');
const internetMenu = document.querySelector('.footer__internet');

const footer = document.querySelector('.footer');

const currentTimeField = document.querySelector('.current-time');


//MY PC VARIABLES
const closeMyPcBtn = document.querySelector('.closeMyPc');
const trayMyPcBtn = document.querySelector('.trayMyPc');

const dropdownExlorerBtn = document.querySelector('.dropdownMyPcItems');
const exlorerMyPcItems = document.querySelector('.canHide-wrapper');

const dropdownDisksBtn = document.querySelector('.dropdownDisks');
const allDisks = document.querySelector('.disks__all');


//CHROME BROWSER VARIABLES
const closeChromeBtn = document.querySelector('.closeChrome');
const chromeWindow = document.querySelector('.desktop__chrome');
const chromeIcon = document.querySelector('.desktop-chrome');
const chromeIframe = document.querySelector('.chromeIframe');
const chromeFooterIcon = document.querySelector('.chromeFooterIcon');
const minimizeChromeBtn = document.querySelector('.minimizeChrome');


//TURN OFF/ON VARIABLES
const shutdownBtn = document.querySelector('.shutdownBtn');
const shutdownScreen = document.querySelector('.desktop__shutdown');
const pcTurnedOff = document.querySelector('.pcTurnedOff');
const turnOnPc = document.querySelector('.turnOnPc');
const pcLoadMotherboardScreen = document.querySelector('.pcLoadMotherboard');
const pcLoadHomeScreen = document.querySelector('.pcLoadHome');


//CALCULATOR VARIABLES
const calculatorAppBtn = document.querySelector('.calculatorApp');
const calculatorApp = document.querySelector('.desktop__calc');
const closeCalculatorAppBtn = document.querySelector('.closeCalculatorApp');
const calcFooterIcon = document.querySelector('.calcFooterIcon');
const minimizeCalculatorAppBtn = document.querySelector('.minimizeCalculatorApp');


//SNAKE GAME
const snakeGameBtn = document.querySelector('.desktop-snake');
const gameMenu = document.querySelector('.gameMenu');
const snakeGameWindow = document.querySelector('.desktop__snakeGame');
const snakeFooterIcon = document.querySelector('.snakeFooterIcon');
const closeSnakeGameBtn = document.querySelector('.closeSnakeGame');


function currentTime(){
    let time = new Date();
    return time.toLocaleString();
}

setInterval(() => currentTimeField.innerHTML = currentTime(), 500);

myPcBtn.onclick = () =>{
    myPcExplorer.classList.add('_active');
    startMenu.classList.remove('_active');
}


//FOOTER
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


//MY PC
closeMyPcBtn.onclick = () =>{
    myPcExplorer.classList.remove('_active');
}

exloperBtn.onclick = () =>{
    myPcExplorer.classList.toggle('_active');
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


//CHROME BROWSER
chromeIcon.onclick = () =>{
    chromeIframe.setAttribute('src', 'https://www.google.com/search?igu=1');
    setTimeout( () => chromeWindow.classList.add('_active'), 500);
    setTimeout( () => chromeFooterIcon.style = 'display: flex', 500); 
}

closeChromeBtn.onclick = () =>{
    chromeWindow.classList.remove('_active');
    chromeFooterIcon.style = 'display: none';
}

chromeFooterIcon.onclick = () =>{
    chromeWindow.classList.toggle('_active');
}

minimizeChromeBtn.onclick = () =>{
    chromeWindow.classList.remove('_active');
}


//TURN OFF/ON
shutdownBtn.onclick = () =>{
    shutdownScreen.style = 'display: flex';
    turnOffMenu.classList.remove('_active');
    startMenu.classList.remove('_active');
    footer.style = 'display: none';

    setTimeout(function off(){
        pcTurnedOff.style = 'display: block';
        shutdownScreen.style = 'display: none';
    }, 2000);
}

turnOnPc.onclick = () =>{
    let timeToLoad = 3000;
    pcTurnedOff.style = 'display: none';
    pcLoadMotherboardScreen.style = 'display: block';
    footer.style = 'display: none';
    
    setTimeout(function on(){
        pcLoadMotherboardScreen.style = 'display: none';
    }, timeToLoad);

    setTimeout(function on(){
        pcLoadMotherboardScreen.style = 'display: none';
        pcLoadHomeScreen.style = 'display: flex';
    }, timeToLoad);

    setTimeout(function on(){
        pcLoadHomeScreen.style = 'display: none';
        footer.style = 'display: flex';
    }, timeToLoad * 2); //waiting x2 time cuz 2 screens before
}


//CALCULATOR
calculatorAppBtn.onclick = () =>{
    calculatorApp.classList.add('_active');
    startMenu.classList.remove('_active');
    calcFooterIcon.style = 'display: flex';
}

closeCalculatorAppBtn.onclick = () =>{
    calculatorApp.classList.remove('_active');
    calcFooterIcon.style = 'display: none';
    calculationResult.value = '';
}

calcFooterIcon.onclick = () =>{
    calculatorApp.classList.toggle('_active');
}

minimizeCalculatorAppBtn.onclick = () =>{
    calculatorApp.classList.remove('_active');
}


//SNAKE GAME
snakeGameBtn.onclick = () =>{
    snakeGameWindow.classList.add('_active');
    snakeFooterIcon.style = 'display: flex';
    gameMenu.style = 'display: flex';
    gameBoard.style = 'display: none';
    gameInfo.style = 'display: none';
}

closeSnakeGameBtn.onclick = () =>{
    snakeGameWindow.classList.remove('_active');
    snakeFooterIcon.style = 'display: none';
}