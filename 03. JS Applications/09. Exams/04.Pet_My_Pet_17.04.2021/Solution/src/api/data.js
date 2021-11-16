import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//get all (dashboard)
export async function getAllPets() {
    return await api.get(host + `/data/pets?sortBy=_createdOn%20desc`);
}

//get by Id (details)
export async function getPetById(id) {
    return await api.get(host + `/data/pets/` + id);
}

//create (add)
export async function createPet(pet) {
    return await api.post(host + `/data/pets`, pet);
}

//edit
export async function editPet(id, pet) {
    return await api.put(host + `/data/pets/` + id, pet);
}

//delete
export async function deletePet(id) {
    return await api.del(host + `/data/pets/` + id);
}

//my pets
export async function getMyPets(userId) {
    return await api.get(host + `/data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

//likePet
export async function likePet(petId) {
    return await api.post(host + `/data/likes`, petId);
}

//getTotaolLikesCount
export async function getTotalLikesCount(petId){
    return await api.get(host + `/data/likes?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

//did user like pet (returns 0 if not liked OR 1 if liked)
export async function didUserLikePet(petId, userId){
    return await api.get(host + `/data/likes?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

