"use server"

import { MutableRefObject } from "react"
import { instance } from "../axios/instance";
import axios from "axios";


export const handleQrGeneration = async (no_of_qrs: number) => {
    try {
        const response = await instance.post('/generate/qr', { no_of_qrs, user_id: "66c763b88e4fb863937e46e0" });

        if (response.status==200) {

            return response
        }
    } catch (error) {
        console.log(`Error in Generating Qr`, error);
        return { err: "Error in Generaing Qr." };
    }
};


