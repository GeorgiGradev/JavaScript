import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests

// get all
export async function getAllListings() {
    return await api.get(host + `/data/cars?sortBy=_createdOn%20desc`);
}

// Get by id
export async function getListingById(id) {
    return await api.get(host + `/data/cars/` + id);
}

// Create
export async function createListing(listing) {
    return await api.post(host + `/data/cars`, listing);
}

// Edit
export async function updateListing(id, listing) {
    return await api.put(host + '/data/cars/' + id, listing);
}

// Delete
export async function deleteListing(id) {
    return await api.del(host + '/data/cars/' + id);
}

// Get my products
export async function getMyListings(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

// Search
export async function search(query) {
    return await api.get(host + `/data/cars?where=year%3D${query}`);
}