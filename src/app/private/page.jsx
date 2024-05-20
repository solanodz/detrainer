import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { logout } from './actions'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import PrivateNavbar from './PrivateNavbar'

export default async function PrivatePage() {
    const supabase = createClient()

    const { data: user, error } = await supabase.auth.getUser()

    if (error || !user?.user) {
        redirect('/login')
    }

    if (!user) {
        return redirect('/login')
    }

    return (
        <div className='flex'>
            <PrivateNavbar />
            <div className='p-5 flex w-full gap-5'>
                <h1 className='text-3xl tracking-tight font-bold'>Hello {user.user.email}</h1>
            </div>
        </div>
    )
}