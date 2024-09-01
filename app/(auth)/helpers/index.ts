import { instance } from "@/lib/axios/instance"

interface payloadTypes {
    username: string;
    email: string;
    phoneNo: string;
    password: string;
    metaData: any;

}
export const signUpHandler = async (payload: payloadTypes) => {

    const response = await instance.post('/auth/sign-up', payload);
    if (response) {
        return response
    }

}
export const signInHandler = async (payload: {username:string,password:string}) => {

    const response = await instance.post('/auth/sign-in', payload);
    if (response) {
        return response
    }

}