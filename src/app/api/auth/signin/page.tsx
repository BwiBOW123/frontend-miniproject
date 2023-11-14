'use client'
import Link from "next/link";
import React, { useState } from 'react'
import {useRef} from 'react'
import {signIn} from 'next-auth/react'

const LoginForm: React.FC = () => {
    const username = useRef<HTMLInputElement>(null)
    const password= useRef<HTMLInputElement>(null)
  
    const handlerLogin = ()=>{
        signIn('credentials',{
            username:username.current?.value,
            password: password.current?.value,
            redirect:true,
            callbackUrl:'/'
        })

    }
  return (
    <>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Now</h1>
          <div className="mb-4">
            <label  htmlFor="username" className="block text-sm font-medium text-gray-600">Username *</label>
            <input ref={username} type="text"  name="username" placeholder="Enter your Username" className="mt-1 p-2 w-full border rounded-md text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password *</label>
            <input ref={password} type="password"  name="password" placeholder="Enter your Password" className="mt-1 p-2 w-full border rounded-md text-black" />
          </div>
          <button onClick={handlerLogin}  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">LOGIN</button>
        <p className="mt-4 text-center text-sm">Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
      </div>
    </div>
    </>

  );
}

export default LoginForm;