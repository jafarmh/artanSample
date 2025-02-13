'use client'
import { ContentData } from '@/types/ContentData'
import React from 'react'
import EditModal from '../action/edit/EditModal'
import DeleteModal from '../action/delete/DeleteModal'

export default function Card(data: ContentData) {
    const [openModalEdit, setOpenModalEdit] = React.useState(false)
    const [openModalRemove, setOpenModalRemove] = React.useState(false)

    return (
        <>
            <div className='w-[80%] md:w-[350px] bg-[--bgColorCard] p-4 rounded-lg flex flex-col gap-10'  key={`${data.id}_card`}>
                <h1 className='text-[--textColorCardTitle] text-2xl text-center'>{data.title}</h1>
                <p className='text-[--foreground]'>{data.content}</p>
                <p className='text-[--foreground]'>{data.date}</p>
                <div className='flex flex-row gap-4'>
                    <button key={`${data.id}_card_editB`} onClick={()=>setOpenModalEdit(true)} className='bg-green-600 text-[--foreground] rounded-lg p-2'>Edit</button>
                    <button key={`${data.id}_card_deleteB`} onClick={()=>setOpenModalRemove(true)} className='bg-red-500 text-[--foreground] rounded-lg p-2'>Delete</button>

                </div>

            </div>

            <EditModal ChangeOpen={setOpenModalEdit} data={data} openModal={openModalEdit}  />
            <DeleteModal ChangeOpen={setOpenModalRemove} data={data} openModal={openModalRemove}  />
        </>
    )
}
