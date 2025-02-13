'use client'
import React from 'react'
import ProgressFlat from './progress';
import AreaChart from './chart';
import Report from './report';

const DashboardComponent = () => {


    return (
        <>
            <div className='flex flex-col gap-10 px-4'>


                <Report />
                <ProgressFlat />
                <div className='w-full h-96'>
                    <AreaChart />
                </div>


            </div>
        </>
    )
}
export default DashboardComponent;
