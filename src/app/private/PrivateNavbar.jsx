import { Button, buttonVariants } from '@/components/ui/button'
import { Dumbbell, LayoutDashboard, LogOut, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { logout } from './actions'
import Image from 'next/image'

const PrivateNavbar = () => {
    return (
        <div className='p-4 shadow-md border-r border-zinc-300 flex flex-col w-72 h-screen justify-between items-center'>
            <div className='mx-auto w-full flex flex-col justify-center gap-3'>
                <Link href='/' className='mx-auto'>
                    <Image src={'/detrainer-negro-horizontal.png'} height={1000} width={9000} className='w-[200px] h-fit' alt='logo detrainer color negro' />
                </Link>
                <div className='my-12 flex flex-col gap-4'>
                    <Link href={'/private'} className='text-left w-full flex gap-2 mx-auto text-muted-foreground hover:text-zinc-950 duration-200 font-medium' ><LayoutDashboard size={18} />Dashboard</Link>
                    <Link href={'/private/create-exercise'} className='text-left w-full flex gap-2 mx-auto text-muted-foreground hover:text-zinc-950 duration-200 font-medium' ><Dumbbell size={18} />Create Exercise</Link>
                    <Link href={'/private/create-workout'} className='text-left w-full flex gap-2 mx-auto text-muted-foreground hover:text-zinc-950 duration-200 font-medium' ><NotebookPen size={18} />Create Training</Link>
                </div>
            </div>
            <section className='flex flex-col gap-3 items-center'>
                <form action={logout}>
                    <Button className='flex gap-2'><LogOut size={18} /> Cerrar sesión</Button>
                </form>
            </section>
        </div>
    )
}

export default PrivateNavbar
