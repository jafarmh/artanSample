'use client'
import Image from 'next/image'
import React from 'react'
import menuI from '@/assets/image/menu-fries-svgrepo-com.svg';
import notificationI from '@/assets/image/notification-svgrepo-com.svg';
import searchI from '@/assets/image/search-svgrepo-com.svg';
import avatarI from '@/assets/image/avatar-female-girl-svgrepo-com.svg';
import { useDispatch } from 'react-redux';
import { changeOpenMenu } from '@/data/slice/sidebar/Sidebar';

export default function Buttons() {
    const dispatch = useDispatch();

    const size = 40;
    return (
        <div className='flex flex-row gap-x-10'>
            <div>
                <Image src={searchI.src} alt='searchI' width={size} height={size} />
            </div>
            <div>
            <Image src={notificationI.src} alt='notificationI' width={size} height={size} />

            </div>
            <div>
                <Image src={avatarI.src} alt='notificationI' width={size} height={size} />
            </div>
            <div className='cursor-pointer' onClick={() => dispatch( changeOpenMenu() )}>
                <Image src={menuI.src} alt='menuI' width={size} height={size} />
            </div>

        </div>
    )
}
