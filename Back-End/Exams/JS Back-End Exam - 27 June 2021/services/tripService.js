const Trip = require("../models/Trip");

async function createTrip(tripData) {
  return await Trip.create(tripData);
}

async function getAllTrips() {
  return await Trip.find({}).lean();
}

async function getOneTripById(tripId) {
  return await Trip.findById(tripId).populate('buddies').populate('creator').lean();
}
async function getOwnTrips(userId) {
    return await Trip.find({creator: userId}).populate('buddies').lean()
}
async function deleteTrip(tripId) {
    return await Trip.findByIdAndDelete(tripId)
}
async function joinTrip(userId, tripId) {
    const trip = await Trip.findById(tripId)
    trip.buddies.push(userId)
    trip.seats -= 1;
    await trip.save()
}



module.exports = {
    getAllTrips,
    getOneTripById,
    createTrip,
    getOwnTrips,
    deleteTrip,
    joinTrip
}