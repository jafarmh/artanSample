
import React from 'react'
import Sidebar from './sidebar'
import Header from './header'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <>
    <div className='flex flex-row h-screen py-2 overflow-y-auto'>
        <Sidebar/>
        <div className='flex flex-col w-full gap-y-10'>
            <Header/>
            {children}

        </div>

    </div>


    </>
  )
}
