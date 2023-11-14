import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Logic for user authentication
                const res = await fetch("http://127.0.0.1:8000/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                });
                const response = await res.json();

                // Return null if user data could not be retrieved
                return response.user;
            }
        })
    ],
    callbacks:{
      async session({ session}) {
        return session
      },
    },

    pages:{
      signIn: '/auth/signin',
    }
};
