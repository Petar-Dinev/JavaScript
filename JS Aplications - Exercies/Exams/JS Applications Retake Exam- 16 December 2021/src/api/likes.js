import { post, get } from "./api.js";

export async function makeLike(theaterId) {
  await post(`/data/likes`, { theaterId });
}

export async function getMyLikes(theaterId, userId) {
  return await get(
    `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}

export async function getTheaterLikes(theaterId) {
  return await get(
    `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`
  );
}
