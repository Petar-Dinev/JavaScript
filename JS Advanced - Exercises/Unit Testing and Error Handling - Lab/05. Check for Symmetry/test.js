const { isSymmetric } = require("./isSymmetric");
const { expect } = require("chai");

describe('isSymmetric test', () => {
    it('with string param return false', () => {
        expect(isSymmetric('a')).to.be.equal(false);
    });
    it('with num param return false', () => {
        expect(isSymmetric(1)).to.be.equal(false);
    });
    it('with obj param return false', () => {
        expect(isSymmetric({})).to.be.false;
    });
    it('with param correct symmetric array return true', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
    });
    it('with param correct symmetric array return true', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.equal(true);
    });
    it('with param not symmetric array return false', () => {
        expect(isSymmetric([1, 2, 3])).to.be.equal(false);
    });  

    it('return true with arr with mixed elements in arr', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.equal(false);
    }); 
})
