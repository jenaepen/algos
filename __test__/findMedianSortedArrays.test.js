const  {findMedianSortedArrays, findMedianSortedArraysLog}  = require('../challenges/median-of-two-sorted-arrays');

describe('findMedianSortedArrays test', () => {
    
    it(' findMedianSortedArrays( [1,3] , [2] ) to equal 2', () => {
        expect(findMedianSortedArrays([1,3],[2])).toBe(2);
    });

    it(' findMedianSortedArrays( [1,2] , [3,4] ) to equal 2.5', () => {
        expect(findMedianSortedArrays([1,2],[3,4])).toBe(2.5);
    });

    it(' findMedianSortedArrays( [0,0] , [0,0] ) to equal 0', () => {
        expect(findMedianSortedArrays([0,0],[0,0])).toBe(0);
    });
    it(' findMedianSortedArrays( [] , [1] ) to equal 1', () => {
        expect(findMedianSortedArrays([],[1])).toBe(1);
    });
    it(' findMedianSortedArrays( [4,5,6] , [1,2,3] ) to equal 1', () => {
        expect(findMedianSortedArrays([4,5,6],[1,2,3])).toBe(3.5);
    });
})

describe('findMedianSortedArraysLog test', () => {
    
    it(' findMedianSortedArraysLog( [1,3] , [2] ) to equal 2', () => {
        expect(findMedianSortedArraysLog([1,3],[2])).toBe(2);
    });

    it(' findMedianSortedArraysLog( [1,2] , [3,4] ) to equal 2.5', () => {
        expect(findMedianSortedArraysLog([1,2],[3,4])).toBe(2.5);
    });

    it(' findMedianSortedArraysLog( [0,0] , [0,0] ) to equal 0', () => {
        expect(findMedianSortedArraysLog([0,0],[0,0])).toBe(0);
    });

    it(' findMedianSortedArraysLog( [] , [1] ) to equal 1', () => {
        expect(findMedianSortedArraysLog([],[1])).toBe(1);
    });
    it(' findMedianSortedArraysLog( [4,5,6] , [1,2,3] ) to equal 1', () => {
        expect(findMedianSortedArraysLog([4,5,6],[1,2,3])).toBe(3.5);
    });

})