import React from 'react'
import PrivateNavbar from '../PrivateNavbar'
import { montserrat } from '@/ui/fonts'
import CreateWorkoutForm from './CreateWorkoutForm'

const page = () => {
    return (
        <div className='flex'>
            <PrivateNavbar />
            <div className='p-5 flex w-full gap-5'>
                <section className='flex flex-col gap-5 w-1/2 h-fit p-5 border border-zinc-300 rounded-lg'>
                    <h2 className={`${montserrat.className} antialiased text-3xl font-bold tracking-tight`}>Add a new workout here</h2>
                    <CreateWorkoutForm />
                </section>
            </div>
        </div>
    )
}

export default page
