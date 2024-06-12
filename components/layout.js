"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import sidebarData from "@/static/sidebar-data";
import Link from "next/link";

export default function MainLayout({ children }) {
    const path = usePathname();

    return <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <main className="w-full min-h-screen flex justify-between transition-all duration-300">
            <section className="w-[22%] border-r border-gray-200 dark:border-white/10 px-8 py-10">
                <div className="sticky top-20 w-full max-h-[75vh] overflow-hidden hover:overflow-y-auto">
                    <div className="p-4 flex flex-col">
                        {sidebarData.map((item, index) => {
                            if (item.menuHeading) return <h4 key={index} className={`${index == 0 ? "mb-4" : "my-4"} text-sm font-bold leading-none select-none`}>{item.title}</h4>
                            return <Link key={index} href={item.href} className="w-full">
                                <Button variant={path == item.href ? "secondary" : "ghost"} size="sm" className={`${path !== item.href && "opacity-60"} w-full text-left justify-start text-sm`}>{item.title} {item.admin && <span className="ml-2 px-1.5 py-0.5 text-red-600 dark:text-red-400 bg-red-200 dark:bg-red-200/30 rounded-md leading-tight text-[10px]">admin</span>}</Button>
                            </Link>
                        })}
                    </div>
                </div>
            </section>
            <section className="w-[78%] p-10 pr-20 xl:pr-28">
                {children}
            </section>
        </main>
        <footer className="w-full px-6 py-10 flex justify-around items-center text-xs border-t border-gray-200 dark:border-white/10 text-slate-500">
            <div className=" flex flex-col gap-1 text-left">
                <span>Urban Fits API Documentation</span>
                <span>Developed by Faizan on Next JS</span>
            </div>
            <Link href="/getting-started/github-repositories">
                <Button variant="secondary"><Github className="size-5" />&nbsp;&nbsp; Github Repositories</Button>
            </Link>
        </footer>
    </NextThemesProvider>
}
