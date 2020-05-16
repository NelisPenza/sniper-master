'use strict';

(function main() {
  const buttonElement = document.getElementById('button');
  const buttonElement2 = document.getElementById('button2');
  const countdownElement = document.getElementById('countdown');
  const countElement = document.getElementById('count');
  const scoreElement = document.getElementById('score');
  const canvasElement = document.getElementById('canvas');
  const gameoverElement = document.getElementById('gameover');
  const context = canvasElement.getContext('2d');
  const stepTarget = 10;
  const timerGame = 20;
  const mouseClickLog = [];
  let finalScore;
  let bcs2ucs;

  function beginGame() {
    countElement.style.display = 'none';
    scoreElement.style.display = 'none';
    canvasElement.style.display = 'none';
    gameoverElement.style.display = 'none';
    countdownElement.style.display = 'none';
    buttonElement.style.display = 'block';
    buttonElement2.style.display = 'none';

  }

  function processTarget() {
    function randomInteger(min, max) {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    const randomX = randomInteger(window.innerWidth / 4, window.innerWidth / 4 * 3);
    const randomY = randomInteger(window.innerHeight / 4, window.innerHeight / 4 * 3);
    console.log(`randomX: ${randomX} , randomY: ${randomY}`);

    function drowTarget(originX, originY) {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
      for (let i = 10; i >= 0; i--) {
        const radius = i * stepTarget;
        context.beginPath();
        context.arc(originX, originY, radius, 0, 2 * Math.PI);
        if (i <= 5 && i > 2) {
          context.fillStyle = '#006400';
          context.fill();
        } else {
          context.fillStyle = '#F0FFFF';
          context.fill();
        }
        context.stroke();
        context.closePath();
      }
    }
    drowTarget(randomX, randomY);

    bcs2ucs = (mouseX, mouseY) => window.mapCoordinates(mouseX, mouseY, randomX, randomY);
  }

  function targetTimer() {
    processTarget();
    let currentTarget = timerGame;
    const timerTargetId = setInterval(() => {
      if (currentTarget === 0) {
        clearInterval(timerTargetId);
      }
      processTarget();
      currentTarget--;
    }, 1000);
  }


  function countdownTimer() {
    let current = timerGame;
    if (current <= 9) {
      current = `0${current}`;
    }
    countdownElement.innerText = `До конца игры: ${current}`;
    current--;
    const timerId = setInterval(() => {
      if (current === 0) {
        clearInterval(timerId);
      }
      countdownElement.innerText = `До конца игры: ${current}`;
      current--;
    }, 1000);
  }

  function finalStep() {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    countElement.disabled = true;
    scoreElement.disabled = true;
    canvasElement.disabled = true;
    const arrayLength = mouseClickLog.length;
    gameoverElement.innerText = window.gameOver(finalScore, arrayLength);
    canvasElement.style.display = 'none';
    countdownElement.hidden = true;
    buttonElement2.style.display = 'block';
  }

  function startGame() {
    finalScore = 0;
    mouseClickLog.length = 0;
    buttonElement.style.display = 'none';
    countElement.style.display = 'block';
    countElement.innerText = '';
    scoreElement.style.display = 'block';
    scoreElement.innerText = '';
    canvasElement.style.display = 'block';
    gameoverElement.innerText = '';
    gameoverElement.style.display = 'block';
    countdownElement.innerText = '';
    countdownElement.style.display = 'block';
    targetTimer();
    countdownTimer();
    setTimeout(finalStep, (timerGame) * 1000);
  }

  buttonElement.onclick = startGame;

  function shotCounter(event) {
    const [x, y] = bcs2ucs(event.clientX, event.clientY);
    const pointGame = window.quadrants(x, y, stepTarget);
    console.log(`pointGame: ${pointGame}`);
    console.log(`x, y: ${x}, ${y} `);
    finalScore += pointGame;
    mouseClickLog.push([pointGame]);
    countElement.innerHTML = '';
    for (let i = 0; i < mouseClickLog.length; i++) {
      countElement.innerHTML += `<li> Ваш выстрел: ${mouseClickLog[i]} </li>`;
    }
    scoreElement.innerText = `Счет игры: \n ${finalScore}`;
  }

  canvasElement.onclick = shotCounter;

  document.addEventListener('DOMContentLoaded', beginGame);
  window.addEventListener('resize', beginGame);
}());
