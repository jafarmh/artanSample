import Image from 'next/image'
import React from 'react'
import postI from '@/assets/image/post-sign-message-svgrepo-com.svg';
import { DashboardInfoCard } from '@/types/Html';

function Box(data: DashboardInfoCard) {
    return (
        <>
            <div className='flex flex-row items-start gap-x-8 w-full  '>
                <div className='flex flex-row gap-x-2'>
                    <Image src={postI.src} width={80} height={80} alt='' />
                    <div className='flex flex-col gap-y-4 justify-center'>
                        <p>{data.title}</p>
                        <p className='text-[--deActiveTxt]'>{data.value}</p>

                    </div>
                </div>
                <div className='flex-grow flex justify-end'>
                    <div className='bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-2 rounded-full w-14 h-6 mt-3 text-end'>
                        <b>{data.percent}</b>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box