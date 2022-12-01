import {get, post, put} from "./api.js"


const endPoint = {
    "allBooks": "/jsonstore/collections/books",
    "ById": "/jsonstore/collections/books/"
}

export async function getAllBooks() {
    const result = await get(endPoint.allBooks)
    return Object.values(result);
}

export async function getBookById(id) {
    const result = await get(endPoint.ById + id);
    return result;
}

export async function createBook(title, author) {
    const result = await post(endPoint.allBooks, {title, author})
    return result;
}

export async function editBook(title, author) {
    const result = await put(endPoint.ById + id, {title, author})
    return result;
}