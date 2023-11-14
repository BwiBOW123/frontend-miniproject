'use client'
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from 'react';

type CustomProviderProps = {
    children: ReactNode;
};

export const CustomProvider: React.FC<CustomProviderProps> = ({ children }) => {
    return (
        <>
            <SessionProvider>
                {children}
            </SessionProvider>
        </>
    );
};
