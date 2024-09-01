import { instance } from "@/lib/axios/instance";
import CredentialProvider from "next-auth/providers/credentials";


const authOptions = {

    pages: {
        signIn: '/sign-in'
    },
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter Your Email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize(credentials: any, req: any) {
                try {
                    const user = JSON.parse(JSON.stringify(credentials.user))

                    return user;
                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {

                token.user = user;
            }
            return token
        },
        async session({ session, token }: { session: any, token: any }) {


            if (session) {
                session.user = JSON.parse(token.user)
            }
            return session;
        }
    }
}


export { authOptions }