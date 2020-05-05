'use strict';

(function gameOver() {
  window.gameOver = (finalScore, stepTarget) => {
    const zero = 'Попробуй еще раз!';
    const bad = `Твой счет ${finalScore}. Есть, к чему стремиться!`;
    const normal = `Твой счет ${finalScore}. Весьма неплохо, но можно и лучше`;
    const good = `Твой счет ${finalScore}. Да ты крут!`;
    const excellent = 'Все в "яблочко". Ты настощий снайпер!';

    if (finalScore === 0) {
      return zero;
    }
    if (finalScore > 0 && finalScore <= stepTarget * 3) {
      return bad;
    }
    if (finalScore > stepTarget * 3 && finalScore <= stepTarget * 8) {
      return normal;
    }
    if (finalScore > stepTarget * 8 && finalScore < stepTarget * 10) {
      return good;
    } else {
      return excellent;
    }
  };
}());
