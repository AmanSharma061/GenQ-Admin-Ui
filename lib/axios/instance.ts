'use client'
import { BACKEND_URL } from '@/config';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useSession } from 'next-auth/react';

export const instance = axios.create({
    baseURL: BACKEND_URL,
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {

    const token = localStorage.getItem('token');
    const userId = JSON.parse(localStorage.getItem("data"))?.user?.user_id
    
    config.headers.Authorization = `Bearer ${token}`
    config.headers.user_id=userId

    return config 
})

instance.interceptors.response.use((response: AxiosResponse) => {
    return response.data
})  
