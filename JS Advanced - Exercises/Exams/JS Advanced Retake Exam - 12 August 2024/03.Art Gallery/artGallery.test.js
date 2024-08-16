import { expect } from 'chai';
import { artGallery } from './artGallery.js';

describe("artGarllery Tests", function () {
    describe("addArtwork tests", function () {
        it("Should throw error with invalid input", () => {
            expect(() => artGallery.addArtwork(1, '10 x 10', 'Monet')).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork('a', '10 x 10', 1)).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork('a', 'b', 'Monet')).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork('a', 1, 'Monet')).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork('a', '10 x 10', 'b')).to.throw("This artist is not allowed in the gallery!")
        });

        it('Should return correct string with valid input', () => {
            expect(artGallery.addArtwork('a', '10 x 10', 'Monet')).to.be.equal("Artwork added successfully: 'a' by Monet with dimensions 10 x 10.")
        });
    });

    describe('calculateCosts tests', function () {
        it('Should throw error with invalid input', () => {
            expect(() => artGallery.calculateCosts('a', 1, true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(1, 'a', true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(1, 2, 3)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(-1, 1, true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(1, -1, true)).to.throw("Invalid Information!");
        });

        it('Should return correct string with valid input', () => {
            expect(artGallery.calculateCosts(1, 1, true)).to.be.equal("Exhibition and insurance costs are 1.8$, reduced by 10% with the help of a donation from your sponsor.")
            expect(artGallery.calculateCosts(1, 1, false)).to.be.equal("Exhibition and insurance costs are 2$.")
        });
    });

    describe('organizeExhibits tests', function () {
        it('Should throw error with invalid input', () => {
            expect(() => artGallery.organizeExhibits('a', 1)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(-1, 1)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(1, -1)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(1, 'a')).to.throw("Invalid Information!")
        });

        it('Should return correct string with valid input', () => {
            expect(artGallery.organizeExhibits(10, 3)).to.be.equal("There are only 3 artworks in each display space, you can add more artworks.");
            expect(artGallery.organizeExhibits(10, 2)).to.be.equal("You have 2 display spaces with 5 artworks in each space.");
        });
    });
})
