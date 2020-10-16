import React from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/Game.scss';

class Game extends React.Component {
  render() {
    document.addEventListener('mousemove', (e) => {
      const sqrs = document.querySelectorAll('.game__item');

      const mouseX = e.pageX;
      const mouseY = e.pageY;

      sqrs.forEach((sqr) => {
        const sqrX = sqr.offsetLeft + 20;
        const sqrY = sqr.offsetTop + 20;

        const diffX = mouseX - sqrX;
        const diffY = mouseY - sqrY;

        const radians = Math.atan2(diffY, diffX);

        const angle = (radians * 180) / Math.PI;

        sqr.style.transform = `rotate(${angle}deg)`;
      });
    });
    return (
      <div class='game__wrapper'>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>

        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>

        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>

        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>

        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>

        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>

        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
        <div class='game__item'></div>
      </div>
    );
  }
}

export default Game;
