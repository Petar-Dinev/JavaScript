const Auction = require("../models/Auction");


async function getAllAuctions() {
    return await Auction.find({}).lean()
}

async function getOneById(id) {
    return await Auction.findById(id).populate('author').populate('bidder').lean()
}

async function createAuction(auctionData) {
    return await Auction.create(auctionData)
}

async function editAuction(id, auctionData) {
    const auction = await Auction.findById(id)

    auction.title = auctionData.title;
    auction.category = auctionData.category;
    auction.imageUrl = auctionData.imageUrl;
    auction.price = auctionData.price;
    auction.description = auctionData.description;

    await auction.save() 
}

async function deleteAuction(id) {
    await Auction.findByIdAndDelete(id)
}

async function makeBid(auctionId, userId, bid) {
    const auction = await Auction.findById(auctionId)
    auction.price = bid;
    auction.bidder = userId;
    await auction.save()
}

// async function getOwnClosedAuctions() {
//     return 
// }

module.exports = {
    getAllAuctions,
    getOneById,
    createAuction,
    editAuction,
    deleteAuction,
    makeBid
}