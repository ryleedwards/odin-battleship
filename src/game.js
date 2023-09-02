const Ship = require('./ship');
const Player = require('./player').Player;
const AI = require('./player').AI;

const player = new Player();
const ai = new AI();

const pShip0 = new Ship(5, 0, 'v');
const pShip1 = new Ship(4, 0, 'h');
const pShip2 = new Ship(3, 0, 'h');
const pShip3 = new Ship(3, 0, 'v');
const pShip4 = new Ship(2, 0, 'v');

const aiShip0 = new Ship(5, 0, 'v');
const aiShip1 = new Ship(4, 0, 'h');
const aiShip2 = new Ship(3, 0, 'h');
const aiShip3 = new Ship(3, 0, 'v');
const aiShip4 = new Ship(2, 0, 'v');
