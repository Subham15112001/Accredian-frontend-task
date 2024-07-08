import axios from 'axios';
import conf from '../conf/conf'

const BASE_URL = conf.backendUrl;

export const api =  axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});