'use client'
 
import React  from 'react'
import { Provider } from 'react-redux'
import { store } from '@/data/store'
 

interface PProvider {
    children: React.ReactNode
}


export function Providers({ children }: PProvider) {

    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>

    );
}
