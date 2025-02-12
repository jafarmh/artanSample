'use client'
import { useContentQuery } from '@/data/services/Content'
import React from 'react'
import Card from './card';
import AddModal from './action/add/AddModal';

function HomeComponent() {
  const { data } = useContentQuery();
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <>
      <div className='flex flex-col gap-y-10'>
        <div>
          <button className='bg-green-600 text-[--foreground] rounded-lg px-4 py-2' onClick={()=>setOpenModal(true)}>Add Item</button>
        </div>
        <div className='flex flex-row flex-wrap gap-10'>
          {data?.map((item) => <Card {...item} />)}
        </div>
      </div>
      <AddModal openModal={openModal} ChangeOpen={setOpenModal}/>
    </>
  )
}

export default HomeComponent