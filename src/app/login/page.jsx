import { Label } from '@/components/ui/label'
import { login, signup } from './actions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { montserrat } from '@/ui/fonts'

export default function LoginPage() {
    return (
        <div className="flex h-2/3 md:flex-row gap-3 flex-col items-center bg-zinc-950">
            <section className="w-full h-screen md:w-3/5 sm:p-0 p-4 flex flex-col items-center mx-auto text-center md:text-left max-w-xl">
                <Image
                    src={'/detrainer-blanco-horizontal.png'}
                    height={1000}
                    width={9000}
                    quality={100}
                    className='w-[200px] mr-auto my-12 h-fit mb-24' alt='detrainer horizontal white logo'
                />
                <h1 className={`${montserrat.className} antialiased text-4xl font-bold text-white my-6`}>Sign-in</h1>
                <form className='w-full dark text-white flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email">Email:</Label>
                        <Input id="email" name="email" type="email" required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="password">Password:</Label>
                        <Input id="password" name="password" type="password" required />
                    </div>
                    <div className='flex gap-3'>
                        <Button formAction={login}>Log in</Button>
                        <Button formAction={signup}>Sign up</Button>
                    </div>
                </form>
            </section>
            <section className="w-2/5 bg-[url('/home-bg.jpg')] object-contain object-bottom h-screen flex justify-center items-center flex-col">
                <div className="bg-black bg-opacity-70 w-full h-screen">
                    <div className="h-screen items-center flex">
                        <Image src="/detraining-logo.png" width={2300} height={1200} quality={100} alt="Devning+" className="drop-shadow-xl invert w-[130px] sm:w-[340px] mx-auto items-center h-fit" />
                    </div>
                </div>
            </section>
        </div>

    )
}