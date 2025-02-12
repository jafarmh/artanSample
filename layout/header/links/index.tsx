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
            <div className='flex flex-row gap-x-20'>
                {data.map((item) => <React.Fragment key={item.title+"_header"}>
                    <HeaderLink {...item} />
                </React.Fragment>
                )}
            </div>
        </>
    )
}
