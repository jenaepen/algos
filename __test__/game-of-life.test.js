const gameOfLife = require("../challenges/game-of-life")

describe('gameOfLife test', () => {
    
    it(' gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]) to equal [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]', () => {
        expect(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])).toEqual([[0,0,0],[1,0,1],[0,1,1],[0,1,0]]);
    });

})