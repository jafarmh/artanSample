import React from 'react'
import Box from './box'
 

export default function Report() {
  return (
    <div className='flex flex-col md:flex-row gap-4  justify-between w-full    bg-[#151930] rounded-md p-4' style={{boxShadow:"-1px 2px 7px 0px #d6d3d321;"}}>
        
      
        <Box percent='33%' title='کل پست ها' value='50' />
        <div className='w-[1px] h-full bg-[#262a42]'></div>
        <Box percent='33%' title='پست های افزوده شده' value='20'/>
        <div className='w-[1px] h-full bg-[#262a42]'></div>
        <Box percent='33%' title='پست های حذف شده' value='30'/>
     
    </div>
  )
}
