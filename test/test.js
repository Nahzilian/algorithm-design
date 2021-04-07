const quickSort = require('../algorithms/sorting/quicksort').quickSort;
const assert = require('assert');


describe('QUICK SORT TESTING UNIT', () => {
    describe('Quick sort basic test', () => {
        it('Should returns a sorted array', () => {
            var a = [1,4,5,2,1,3];
            console.log("Given array ", a);
            quickSort(a);
            assert.deepStrictEqual([1,1,2,3,4,5], a);
        });

        it('Should returns a sorted array', () => {
            var a = [-1, -5 , 2, -3, -100];
            console.log("Given array ", a);
            quickSort(a);
            assert.deepStrictEqual([-100, -5, -3, -1, 2], a);
        })
    })
})

