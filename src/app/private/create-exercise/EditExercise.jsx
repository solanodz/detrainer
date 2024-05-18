'use client'

import { useRef, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button, buttonVariants } from '@/components/ui/button'
import { Edit, Loader2, PlusCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { editExercise } from '@/server-actions/editExercise'
import { Label } from "@/components/ui/label"

const EditExercise = ({ exercise }) => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: exercise.name,
        description: exercise.description,
        video_url: exercise.video_url,
    });



    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(formRef.current);
        await editExercise(formData);
        setIsLoading(false);
    };

    return (
        <Dialog>
            <DialogTrigger className='text-zinc-500 hover:text-zinc-950 duration-200'><Edit /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Exercise</DialogTitle>
                    <DialogDescription>
                        Once you&apos;re done, clic the button down to save changes
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <form ref={formRef} className='flex flex-col w-full gap-2'>

                        <Input
                            type="hidden"
                            id='id'
                            name='id'
                            value={exercise.id}
                        />
                        <div>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Textarea
                                id='description'
                                name='description'
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Video URL</Label>
                            <Input
                                type="text"
                                id='video_url'
                                name='video_url'
                                value={formData.video_url}
                                onChange={handleChange}
                            />
                        </div>
                        <Button onClick={handleSubmit} className='flex gap-3'>
                            {isLoading ? <Loader2 className='animate-spin' /> : <PlusCircle />} Confirm Changes
                        </Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditExercise