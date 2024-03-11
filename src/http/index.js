import axios from 'axios';

export const API_URL = 'http//localhost:1488';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

//reqs


//
api.interceptors.re
api.interceptors.request.use((config)=> {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

exports.default = api;