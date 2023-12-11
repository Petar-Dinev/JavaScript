const Game = require("../models/Game");

async function getAllGames() {
    return await Game.find({}).lean()
}

async function getOneGameById(id) {
    return await Game.findById(id).lean()
}

async function createGameOffer(gameData) {
    const game = new Game(gameData)
    await game.save()
}
async function editGame(gameId, gameData) {
    const game = await Game.findById(gameId)
    game.name = gameData.name;
    game.price = gameData.price;
    game.genre = gameData.genre;
    game.description = gameData.description;
    game.image = gameData.image;
    game.platform = gameData.platform;
    game.save()
}

async function deleteGame(gameId) {
    await Game.findByIdAndDelete(gameId)
}

async function onGameBuy(gameId, userId) {
    const game = await Game.findById(gameId);
    game.boughtBY.push(userId)
    game.save()
}

async function onSearch(name, platform) {
    const options = {};
    if(name) {
        options.name = name;
    }
    if(platform) {
        options.platform = platform
    }
    return await Game.find(options).lean()
}

module.exports = {
    getAllGames,
    getOneGameById,
    createGameOffer,
    editGame,
    deleteGame,
    onGameBuy,
    onSearch
}