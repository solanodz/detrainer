import { buttonVariants } from "@/components/ui/button";
import { raleway } from "@/ui/fonts";
import { createClient } from "@/utils/supabase/client";
import { Dumbbell, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className="flex h-2/3 md:flex-row flex-col  items-center gap-3 bg-zinc-950">
        <section className="w-full h-2/3 md:h-screen justify-center md:w-3/5 sm:p-0 p-4 flex flex-col items-center mx-auto text-center md:text-left max-w-xl">
          <h1 className={`${raleway.className} antialiased font-black text-5xl sm:text-7xl tracking-tighter text-left text-white drop-shadow-md`}>WELCOME TO DETRAINER</h1>
          <p className="tracking-tight text-green-400 italic font-medium text-left sm:text-md text-sm w-full">Web application to load training sessions and exercises.</p>
          <div className="flex dark gap-2 md:flex-row flex-col my-4 mr-auto">
            <Link href="/login" className={`${buttonVariants({ variant: 'secondary' })} flex gap-3`}><Dumbbell size={18} /> I am a trainer</Link>

            <Link href="/login" className={`${buttonVariants({ variant: 'default' })} flex gap-3`}> <User size={18} /> I am a client </Link>
          </div>
        </section>
        <section className="w-2/5 md:h-screen h-1/3 bg-[url('/home-bg.jpg')] object-contain object-bottom flex justify-center items-center flex-col">
          <div className="bg-black bg-opacity-50 w-full h-screen">
            <div className="h-screen items-center flex bg-gradient-to-t from-zinc-950 to-transparent">
              <Image src="/detraining-logo.png" width={2300} height={1200} quality={100} alt="Devning+" className="drop-shadow-xl invert w-screen sm:w-[340px] mx-auto items-center h-fit" />
            </div>
          </div>
        </section>
      </div>
      <div className="h-screen flex">
        <section className="w-3/5 bg-zinc-950 h-screen"></section>
        <section className="w-2/5 bg-zinc-950 h-screen"></section>
      </div>
    </main>
  );
}
