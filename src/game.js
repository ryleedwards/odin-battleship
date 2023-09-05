import css from './style.css';
const Ship = require('./ship');
const Player = require('./player').Player;
const AI = require('./player').AI;
const dom = require('./DOM');

// Create player and AI objects
const player = new Player();
const ai = new AI();
player.assignOpponent(ai);
ai.assignOpponent(player);

// generate default ship placements
const generateDefaultPlayerShips = (() => {
  // Create and place player ships
  const pShip0 = new Ship(5, 0, 'v');
  player.gameboard.placeShip(2, 2, pShip0);
  const pShip1 = new Ship(4, 0, 'h');
  player.gameboard.placeShip(5, 0, pShip1);
  const pShip2 = new Ship(3, 0, 'h');
  player.gameboard.placeShip(5, 6, pShip2);
  const pShip3 = new Ship(3, 0, 'v');
  player.gameboard.placeShip(1, 0, pShip3);
  const pShip4 = new Ship(2, 0, 'v');
  player.gameboard.placeShip(7, 3, pShip4);
})();

const generateDefaultAiShips = (() => {
  // Create and place AI ships
  const aiShip0 = new Ship(5, 0, 'v');
  ai.gameboard.placeShip(2, 2, aiShip0);
  const aiShip1 = new Ship(4, 0, 'h');
  ai.gameboard.placeShip(5, 0, aiShip1);
  const aiShip2 = new Ship(3, 0, 'h');
  ai.gameboard.placeShip(5, 6, aiShip2);
  const aiShip3 = new Ship(3, 0, 'v');
  ai.gameboard.placeShip(1, 0, aiShip3);
  const aiShip4 = new Ship(2, 0, 'v');
  ai.gameboard.placeShip(7, 3, aiShip4);
})();

// Initialize DOM
dom.init(player, ai);

// Game loop - triggered by user attack

// Game over -- declare winner
// ---TODO---

// Method for receiving user attack
function receiveUserAttack(targetDiv) {
  console.log(targetDiv);
  // unpack target cell data
  let xCoordinate = targetDiv.dataset.col;
  let yCoordinate = targetDiv.dataset.row;
  if (player.attack(xCoordinate, yCoordinate)) {
    return 'hit';
  } else return 'miss';
  callAiAttack();
}

function callAiAttack() {
  ai.generateAttack();
}

export { receiveUserAttack };
