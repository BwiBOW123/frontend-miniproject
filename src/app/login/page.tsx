"use client"
import {  FormEvent } from 'react';
import {useSession,signIn,signOut} from "next-auth/react"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const LoginForm = () => {
  const {data:session} = useSession()
  return (
    <>
      {session?
          <>
           Sign in as law
              <button onClick={()=>signOut()}>Sign Out</button>
          </>
      :
          <>
          Not signed in <br/>
            <button onClick={()=>signIn()}>Sign in</button>
          </>
      }
      
    </>
  );
}

export default LoginForm;