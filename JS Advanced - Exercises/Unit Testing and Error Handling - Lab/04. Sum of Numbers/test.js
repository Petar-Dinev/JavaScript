const { sum } = require('./sum.js');
const { expect } = require("chai");


describe('sum tests', () => {
    it('at param not arr return NaN', () => {
        expect(sum('a')).to.be.NaN;
    });
    it('at param arr with strings return Nan', () => {
        expect(sum(['a', 'b', 'c'])).to.be.NaN;
    })
    it('at corect param return corect value', () => {
        expect(sum([1,2,3])).to.be.equal(6);
    });
})