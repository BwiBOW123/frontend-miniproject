"use client"

import {signIn,signOut} from "next-auth/react"

export const LoginBTN = () =>{
    return (
        <button  onClick={()=>signIn()} className="hover:text-red-500">เข้าสู่ระบบ/สมัครสมาชิก</button>
    )
}

export const LogoutBTN = () =>{
    return (
        <>
            <button  onClick={()=>signOut()} className="hover:text-red-500">ออกจากระบบ</button>
        </>
    )
}