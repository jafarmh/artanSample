'use client'
import React from 'react'
import { Flat } from '@alptugidin/react-circular-progress-bar'

function ProgressFlat() {
    return (
        <div className="flex flex-row gap-x-10 md:w-[80%] m-auto">
            <div className='w-[150px]'>
                <Flat
                    progress={28}
                    text={'اضافه شده'}
                    sx={{
                        strokeColor: '#9c5add',
                        bgStrokeColor: '#7540c4',
                        barWidth: 11,
                        bgColor: { value: '#0e1229', transparency: '20' },
                        shape: 'half',
                        strokeLinecap: 'square',
                        textColor: '#fff',
                        valueColor: "#fff",
                        valueSize: 12,
                        textSize: 12,
                        miniCircleSize: 0
                    }}
                />
            </div>
            <div className='w-[150px]'>
                <Flat
                    progress={51}
                    text={'حذف شده'}
                    sx={{
                        strokeColor: '#f41f1f',
                        bgStrokeColor: '#b02727',
                        barWidth: 11,
                        bgColor: { value: '#0e1229', transparency: '20' },
                        shape: 'half',
                        strokeLinecap: 'square',
                        textColor: '#fff',
                        valueColor: "#fff",
                        valueSize: 12,
                        textSize: 12,
                        miniCircleSize: 0
                    }}
                />
            </div>
        </div>
    )
}

export default ProgressFlat