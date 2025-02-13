'use client'
import ModalComponent from '@/components/modal/Modal'
import React, { useEffect } from 'react'
import {  useForm } from 'react-hook-form';
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import {  useContentRemoveMutation } from '@/data/services/Content';
import FormItem from '../form';
import { ContentData } from '@/types/ContentData';
 

export default function DeleteModal({ openModal, ChangeOpen,data }: { openModal: boolean, ChangeOpen: (value: boolean) => void,data:ContentData }) {
    const [Remove, results] = useContentRemoveMutation()
    const [open, setOpen] = React.useState(false)
    const CloseModal = () => {
        setOpen(false);
        ChangeOpen(false);
    }

    const Schema = Yup.object().shape({
        title: Yup.string().required(("Validation.require")),
    });

    const { handleSubmit, control, formState: { errors }, getValues, setValue, reset } = useForm<any>({
        resolver: yupResolver(Schema)
    });
   

    useEffect(() => {
        
        if(openModal){

            reset({
                id: data.id,
                title: data.title,
                content:data.content
            });
        }
        setOpen(openModal)
    }, [openModal])

    useEffect(() => {
        if (results.isSuccess) {
            CloseModal()
        }

        if (results.isError) {
            console.log((results.error as any).message)
        }
    }, [results])

    return (
        <>
            <ModalComponent classCss='!w-[70%] !h-[50%]' showClose={false} ChangeOpen={() => { }} Open={open} title='Remove Item'>

                    <div className='w-full '>
                        <p className='text-red-400 font-bold text-2xl  m-2'>?Are you sure you want to delete {data.title}

                        </p>
                        <div className="w-full flex-wrap flex flex-row gap-6 justify-center ">
                            <button className='p-4 bg-red-600 rounded' type='submit' disabled={results.isLoading} key={"buttonForm"} onClick={() => Remove({id:data.id})} >
                                <b>Remove</b>
                            </button>
                            <button className='p-4 bg-red-300 rounded' type='submit' disabled={results.isLoading} key={"buttonForm2"} onClick={() => {
                                CloseModal()
                            }} >
                                <b>Cancel</b>
                            </button>
                        </div>
                    </div>
             
            </ModalComponent>
        </>
    )
}
