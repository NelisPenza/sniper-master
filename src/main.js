'use strict';

(function main() {
  const mouseClickCoordinatesElement = document.getElementById('mouseClickCoordinates');
  const countElement = document.getElementById('count');
  const scoreElement = document.getElementById('score');
  const canvasElement = document.getElementById('canvas');
  const gameoverElement = document.getElementById('gameover');
  const context = canvasElement.getContext('2d');
  const stepTarget = 10;
  const gameTime = 3;
  const timeoutTarget = 1000;
  const mouseClickLog = [];
  let finalScore = 0;
  let bcs2ucs;

  gameoverElement.width = window.innerWidth;
  gameoverElement.height = window.innerHeight;

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
        if (i % 2 === 0) {
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

  document.addEventListener('click', (event) => {
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
    scoreElement.innerText = `Счет игры: ${finalScore}`;
  });

  const timerId = setInterval(processTarget, timeoutTarget);
  setTimeout(() => { clearInterval(timerId); }, (gameTime * timeoutTarget - 1));

  setTimeout(() => {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    gameoverElement.innerText = window.gameOver(finalScore, stepTarget);
  }, gameTime * timeoutTarget);


  document.addEventListener('DOMContentLoaded', processTarget);
  window.addEventListener('resize', processTarget);

}());
