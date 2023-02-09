//Alexander Nastase, unit test for the sum function.
const sum = require('../public/javascripts/sum.js');
    test('adds 1+2 to equal 3', ()=> {
        expect(sum(1,2)).toBe(3);
});