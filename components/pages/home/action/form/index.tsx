'use client'
import { FormComponentProps } from '@/types/Html'
import React from 'react'
import { Controller } from 'react-hook-form'

function FormItem({ control, getValues, setValue, errors }: FormComponentProps) {
    return (
        <div className='flex flex-col gap-4'>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <div className={`w-full flex flex-col gap-2`}>
                        <label htmlFor="" >title</label>
                        <input
                            type="text"
                            value={value}
                      
                            autoComplete='off'
                            onChange={onChange}
                            className="p-4 rounded  text-blue-600" placeholder={'title'} />

                    </div>
                )}

                name='title' />
            <div>
                <p className='text-red-400 font-bold text-sm m-2'>{errors['title']?.message}</p>
            </div>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <div className={`w-full flex flex-col gap-2`}>
                        <label htmlFor="" >content</label>
                        <textarea
                        
                            value={value}

                            autoComplete='off'
                            onChange={onChange}
                            className="p-4 rounded text-blue-600" placeholder={'content'} />

                    </div>
                )}

                name='content' />
            <div>
                <p className='text-red-400 font-bold text-sm m-2'>{errors['content']?.message}</p>
            </div>
        </div>
    )
}

export default FormItem