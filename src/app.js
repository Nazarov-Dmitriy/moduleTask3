import Game, { readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

console.log(loadGame);
const game = new Game();
game.start();
