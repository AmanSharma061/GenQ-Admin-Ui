'use client'
import { instance } from "@/lib/axios/instance"
import { signUpFormSchema } from "@/lib/schemas";
import { z } from "zod";
export const signUpHandler = async (payload: z.infer<typeof signUpFormSchema>) => {

    const response = await instance.post('/auth/sign-up', payload);
    if (response) {
        return response
    }

}
export const signInHandler = async (payload: { username: string, password: string }) => {

    const response = await instance.post('/auth/sign-in', payload);
    if (response) {
        return response
    }

}