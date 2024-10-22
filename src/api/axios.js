import axios from 'axios';
import conf from '../conf/conf'

const BASE_URL = conf.backendUrl;

export const api =  axios.create({
    baseURL: "http://localhost:8000/api/v1"
});

export const axiosPrivate = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});