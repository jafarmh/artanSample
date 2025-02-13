import HeaderLink from '@/components/html/HeaderLink'
import React from 'react'

export default function Links() {
    let data = [
        {
            title: "Menu1",
            active: false,
        },
        {
            title: "Menu2",
            active: false,
        },
        {
            title: "Menu3",
            active: true,
        },
        {
            title: "Menu4",
            active: false,
        },
    ]

    return (
        <>
            <div className='py-4 px-1 md:p-0 flex flex-row md:gap-x-20 fixed bottom-0 left-0 w-full justify-between md:static md:w-auto bg-[#0e1229] md:bg-transparent'>
                {data.map((item) => 
                    <HeaderLink key={item.title+"_header"} {...item} />
           
                )}
            </div>
        </>
    )
}
