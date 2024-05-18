import { Button, buttonVariants } from '@/components/ui/button'
import { Dumbbell, LogOut, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { logout } from './actions'
import Image from 'next/image'

const PrivateNavbar = () => {
    return (
        <div className='p-4 shadow-md flex justify-between items-center border-b border-zinc-300 '>
            <Link href='/' >
                <Image src={'/detrainer-negro-horizontal.png'} height={1000} width={9000} className='w-[200px] h-fit' alt='logo detrainer color negro' />
            </Link>
            <section className='flex gap-3 items-center'>
                <Link href={'/private/create-exercise'} className={`${buttonVariants({ variant: 'outline' })} flex gap-2`} ><Dumbbell size={18} />Create Exercise</Link>
                <Link href={'/private/create-workout'} className={`${buttonVariants({ variant: 'outline' })} flex gap-2`} ><NotebookPen size={18} />Create Training</Link>
                <form action={logout}>
                    <Button className='flex gap-2'><LogOut size={18} /> Cerrar sesión</Button>
                </form>
            </section>
        </div>
    )
}

export default PrivateNavbar
