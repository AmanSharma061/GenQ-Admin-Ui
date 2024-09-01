import { BACKEND_URL } from '@/config';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const instance = axios.create({
    baseURL: BACKEND_URL,
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {

//    const token=localStorage.getItem('token');
//    console.log(token)
//     config.headers.Authorization=`Bearer ${token}`
    return { ...config }
})

instance.interceptors.response.use((response: AxiosResponse) => {
    return response.data
})  
