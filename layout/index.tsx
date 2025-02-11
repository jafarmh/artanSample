
import React from 'react'
import Sidebar from './sidebar'
import Header from './header'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <>
    <div className='flex flex-row min-h-screen py-2'>
        <Sidebar/>
        <div className='flex flex-col w-full'>
            <Header/>
            {children}

        </div>

    </div>


    </>
  )
}
