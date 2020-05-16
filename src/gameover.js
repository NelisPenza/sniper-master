'use strict';

(function gameOver() {
  window.gameOver = (finalScore, arrayLength) => {
    const zero = 'Попробуй еще раз!';
    const bad = `Твой счет ${finalScore}. \n Есть, к чему стремиться!`;
    const normal = `Твой счет ${finalScore}. \n Весьма неплохо, но можно и лучше`;
    const good = `Твой счет ${finalScore}. \n Да ты крут!`;
    const excellent = 'Все в "яблочко". Ты настощий снайпер!';
    const pregunta = 'Стрелять будем?';

    const itog = finalScore / arrayLength;

    if (itog === 0 || itog < 0) {
      return zero;
    }
    if (itog > 0 && itog < 3) {
      return bad;
    }
    if (itog > 0 && itog <= 3) {
      return bad;
    }
    if (itog > 3 && itog <= 8) {
      return normal;
    }
    if (itog > 8 && itog < 10) {
      return good;
    }
    if (itog === 10) {
      return excellent;
    }
    return pregunta;
  };
}());
