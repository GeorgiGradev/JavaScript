import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application specific requests
// get all
export async function getAllMovies() {
    return await api.get(host + `/data/movies`);
}

// Create
export async function createMovie(movie) {
    return await api.post(host + `/data/movies`, movie);
}

// Edit
export async function updateMovie(movieId, updatedMovie) {
    return await api.put(host + '/data/movies/' + movieId, updatedMovie);
}

// Delete
export async function deleteMovie(id) {
    return await api.del(host + '/data/movies/' + id);
}

// Get by id
export async function getMovieById(movieId) {
    return await api.get(host + `/data/movies/` + movieId);
}

//likeMovie
export async function likeMovie(movieId) {
    return await api.post(host + `/data/likes`, movieId);
}

//getTotaolLikesCount (Likes)
export async function getTotalLikesCount(movieId){
    return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
}

//did user like movie (Likes) returns 0 if not liked OR 1 if liked
export async function didUserLikeMovie (movieId, userId){
    return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
}