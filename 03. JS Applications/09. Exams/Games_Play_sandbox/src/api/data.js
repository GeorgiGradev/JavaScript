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
export async function getRecentGames() {
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

// === BONUS ===

//Get all comments (Comments)
export async function getComments(gameId) {
    return await api.get(host + `/data/comments?where=gameId%3D%22${gameId}%22`);
}

//Create comment (Comments)
export async function createComment(comment) {
    return await api.post(host + `/data/comments`, comment);
}