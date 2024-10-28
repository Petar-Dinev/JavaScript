import chai from 'chai';
const { expect } = chai;
import streamingServiceSelector from './streamingServiceSelector.js';

describe('streamingServiceSelector tests', function () {
    describe('selectingContent tests', function () {
        it('Should throw error with invalid genre', () => {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', 'a')).to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.")
        });

        it('Should throw error with invalid type', () => {
            expect(() => streamingServiceSelector.selectingContent('a', 'HBO', 'Action')).to.throw("We currently only support 'Movie' or 'TV Show' types.")
        });

        it('Should return correct string with valid input', () => {
            expect(streamingServiceSelector.selectingContent('Movie', 'HBO', 'Action')).to.be.equal("You can watch this Action Movie on HBO. Enjoy your Action-filled experience!")
        });
    });

    describe('availablePlatforms tests', function () {
        it('Should throw error with invalid params', () => {
            expect(() => streamingServiceSelector.availablePlatforms('a', 1)).to.throw("Invalid platform selection.")
            expect(() => streamingServiceSelector.availablePlatforms('a', 'a')).to.throw("Invalid platform selection.")
            expect(() => streamingServiceSelector.availablePlatforms([], 'a')).to.throw("Invalid platform selection.")
            expect(() => streamingServiceSelector.availablePlatforms(['a'], -1)).to.throw("Invalid platform selection.")
            expect(() => streamingServiceSelector.availablePlatforms(['a', 'b', 'c'], 3)).to.throw("Invalid platform selection.")
        });
        it('Should return array with correct data in', () => {
            expect(streamingServiceSelector.availablePlatforms(['a', 'b', 'c'], 1)).to.be.equal('Other available platforms are: a, c.')
        })
    })

    describe('contentRating tests', function () {
        it('Should throw error with invalid input', () => {
            expect(() => streamingServiceSelector.contentRating(-1, 1)).to.throw('Invalid runtime or rating.')
            expect(() => streamingServiceSelector.contentRating(0, 1)).to.throw('Invalid runtime or rating.')
            expect(() => streamingServiceSelector.contentRating(1, -1)).to.throw('Invalid runtime or rating.')
            expect(() => streamingServiceSelector.contentRating(1, 11)).to.throw('Invalid runtime or rating.')
        });
        it('Should return correct string with valid input', () => {
            expect(streamingServiceSelector.contentRating(60, 1)).to.be.equal("This content has a lower rating (1/10) and runs for 1.00 hours. You might want to check reviews first.")
            expect(streamingServiceSelector.contentRating(60, 7)).to.be.equal("This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!")
            expect(streamingServiceSelector.contentRating(60, 8)).to.be.equal("This content is highly rated (8/10) and has a runtime of 1.00 hours. Enjoy your watch!")
        })
    })
})