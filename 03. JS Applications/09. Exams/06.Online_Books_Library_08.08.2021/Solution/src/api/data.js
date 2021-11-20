import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// Create
export async function createBook(book) {
    return await api.post(host + `/data/books`, book);
}

// get all
export async function getAllBooks() {
    return await api.get(host + `/data/books?sortBy=_createdOn%20desc`);
}

// Get by id
export async function getBookById(bookId) {
    return await api.get(host + `/data/books/` + bookId);
}

// Edit
export async function updateBook(bookId, updatedBook) {
    return await api.put(host + '/data/books/' + bookId, updatedBook);
}

// Delete
export async function deleteBook(id) {
    return await api.del(host + '/data/books/' + id);
}

// Get my products
export async function getMyBooks(userId) {
    return await api.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

// === BONUS ===
//likeBook 
export async function likeBook(bookId) {
    return await api.post(host + `/data/likes`, bookId);
}

//getTotaolLikesCount 
export async function getTotalLikesCount(bookId){
    return await api.get(host + `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}

//did user like book - returns 0 if not liked OR 1 if liked
export async function didUserLikeBook(bookId, userId){
    return await api.get(host + `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}