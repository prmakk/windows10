'use strict';

import randomMessagesList from "./randomMsgs.js";
import randomNewsList from "./randomNews.js";

const truexaChannel = document.querySelector('.truexaChannel');
const danyaChannel = document.querySelector('.danyaChannel');
const junChannel = document.querySelector('.junChannel');

const channelNameHeader = document.querySelector('.channel-name-header');
const statusHeader = document.querySelector('.statusChannel');
const channelNameList = document.querySelectorAll('.channelName');
const channelMsgList = document.querySelectorAll('.channel-msg');
const channelMsgs = document.querySelector('.main__info');
const channelIcons = document.querySelector('.icons');

function showChannelMsgs(){
    channelMsgs.style = 'display: flex';
}

function randomNumMsgs(){
    return Math.floor(Math.random() * randomMessagesList.length);
}

function randomNumNews(){
    return Math.floor(Math.random() * randomNewsList.length);
}

function randomMessage(){
    for(let i = 0; i < channelMsgList.length; i++){
        channelMsgList[i].innerHTML = randomMessagesList[randomNumMsgs()];
    }
}

function randomNews(){
    for(let i = 0; i < channelMsgList.length; i++){
        channelMsgList[i].innerHTML = randomNewsList[randomNumNews()];
    }
}


truexaChannel.onclick = () =>{
    showChannelMsgs();
    randomNews();
    telegramChannelHeader.style = 'display: flex';
    channelIcons.style = 'display: flex';
    channelNameHeader.innerHTML = 'Труха ⚡️ Украина';
    statusHeader.innerHTML = '2 645 126 подписчиков';
    for(let i = 0; i < channelNameList.length; i++){
        channelNameList[i].innerHTML = 'Труха ⚡️ Украина';
    }
}

danyaChannel.onclick = () =>{
    showChannelMsgs();
    randomMessage();
    telegramChannelHeader.style = 'display: flex';
    channelNameHeader.innerHTML = 'Даня';
    statusHeader.innerHTML = 'был(а) в сети недавно';
    for(let i = 0; i < channelNameList.length; i++){
        channelNameList[i].innerHTML = 'Даня';
    }
}

junChannel.onclick = () =>{
    showChannelMsgs();
    randomMessage();
    telegramChannelHeader.style = 'display: flex';
    channelNameHeader.innerHTML = 'Туда-сюда Джун';
    statusHeader.innerHTML = '308 подписчиков';
    for(let i = 0; i < channelNameList.length; i++){
        channelNameList[i].innerHTML = 'Туда-сюда Джун';
    }
}