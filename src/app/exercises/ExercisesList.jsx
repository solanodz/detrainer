import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { montserrat } from '@/ui/fonts';
import { Badge } from '@/components/ui/badge';

const ExercisesList = ({ initialExercises }) => {
    const [exercises, setExercises] = useState(initialExercises);
    const [searchValue, setSearchValue] = useState('');

    const filteredExercises = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        setExercises(initialExercises);
    }, [initialExercises]);

    return (
        <div className='flex flex-col max-w-xl mx-auto gap-2'>
            <div className='bg-white flex flex-col gap-3'>
                <div className='flex sm:flex-row flex-col-reverse justify-between'>
                    <div>
                        <Link href={'/'} className='sm:ml-auto ml-0'>
                            <Image src="/detraining-logo.png" alt="Logo" width={80} height={80} className='mb-3 sm:m-0' />
                        </Link>
                        <h2 className={`${montserrat.className} text-3xl font-bold`}>All exercises</h2>
                        <p className='w-10/12 text-muted-foreground text-sm leading-none'>Search for exercises and click them to get more information.</p>
                    </div>
                    <Badge className='h-fit text-md'>{exercises.length}</Badge>
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Buscar ejercicio"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            {filteredExercises.map((exercise) => (
                <Link href={`/exercises/${exercise.id}`} key={exercise.id}>
                    <div className='p-3 text-muted-foreground border border-zinc-300 rounded-lg flex justify-between'>
                        <h3 className='text-zinc-500 hover:text-zinc-950 duration-200 font-medium'>{exercise.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ExercisesList;
