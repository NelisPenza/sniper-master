'use strict';

(function quadrants() {
  window.quadrants = (x, y, stepTarget) => {
    const radius = Math.sqrt(x * x + y * y);
    const points0 = 0;
    const points1 = 10;
    const points2 = 9;
    const points3 = 8;
    const points4 = 7;
    const points5 = 6;
    const points6 = 5;
    const points7 = 4;
    const points8 = 3;
    const points9 = 2;
    const points10 = 1;

    if (radius <= stepTarget * 1) {
      return points1;
    }

    if (radius > stepTarget * 1 && radius <= stepTarget * 2) {
      return points2;
    }

    if (radius > stepTarget * 2 && radius <= stepTarget * 3) {
      return points3;
    }

    if (radius > stepTarget * 3 && radius <= stepTarget * 4) {
      return points4;
    }

    if (radius > stepTarget * 4 && radius <= stepTarget * 5) {
      return points5;
    }

    if (radius > stepTarget * 5 && radius <= stepTarget * 6) {
      return points6;
    }

    if (radius > stepTarget * 6 && radius <= stepTarget * 7) {
      return points7;
    }

    if (radius > stepTarget * 7 && radius <= stepTarget * 8) {
      return points8;
    }

    if (radius > stepTarget * 8 && radius <= stepTarget * 9) {
      return points9;
    }

    if (radius > stepTarget * 9 && radius <= stepTarget * 10) {
      return points10;
    }

    return points0;
  };
}());
