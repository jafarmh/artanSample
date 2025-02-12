import { HeaderLinkProps } from '@/types/Html'
import React from 'react'

function HeaderLink(data: HeaderLinkProps) {
    return (
        <>
            <div className={`text-lg py-2 ${data.active ? "font-bold border-b-2 border-b-blue-500" : " text-[--deActiveTxt]"}`}>
                <span  >{data.title}</span>
            </div>
        </>
    )
}

export default HeaderLink