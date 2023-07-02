const { expect } = require("chai");
const chooseYourCar = require("./chooseYourCar");


describe('chooseYourCar', function() {
  
    describe('choosingType', function() {
       it('should throw error with year less then 1900', () => {
        expect(() => chooseYourCar.choosingType('a', 'b', 1899)).to.throw("Invalid Year!")
       })
       it('should throw error with year bigger then 2022', () => {
        expect(() => chooseYourCar.choosingType('a', 'b', 2023)).to.throw("Invalid Year!")
       })
       it('should throw error with uncorrect type', () => {
        expect(() => chooseYourCar.choosingType('notSedan', 'b', 2020)).to.throw("This type of car is not what you are looking for.")
       })
       it('should pick a car with correct arguments', () => {
        expect(chooseYourCar.choosingType('Sedan', 'red', 2011)).to.be.equal(`This red Sedan meets the requirements, that you have.`)
       })
       it('should pick a car with correct arguments', () => {
        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.be.equal(`This red Sedan meets the requirements, that you have.`)
       })
       it('should return correct string with year less 2010', ()=> {
        expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.be.equal("This Sedan is too old for you, especially with that red color.")
       })
    })
    
    describe('brandName', function() {
        it('should throw error with invalid first argument', () => {
           expect(() => chooseYourCar.brandName('a', 0)).to.throw("Invalid Information!")
        })
        it('should throw error with invalid second argument', () => {
            expect(() => chooseYourCar.brandName(['a'],'b')).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(['a'], -1)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(['a'], 1)).to.throw("Invalid Information!")
        })
        it('should return correct result with valid params', () => {
            expect(chooseYourCar.brandName(['a', 'b', 'c'], 1)).to.be.equal('a, c')
        }) 
    })

    describe('carFuelConsumption', function() {
        it('should throw error with invalid params', () => {
          expect(()=> chooseYourCar.carFuelConsumption('a', 1)).to.throw("Invalid Information!")
          expect(()=> chooseYourCar.carFuelConsumption('a', 'b')).to.throw("Invalid Information!")
          expect(()=> chooseYourCar.carFuelConsumption(1, '1')).to.throw("Invalid Information!")
          expect(()=> chooseYourCar.carFuelConsumption(0, '1')).to.throw("Invalid Information!")
          expect(()=> chooseYourCar.carFuelConsumption(1, 0)).to.throw("Invalid Information!")
          expect(()=> chooseYourCar.carFuelConsumption(-1, -1)).to.throw("Invalid Information!")
        })
        it('should return correct result with valid params', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.be.equal("The car is efficient enough, it burns 6.00 liters/100 km.")
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.be.equal("The car burns too much fuel - 8.00 liters!")

        })
    })
})