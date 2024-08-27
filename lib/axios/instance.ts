import { BACKEND_URL } from '@/config';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const instance = axios.create({
    baseURL: BACKEND_URL,
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {

    console.log(config)
    return { ...config }
})

instance.interceptors.response.use((response: AxiosResponse) => {


    return {...response.data}
})  