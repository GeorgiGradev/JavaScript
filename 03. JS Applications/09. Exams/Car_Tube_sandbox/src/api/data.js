import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// get all
export async function getAllGames() {
    return await api.get(host + `/data/games?sortBy=_createdOn%20desc`);
}

// Get recent
export async function getRecentGames(){
    return await api.get(host + `/data/games?sortBy=_createdOn%20desc&distinct=category`);
}

// Create
export async function createGame(game) {
    return await api.post(host + `/data/games`, game);
}

// Get by id
export async function getGameById(gameId) {
    return await api.get(host + `/data/games/` + gameId);
}

// Edit
export async function updateGame(gameId, updatedGame) {
    return await api.put(host + `/data/games/` + gameId, updatedGame);
}

// Delete
export async function deleteGame(id) {
    return await api.del(host + `/data/games/` + id);
}

// Get my products
export async function getMyListings(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

// === BONUS ===

//Get all comments (Comments)
export async function getComments(gameId){
    return await api.get(host + `/data/comments?where=gameId%3D%22${gameId}%22`);
}

//Create comment (Comments)
export async function createComment(comment){
    return await api.post(host + `/data/comments`, comment);
}

//likePet (Likes)
export async function likePet(petId) {
    return await api.post(host + `/data/likes`, petId);
}

//getTotaolLikesCount (Likes)
export async function getTotalLikesCount(petId){
    return await api.get(host + `/data/likes?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

//did user like pet (Likes) returns 0 if not liked OR 1 if liked
export async function didUserLikePet(petId, userId){
    return await api.get(host + `/data/likes?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

// Search
export async function search(query) {
    return await api.get(host + `/data/wiki?where=title%20LIKE%20%22${query}%22`);
}

// Paging
export async function getColletionSize() {
    return await api.get(host + `/data/cars?count`);
}

// Paging
export async function getAllListingsForPaging(page = 1) {
    return await api.get(host + `/data/cars?sortBy=_createdOn%20desc&offset=${(page - 1) * 3}&pageSize=3`);
}