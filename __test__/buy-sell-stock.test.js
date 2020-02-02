const  {maxProfit, maxProfit2} = require('../challenges/buy-sell-stock.js');

describe('maxProfit test', () => {
    
    it(' maxProfit([7, 1, 5, 3, 6, 4] ) to equal 7', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    it(' maxProfit([7,6,4,3,1]) to equal 0', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    });
})

describe('maxProfit2 test', () => {
    
    it(' maxProfit2([7, 1, 5, 3, 6, 4] ) to equal 7', () => {
        expect(maxProfit2([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    it(' maxProfit2([7,6,4,3,1]) to equal 0', () => {
        expect(maxProfit2([7,6,4,3,1])).toBe(0);
    });
})