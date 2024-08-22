import CredentialProvider from "next-auth/providers/credentials";


const authOptions = {

    pages: {
        signIn: '/sign-in'
    },
    providers: [
        CredentialProvider({
            name: "Gen Q Admin",
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
            async authorize(credentials: any, user: any) {
                try {
                    // api call to get the user object from db 
                    return {}
                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.user = user
            }
            return token;
        },
        async session({ session, token }: { session: any, token: any }) {
            if (session) {
                session.user = token.user
            }
            return session;
        }
    }
}


export { authOptions }