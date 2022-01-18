import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// Create
export async function createPet(pet) {
    return await api.post(host + `/data/pets`, pet);
}

// get all
export async function getAllPets() {
    return await api.get(host + `/data/pets?sortBy=_createdOn%20desc`);
}

// Get by id
export async function getPetById(petId) {
    return await api.get(host + `/data/pets/` + petId);
}

// Edit
export async function updatePet(petId, updatedPet) {
    return await api.put(host + `/data/pets/` + petId, updatedPet);
}

// Delete
export async function deletePet(id) {
    return await api.del(host + `/data/pets/` + id);
}

// Get my products
export async function getMyPets(userId) {
    return await api.get(host + `/data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

// === BONUS ===
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
