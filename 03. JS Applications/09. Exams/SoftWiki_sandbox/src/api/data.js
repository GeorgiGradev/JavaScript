import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// get all
export async function getAllArticles() {
    return await api.get(host + `/data/wiki?sortBy=_createdOn%20desc`);
}

// Get recent
export async function getRecentArticles(){
    return await api.get(host + `/data/wiki?sortBy=_createdOn%20desc&distinct=category`);
}

// Create
export async function createArticle(article) {
    return await api.post(host + `/data/wiki`, article);
}

// Get by id
export async function getArticleById(articleId) {
    return await api.get(host + `/data/wiki/` + articleId);
}

// Edit
export async function updateArticle(articleId, updatedArticle) {
    return await api.put(host + `/data/wiki/` + articleId, updatedArticle);
}

// Delete
export async function deleteArticle(articleId) {
    return await api.del(host + `/data/wiki/` + articleId);
}

// === BONUS ===
// Search
export async function search(query) {
    return await api.get(host + `/data/wiki?where=title%20LIKE%20%22${query}%22`);
}