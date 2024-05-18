'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { addExercise } from '@/server-actions/addExercise'
import { Dumbbell } from 'lucide-react'
import { useRef, useState } from 'react'



const CreateExerciseForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef()

    const clearForm = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(formRef.current)
        await addExercise(formData)
        setIsLoading(false)
        clearForm()
    }



    return (
        <form ref={formRef} action={addExercise} className='gap-3 flex flex-col'>
            <div>
                <Label>Name:</Label>
                <Input type='text' id='name' name='name' />
            </div>
            <div>
                <Label>Description:</Label>
                <Textarea id='description' name='description' />
            </div>
            <div>
                <Label>Video URL</Label>
                <Input type='text' id='video_url' name='video_url' />
            </div>
            <Button onClick={handleSubmit} className='flex gap-3'><Dumbbell />Add exercise</Button>
        </form>
    )
}

export default CreateExerciseForm
