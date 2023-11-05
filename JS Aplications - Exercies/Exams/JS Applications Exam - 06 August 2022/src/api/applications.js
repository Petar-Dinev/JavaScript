import { post, get } from "./api.js";

export async function makeApplication(offerId) {
  return await post("/data/applications", { offerId });
}

export async function getAllApplicationsOnOffer(offerId) {
  return await get(
    `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`
  );
}

export async function getMyApplications(offerId, userId) {
  return await get(
    `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
