import { expect } from "chai";
import foodDelivery from "./foodDelivery.js";

describe("foodDelivery tests", function () {
    describe("getCategory tests", function () {
        it('Should return correct string with valid input', () => {
            expect(foodDelivery.getCategory('Vegan')).to.be.equal('Dishes that contain no animal products.')
            expect(foodDelivery.getCategory('Vegetarian')).to.be.equal('Dishes that contain no meat or fish.')
            expect(foodDelivery.getCategory('Gluten-Free')).to.be.equal('Dishes that contain no gluten.')
            expect(foodDelivery.getCategory('All')).to.be.equal('All available dishes.')
        });
        it('Should throw error with invalid input', () => {
            expect(() => foodDelivery.getCategory('a')).to.throw('Invalid Category!')
        });
    });
    describe('addMenuItem tests', function () {
        it('Should return correct value with valid input', () => {
            expect(foodDelivery.addMenuItem([{ name: 'a', price: 1 }, { name: 'b', price: 5 }, { name: 'c', price: 6 }], 5)).to.be.equal("There are 2 available menu items matching your criteria!")
        })
        it('Should throw error with invalid input', () => {
            expect(() => foodDelivery.addMenuItem([], 5)).to.throw('Invalid Information!')
            expect(() => foodDelivery.addMenuItem('a', 5)).to.throw('Invalid Information!')
            expect(() => foodDelivery.addMenuItem([{ name: 'a', price: 1 }], 4)).to.throw('Invalid Information!')
            expect(() => foodDelivery.addMenuItem([{ name: 'a', price: 1 }], 'a')).to.throw('Invalid Information!')
        })
    });
    describe('CalculateOrderCost tests', function () {
        it('Should return correct value with valid input', () => {
            expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], true)).to.be.equal("You spend $10.63 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], false)).to.be.equal("You spend $12.50 for shipping and addons!");
        })
        it('Should throw error with invalid input', () => {
            expect(() => foodDelivery.calculateOrderCost('a', [], true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], 'a', true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], [], 'a')).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost('a', 'b', 'c')).to.throw('Invalid Information!');
        })
    })
})