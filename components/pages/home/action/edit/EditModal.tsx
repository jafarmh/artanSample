'use client'
import ModalComponent from '@/components/modal/Modal'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import {  ContentUpdatePropsApi } from '@/types/interfaces/ContentInterface';
import {  useContentEditMutation } from '@/data/services/Content';
import FormItem from '../form';
import { ContentData } from '@/types/ContentData';
 

export default function EditModal({ openModal, ChangeOpen,data }: { openModal: boolean, ChangeOpen: (value: boolean) => void,data:ContentData }) {
    const [Edit, results] = useContentEditMutation()
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
    const OnFinish: SubmitHandler<ContentUpdatePropsApi> = (data) => {
        if (data?.title !== undefined) {
            Edit(data);
        }
    }

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
            <ModalComponent showClose={false} ChangeOpen={() => { }} Open={open} title='Edit Item'>
                <form className="flex flex-col   justify-center mt-10 p-10" onSubmit={handleSubmit((values: any) => OnFinish(values))}    >
                    <FormItem control={control} errors={errors} getValues={getValues} setValue={setValue} />

                    <div className='w-full '>
                        <div className="w-full  r flex flex-row gap-6 justify-center">
                            <button className='p-4 bg-green-600 rounded' type='submit' disabled={results.isLoading} key={"buttonForm"} onClick={() => OnFinish} >
                                <b>Save</b>
                            </button>
                            <button className='p-4 bg-red-300 rounded' type='submit' disabled={results.isLoading} key={"buttonForm2"} onClick={() => {
                                CloseModal()
                            }} >
                                <b>Cancel</b>
                            </button>
                        </div>
                    </div>
                </form>
            </ModalComponent>
        </>
    )
}
