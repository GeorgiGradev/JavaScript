import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// get all
export async function getAllCars() {
    return await api.get(host + `/data/cars?sortBy=_createdOn%20desc`);
}

// Create
export async function createCar(car) {
    return await api.post(host + `/data/cars`, car);
}

// Get by id
export async function getCarById(carId) {
    return await api.get(host + `/data/cars/` + carId);
}

// Edit
export async function updateCar(carId, updatedCar) {
    return await api.put(host + `/data/cars/` + carId, updatedCar);
}

// Delete
export async function deleteCar(carId) {
    return await api.del(host + `/data/cars/` + carId);
}

// Get my products
export async function getMyCars(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

// === BONUS ===
// Search
export async function search(query) {
    return await api.get(host + `/data/cars?where=year%3D${query}`);
}