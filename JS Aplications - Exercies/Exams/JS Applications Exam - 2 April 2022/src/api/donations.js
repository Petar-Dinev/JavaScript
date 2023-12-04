import { get, post } from "./api.js";

export function getOwnDonate(petId, userId) {
  return get(
    `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}

export function getAllDonations(petId) {
  return get(
    `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`
  );
}

export function makeDonate(petId) {
  return post("/data/donation", { petId });
}
