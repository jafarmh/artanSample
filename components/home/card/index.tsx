import { ContentData } from '@/types/ContentData'
import React from 'react'

export default function Card(data:ContentData) {
  return (
    <div className='w-[80%] md:w-[350px] bg-[--bgColorCard] p-4 rounded-lg flex flex-col gap-10' key={data.id}>
        <h1 className='text-[--textColorCardTitle] text-2xl text-center'>{data.title}</h1>
        <p className='text-[--foreground]'>{data.content}</p>
        <p className='text-[--foreground]'>{data.date}</p>
        <div className='flex flex-row gap-4'>
            <button className='bg-green-600 text-[--foreground] rounded-lg p-2'>Edit</button>
            <button className='bg-red-500 text-[--foreground] rounded-lg p-2'>Delete</button>

        </div>

    </div>
  )
}
