
import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios/instance';

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ['all-users'],
        queryFn: async () => {
            try {

                const response = await instance.get('/users');
                if (response) {
                    return response
                }

            } catch (error) {
                console.log(`Error in Fetching users.`, error)
            }
        },
        meta:{
            errorMsg:true
        }
        
        
    })
}