'use strict';

(function mapCoordinates() {
  window.mapCoordinates = (x, y, randomX, randomY) => [x - randomX, -y + randomY];
}());
