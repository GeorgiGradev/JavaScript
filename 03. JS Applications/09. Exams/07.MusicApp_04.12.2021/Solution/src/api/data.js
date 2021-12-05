import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// get all
export async function getAllAlbums() {
    return await api.get(host + `/data/albums?sortBy=_createdOn%20desc&distinct=name`);
}

// Create
export async function createAlbum(album) {
    return await api.post(host + `/data/albums`, album);
}

// Get by id
export async function getAlbumById(albumId) {
    return await api.get(host + `/data/albums/` + albumId);
}

// Edit
export async function updateAlbum(albumId, updatedAlbum) {
    return await api.put(host + `/data/albums/` + albumId, updatedAlbum);
}

// Delete
export async function deleteAlbum(albumId) {
    return await api.del(host + `/data/albums/` + albumId);
}

// === BONUS ===
// Search
export async function search(query) {
    return await api.get(host + `/data/albums?where=name%20LIKE%20%22${query}%22`);
}