import React from 'react'
import PrivateNavbar from '../PrivateNavbar'
import { montserrat } from '@/ui/fonts'
import CreateExerciseForm from './CreateExerciseForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Edit, Trash } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import deleteExercise from '@/server-actions/deleteExercise'
import EditExercise from './EditExercise'
import Link from 'next/link'

const page = async () => {

    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    const { data: exercises, error } = await supabase
        .from('exercises')
        .select('*')
    console.log(exercises);

    if (error) {
        console.error('Error fetching exercises')
    }

    return (
        <div className='flex'>
            <PrivateNavbar />
            <div className='p-5 flex w-full gap-5'>
                <section className='flex flex-col gap-5 w-1/2 h-fit p-5 border border-zinc-300 rounded-lg'>
                    <h2 className={`${montserrat.className} antialiased text-3xl font-bold tracking-tight`}>Add a new exercise here</h2>
                    <CreateExerciseForm />
                </section>
                <section className='flex flex-col w-1/2 p-5 border border-zinc-300 rounded-lg'>
                    <h2 className={`${montserrat.className} antialiased text-3xl font-bold tracking-tight`}>Exercises added so far</h2>
                    <span className=' text-xs text-muted-foreground'>Click the exercise to see details</span>
                    <div className='flex flex-col my-5 gap-2'>
                        {exercises && exercises.map((exercise) => (
                            <div key={exercise.id} className='p-3 text-muted-foreground border border-zinc-300 rounded-lg flex justify-between'>
                                <Link href={`/exercises/${exercise.id}`}>
                                    <h3 className='text-zinc-500 hover:text-zinc-950 duration-200 font-medium'>{exercise.name}</h3>
                                </Link>
                                <div className='flex gap-2'>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Trash className='hover:text-red-500 duration-200' />
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Esta acción no se puede deshacer. Esto eliminara el ejercicio y toda su información de nuestro servidor.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <>
                                                    <form action={deleteExercise}>
                                                        <input type='hidden' name='id' value={exercise.id} />
                                                        <AlertDialogAction type='submit' size='sm' className='text-sm'>Eliminar</AlertDialogAction>
                                                    </form>
                                                </>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                    <EditExercise className='hover:text-zinc-950 duration-200' exercise={exercise} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default page
