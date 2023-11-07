'use strict';

const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const currentDinoScoreField = document.querySelector('.currentDinoScore');
const startInfoMsg = document.querySelector('.startInfo');

let currentScore = 0;

function init(){
    startInfoMsg.classList.add('_hidden');

    if(dino.classList != "jump"){
        dino.classList.add('jump');

        setTimeout(() =>{
            dino.classList.remove('jump');
        }, 500);
    }

    let collision = setInterval( () => {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

        if (cactusLeft <= 60 && cactusLeft > 0 && dinoTop >= 200) {
            startInfoMsg.classList.remove('_hidden');
            clearInterval(scoreInterval);
            dinoLoseWindow.classList.add('_active');
            dinoMain.classList.add('_hidden');
            dinoLoseScoreText.innerHTML = 'Score:' + currentScore;
        }
    }, 10);

    let scoreInterval = setInterval( () =>{
        currentScore += 1;
        currentDinoScoreField.innerHTML = Math.round(currentScore);
    }, 500);
}

dinoGameWindow.addEventListener('keydown', function(e){
    init();
})