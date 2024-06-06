"use client"
import Link from "next/link";
import Image from "next/image";
import { Link2 as LinkIcon, Github } from "lucide-react";
import UFHomeImg from "@/public/urbanfits-home.webp";

export default function Page() {
    return <>
        <section className="w-full h-[16rem] flex p-6 gap-x-4 bg-slate-100 dark:bg-transparent border border-gray-400 dark:border-white/20 hover:scale-105 rounded-xl shadow-md transition-all duration-300">
            <nav className="w-[45%] rounded-md overflow-hidden border dark:border-none">
                <Image src={UFHomeImg} alt="urbanfits-homepage" placeholder="blur" className="w-full h-full object-cover select-none pointer-events-none" />
            </nav>
            <nav className="flex-1 flex flex-col">
                <h2 className="mb-6 font-bold text-xl tracking-tight">Urban Fits</h2>
                <span className="mb-2 text-xs text-gray-400">Project URL</span>
                <Link href="https://urbanfits.ae" target="_blank" className="flex text-sm underline underline-offset-4">
                    <LinkIcon className="w-5 mr-2" />
                    https://urbanfits.ae
                </Link>
                <span className="mt-6 mb-2 text-xs text-gray-400">Github Repository</span>
                <Link href="https://github.com/urbansoftware12/urbanfits.git" target="_blank" className="flex text-sm underline underline-offset-4">
                    <Github className="w-5 mr-2" />
                    https://github.com/urbansoftware12/urbanfits.git
                </Link>
            </nav>
        </section>
        <div className="w-full py-20 text-center">
            More to come...
        </div>
    </>
}
