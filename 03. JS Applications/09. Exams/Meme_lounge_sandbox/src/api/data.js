import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// Create
export async function createMeme(meme) {
    return await api.post(host + `/data/memes`, meme);
}

// get all
export async function getAllMemes() {
    return await api.get(host + `/data/memes?sortBy=_createdOn%20desc`);
}

// Get by id
export async function getMemeById(memeId) {
    return await api.get(host + `/data/memes/` + memeId);
}

// Edit
export async function updateGame(memeId, updatedMeme) {
    return await api.put(host + `/data/memes/` + memeId, updatedMeme);
}

// Delete
export async function deleteMeme(id) {
    return await api.del(host + `/data/memes/` + id);
}

// Get my products
export async function getMyMemes(userId) {
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}