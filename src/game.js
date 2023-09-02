const Ship = require('./ship');
const Player = require('./player').Player;
const AI = require('./player').AI;

const player = new Player();
const ai = new AI();

const pShip0 = new Ship(5, 0, 'v');
player.gameboard.placeShip(2, 2, pShip0);
const pShip1 = new Ship(4, 0, 'h');
player.gameboard.placeShip(2, 2, pShip1);
const pShip2 = new Ship(3, 0, 'h');
player.gameboard.placeShip(2, 2, pShip2);
const pShip3 = new Ship(3, 0, 'v');
player.gameboard.placeShip(2, 2, pShip3);
const pShip4 = new Ship(2, 0, 'v');
player.gameboard.placeShip(2, 2, pShip4);

const aiShip0 = new Ship(5, 0, 'v');
ai.gameboard.placeShip(2, 2, aiShip0);
const aiShip1 = new Ship(4, 0, 'h');
ai.gameboard.placeShip(2, 2, aiShip1);
const aiShip2 = new Ship(3, 0, 'h');
ai.gameboard.placeShip(2, 2, aiShip2);
const aiShip3 = new Ship(3, 0, 'v');
ai.gameboard.placeShip(2, 2, aiShip3);
const aiShip4 = new Ship(2, 0, 'v');
ai.gameboard.placeShip(2, 2, aiShip4);
