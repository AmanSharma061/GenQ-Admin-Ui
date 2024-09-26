import { toast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../axios/instance";
import { useSession } from "next-auth/react";

const generateQr = async (payload: { no_of_qrs: number, user_id: string, starting_amount: number, ending_amount: number }) => {
    const response = await instance.post('/qr/generate', payload);
    return response
}

export const useHandleQrGeneration = () => {
    return useMutation({
        mutationFn: generateQr,
        onSuccess: (data: any) => {

            toast({
                description: data?.message,
                duration: 2000
            })
        }
    }

    )
}

export const useGetQrUrls = (payload: any) => {
    return useQuery({
        queryKey: ['get-qr-urls'],
        queryFn: async () => {
            try {
                const response = await instance.post('/get-qrs', payload)
                return response;
            } catch (error) {
                console.log('error in getting qr uls', error)
            }
        },

    })
}

export const useGetCounts = () => {
    return useQuery({
        queryKey: ['all-counts'],
        queryFn: async () => {
            try {
                const response = await instance.get('/get-all-counts');
                if (response) {
                    return response;
                }
            } catch (error) {
                console.log(`Error in fetching counts`, error)
            }
        },
        meta:{
            errorMsg:true
        }

    })
}