'use client'
import Image from 'next/image'
import React from 'react'
import homeI from '@/assets/image/home-svgrepo-com.svg';
import dashboardI from '@/assets/image/dashboard-svgrepo-com.svg';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/data/store';

export default function Sidebar() {

  const open = useSelector((state: RootState) => state.Sidebar.open);

  return (
    <>
      {open&&<div className='transition-all delay-150 duration-300 ease-in-out fixed right-0 z-[100] md:sticky top-0 h-screen px-4 min-w-[250px] md:min-w-[300px] bg-[#0e1229]  md:bg-inherit'>
        <div className='flex flex-col gap-y-6 justify-center  w-[80%] mx-auto py-10'>
          <div className='text-2xl font-bold bg-red-500 w-10 h-10 rounded-full flex flex-row justify-center items-center'>L</div>
          <div className=' my-6 text-xl font-bold text-slate-400 '>Lorem</div>
          <Link href={"/"} className='flex flex-row gap-x-4 items-end border-b-2 border-[--borderSideBarMenu] pb-4'>
            <div className='min-w-10'><Image src={homeI.src} alt='home' width={30} height={30} /></div>
            <div>Home</div>
          </Link>

          <Link href={"/dashboard"} className='flex flex-row gap-x-4 items-end border-b-2 border-[--borderSideBarMenu] pb-4'>
            <div className='min-w-10'><Image src={dashboardI.src} alt='home' width={30} height={30} /></div>
            <div>Dashboard</div>
          </Link>
        </div>
      </div>}
    </>
  )
}
