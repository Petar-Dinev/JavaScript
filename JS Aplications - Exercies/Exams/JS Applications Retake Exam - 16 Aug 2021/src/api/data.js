import { del, get, post, put } from "./api.js";

const paths = {
  getLastThreeGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
  getAll: "/data/games?sortBy=_createdOn%20desc",
  createOne: "/data/games",
  getOne: "/data/games/",
  updateOne: "/data/games/",
  deleteOne: "/data/games/",
};

export async function getMyPosts(userId) {
  return await get(
    `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function getHomeGames() {
    return await get(paths.getLastThreeGames)
}

export async function getAll() {
  return await get(paths.getAll);
}

export async function getOneById(gameId) {
  return await get(paths.getOne + gameId);
}

export async function createGame(gameData) {
  return await post(paths.createOne, gameData);
}

export async function updateGame(gameId, gameData) {
  return await put(paths.updateOne + gameId, gameData);
}

export function deleteGame(gameId) {
  del(paths.deleteOne + gameId);
}
