'use client'
import Link from "next/link";
import React, { useState } from 'react'
import {useRef} from 'react'
import {signIn} from 'next-auth/react'
import Popup from "@/components/Popup";
const LoginForm: React.FC = () => {
    const username = useRef<HTMLInputElement>(null)
    const password= useRef<HTMLInputElement>(null)
  
      const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

    const handlerLogin = async () => {
      const result = await signIn('credentials', {
          redirect: false,  // Prevent default redirect
          username: username.current?.value,
          password: password.current?.value,
      });
  
      if (result?.ok) {
          // Redirect on successful login
          window.location.href = '/'; // Redirect to a specific route
      } else {
          // Handle errors or unsuccessful login
          setShowPopup(true)
      }

    }
  return (
    <>
        <div className="bg-custom-blue from-purple-400 via-pink-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Now</h1>
          <div className="mb-4">
            <label  htmlFor="username" className="block text-sm font-medium text-gray-600">Username *</label>
            <input ref={username} type="text"  name="username" placeholder="Enter your Username" className="mt-1 p-2 w-full border bg-white rounded-md text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password *</label>
            <input ref={password} type="password"  name="password" placeholder="Enter your Password" className="mt-1 p-2 w-full bg-white border rounded-md text-black" />
          </div>
          <button onClick={handlerLogin}  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">LOGIN</button>
          {showPopup &&
              <Popup
              title="login fail"
              message="Invalid credentials or other error message"
              onClose={() => setShowPopup(false)}
            />
          }
          
          
        <p className="mt-4 text-center text-sm">Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
      </div>
    </div>
    </>

  );
}

export default LoginForm;