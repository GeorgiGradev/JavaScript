import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// get all
export async function getAllIdeas() {
    return await api.get(host + `/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`);
}

// Create
export async function createIdea(idea) {
    return await api.post(host + `/data/ideas`, idea);
}

// Get by id
export async function getIdeaById(ideaId) {
    return await api.get(host + `/data/ideas/` + ideaId);
}

// Delete
export async function deleteIdea(id) {
    return await api.del(host + '/data/ideas/' + id);
}
