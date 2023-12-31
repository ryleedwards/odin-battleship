import css from './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
const Ship = require('./ship');
const Player = require('./player').Player;
const AI = require('./player').AI;
const dom = require('./DOM');

// Create player and AI objects
const player = new Player();
const ai = new AI();
player.assignOpponent(ai);
ai.assignOpponent(player);
ai.generateAvailableAttacks();

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

function evaluateWinCondition() {
  if (player.gameboard.checkAllSunk()) {
    declareWinner(ai);
  }
  if (ai.gameboard.checkAllSunk()) {
    declareWinner(player);
  }
}

function declareWinner(winner) {
  if (winner === player) dom.displayWinner('YOU WON!', true);
  if (winner === ai) dom.displayWinner('GAME OVER', false);
}

// Method for receiving user attack from DOM event
function receiveUserAttack(xCoordinate, yCoordinate) {
  const result = player.attack(xCoordinate, yCoordinate);
  evaluateWinCondition();
  return result;
}

function callAiAttack() {
  const result = ai.generateAttack();
  evaluateWinCondition();
  return result;
}

export { receiveUserAttack, callAiAttack };
