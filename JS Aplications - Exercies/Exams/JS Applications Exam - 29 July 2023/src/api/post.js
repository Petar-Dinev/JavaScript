import { del, get, post, put } from "./api.js";

const paths = {
  getAll: "/data/facts?sortBy=_createdOn%20desc",
  getOneById: "/data/facts/",
  createPost: "/data/facts",
  editPost: "/data/facts/",
  deletePost:"/data/facts/"
};

export async function getAllPosts() {
  return await get(paths.getAll);
}

export async function getOnePost(id) {
  return await get(paths.getOneById + id);
}

export async function createPost(data) {
  return await post(paths.createPost, data);
}

export async function editPost(id, data) {
    return await put(paths.editPost + id, data);
}

export async function deletePost(id) {
    await del(paths.deletePost + id)
}
