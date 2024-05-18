import React from 'react'
import PrivateNavbar from '../PrivateNavbar'
import { montserrat } from '@/ui/fonts'

const page = () => {
    return (
        <div>
            <PrivateNavbar />
            <div className='p-5'>
                <h2 className={`${montserrat.className} antialiased text-3xl font-bold tracking-tight`}>Add a new workout here</h2>
            </div>
        </div>
    )
}

export default page
