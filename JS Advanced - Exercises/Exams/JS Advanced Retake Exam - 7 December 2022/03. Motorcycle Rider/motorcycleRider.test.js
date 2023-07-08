const { expect } = require("chai");
const motorcycleRider = require("./motorcycleRider.js");


describe('motorcycleRider', function() {
    describe('licenseRestriction', function() {
       it('should throw error with incorrect argument', () => {
        expect(() => motorcycleRider.licenseRestriction('a')).to.throw('Invalid Information!')
       })
       it('should return correct string with corect argument', () => {
        expect(motorcycleRider.licenseRestriction('AM')).to.be.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        expect(motorcycleRider.licenseRestriction('A1')).to.be.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        expect(motorcycleRider.licenseRestriction('A2')).to.be.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        expect(motorcycleRider.licenseRestriction('A')).to.be.equal("No motorcycle restrictions, and the minimum age is 24.")
       })
    })

    describe('motorcycleShowroom', function() {
        it('should return correct string with correct arguments', () => {
            expect(motorcycleRider.motorcycleShowroom([50, 100, 110], 100)).to.be.equal("There are 2 available motorcycles matching your criteria!")
            expect(motorcycleRider.motorcycleShowroom([101, 102, 103], 100)).to.be.equal("There are 0 available motorcycles matching your criteria!")
            expect(motorcycleRider.motorcycleShowroom([50, 101, 110], 100)).to.be.equal("There are 1 available motorcycles matching your criteria!")
        })
        it('should throw error with incorrect arguments', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 50)).to.throw('Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom([50, 60, 70], 49)).to.throw('Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom('abc', 50)).to.throw('Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom([50, 60, 70], 'a')).to.throw('Invalid Information!')
        })
    })

    describe('otherSpendings', function() {
        it('should throw error with incorrect arguments', () => {
            expect(() => motorcycleRider.otherSpendings('a', 'b', 'c')).to.throw('Invalid Information!')
        })
        it('should return correct string wiht correct arguments', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.be.equal("You spend $540.00 for equipment and consumables with 10% discount!")
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.be.equal("You spend $600.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], false)).to.be.equal("You spend $570.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter'], false)).to.be.equal("You spend $530.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.be.equal("You spend $270.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], false)).to.be.equal("You spend $370.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.be.equal("You spend $230.00 for equipment and consumables!")
            expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], false)).to.be.equal("You spend $330.00 for equipment and consumables!")
        })
    })
})




