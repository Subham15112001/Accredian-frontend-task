import axios from 'axios';
import conf from '../conf/conf'

const BASE_URL = conf.backendUrl;

export const api =  axios.create({
    baseURL: "https://accredian-backend-task-production-4ace.up.railway.app/api/v1"
});

export const axiosPrivate = axios.create({
    baseURL: "https://accredian-backend-task-production-4ace.up.railway.app/api/v1",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});