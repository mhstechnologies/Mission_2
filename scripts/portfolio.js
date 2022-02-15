/*
COLOR PALETTE
https://coolors.co/f7fff7-343434-2f3061-ffe66d-a1c6d7
#F7FFF7 - almost white
#343434 - dark gray - almost black
#2F3061 - blue dark
#FFE66D - yellow
#A1C6D7 - blue light
*/

const colorPalette = ['#F7FFF7', 'red', '#FFE66D'];
const projectName = ["Web Design", "Project A", "Project B", "Project C", "Project D"];
const h1Element = document.getElementsByTagName('h1');

let randomNumber = 0;
let currentProject = 0;

function changeH1FontColor() {
  randomNumber = Math.floor(Math.random() * colorPalette.length);
  this.style.color = colorPalette[randomNumber];
}

function refreshPage() {
  document.location.reload(true);
}

function changeProject() {
  if (currentProject < projectName.length - 1) {
    currentProject++;
  }
  else{
    currentProject = 0;
  }

  document.getElementById('projectName').textContent = projectName[currentProject];
}

function renderImage() {
  document.getElementById('thank_you').style.display = "block";
  setInterval(refreshPage, 5000);
}

function init() {
  for (let i = 0; i < h1Element.length; i++) {
    h1Element[i].addEventListener('mouseover', changeH1FontColor);
  }
}

if (window.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}