import { get, post, put, del } from "../api/api.js";

export async function getAllMemes() {
  return await get("/data/memes?sortBy=_createdOn%20desc");
}

export async function getOneById(id) {
  return await get('/data/memes/' + id);
}

export async function createMeme(title, description, imageUrl) {
  return await post('/data/memes', {title, description, imageUrl})
}


export async function editMeme(id, title, description, imageUrl) {
  return await put('/data/memes/' + id, {title, description, imageUrl})
}

export async function deleteMeme(id) {
  return await del('/data/memes/' + id)
}

export async function getOwnMemes(id) {
  return await get(`/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)
}
