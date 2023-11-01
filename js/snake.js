'use strict';

const gameBoard = document.querySelector('.gameBoard');
let foodX = 13,
    foodY = 10;
let playerX = 5;
let playerY = 5;
let velocityX = 0;
let velocityY = 0;
let snakeBody = [];
let intervalId;
let score = 0;
const scoreText = document.querySelector('.score');
const modeText = document.querySelector('.mode');
const modeEasyBtn = document.querySelector('.modeEasy');
const modeMediumBtn = document.querySelector('.modeMedium');
const modeHardBtn = document.querySelector('.modeHard');
const modeUnrealBtn = document.querySelector('.modeUnreal');
const gameLoseWindow = document.querySelector('.gameLose');

const generateNewFood = () =>{
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const Game = () =>{
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if(playerX === foodX && playerY === foodY){
        generateNewFood();
        snakeBody.push([foodX, foodY]);
        score++;
        scoreText.innerHTML = `Score: ${score}`;
    }

    for(let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [playerX, playerY];
    playerX += velocityX;
    playerY += velocityY;

    checkCollision();

    for(let i = 0; i < snakeBody.length; i++){
        html += `<div class="player" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

        //check if snake hit yourself
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver();
        }
    }
    gameBoard.innerHTML = html;
}

const checkCollision = () =>{
    if(playerX < 0 || playerX > 31 || playerY < 0 || playerY > 31){
        gameOver();
    }
}

const gameOver = () =>{
    gameLoseWindow.style = 'display: flex';
    clearInterval(intervalId);
    gameBoard.style = 'display: none';
    setTimeout(() =>{
        ResetLvl()
    }, 2000);
}

const ResetLvl = () =>{
    location.reload();
}

const changeDirection = e =>{
    if (e.key === "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.key === "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = +1;
    }
    else if (e.key === "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.key === "ArrowRight" && velocityX != -1){
        velocityX = +1;
        velocityY = 0;
    }

    Game();
}

const checkMode = () =>{

    function clear(){
        gameMenu.style = 'display: none';
        gameBoard.style = 'display: grid';
        gameInfo.style = 'display: flex';
    }

    modeEasyBtn.onclick = () =>{
        clear();
        modeText.innerHTML = 'Mode: Easy';
        intervalId = setInterval(Game, 150);
    }

    modeMediumBtn.onclick = () =>{
        clear();
        modeText.innerHTML = 'Mode: Medium';
        intervalId = setInterval(Game, 90);
    }

    modeHardBtn.onclick = () =>{
        clear();
        modeText.innerHTML = 'Mode: Hard';
        intervalId = setInterval(Game, 60);
    }

    modeUnrealBtn.onclick = () =>{
        clear();
        modeText.innerHTML = 'Mode: Unreal';
        intervalId = setInterval(Game, 20);
    }
}

checkMode();
generateNewFood();
Game();
snakeGameWindow.addEventListener("keydown", changeDirection);
