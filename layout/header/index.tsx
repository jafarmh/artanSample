import React from 'react'
import Links from './links'
import Buttons from './buttons'

export default function Header() {
  return (
    <div className='flex flex-row gap-x-10 px-4 py-10 items-center'>
      <Links />
      <div className='flex-grow flex justify-end'>
        <Buttons />
      </div>
    </div>
  )
}
