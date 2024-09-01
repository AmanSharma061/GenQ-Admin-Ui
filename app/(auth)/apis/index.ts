import { useMutation } from '@tanstack/react-query'
import { signInHandler, signUpHandler } from '../helpers'
import { toast } from '@/hooks/use-toast'
import { redirect, useRouter } from 'next/navigation'


export const useSignUp = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: signUpHandler,
        meta: {
            errorMsg: true,
            successMsg: true
        },
        onSuccess: (data: any) => {
            toast({
                title: data?.message,
            })
            return router.push('/sign-in')
        },
        onError: (data: any) => {

            toast({
                variant: "destructive",
                title: data?.response.data.message,

            })
        }
    })
}
export const useSignIn = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: signInHandler,
        meta: {
            errorMsg: true,
            successMsg: true
        },
        onSuccess: (data: any) => {
            toast({
                title: data?.message,
            })
            localStorage.setItem('token',data?.data?.access_token);
            return router.push('/');
        },
        onError: (data: any) => {

            toast({
                variant: "destructive",
                title: data?.response.data.message,

            })
        }
    })
}

