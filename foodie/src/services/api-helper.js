import axios from "axios"

const api = axios.create({
    baseURL: "https://stan-foodie.herokuapp.com/"
})

export const getAllRes = async () => {
    const resp = await api.get("/restaurants");
    return resp.data
}

export const getResById = async (id) => {
    const resp = await api.get(`/restaurants/${id}`);
    return resp.data
}

export const createRes = async (body) => {
    const resp = await api.post('/restaurants', body);
    return resp.data
}

export const deleteRes = async (id) => {
    const resp = await api.delete(`/restaurants/${id}`);
    return resp.data
}

export const updateRes = async (id, body) => {
    const resp = await api.put(`/restaurants/${id}`, body);
    return resp.data
}

export const createImage = async (resId, body) => {
    const resp = await api.post(`/images/${resId}`, body);
    return resp.data
}

export const createReview = async (resId, body) => {
    const resp = await api.post(`/reviews/${resId}`, body)
    return resp.data
}