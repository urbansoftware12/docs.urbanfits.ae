"use client"
import { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import ToTopBtn from "./scroll-top-btn";
import { Github, CircleChevronRight } from "lucide-react";
import sidebarData from "@/static/sidebar-data";
import Link from "next/link";

const MenuItem = ({ index, item, path }) => {
    const [open, setOpen] = useState(false);
    return <>
        <Button key={index} onClick={() => setOpen(prev => !prev)} variant="ghost" className={"text-left justify-between text-sm font-bold leading-none select-none"}>{item.title} <CircleChevronRight className={`size-5 ${open ? "rotate-90" : "opacity-45"} transition-all duration-300`} /></Button>
        <div style={{ maxHeight: `${open ? item.subMenu.length * 40 : 0}px` }} className={`${open ? "mb-4 pl-4 pt-1" : "scale-90"} origin-bottom-left w-full transition-all duration-500 overflow-hidden`}>
            {item.subMenu.map((subItem, subIndex) => <Link key={index + "-sub-item-" + subIndex} href={subItem.href} className="w-full">
                <Button variant={path == subItem.href ? "secondary" : "ghost"} size="sm" className={`${path !== item.href && "opacity-60"} w-full text-left justify-start text-sm`}>{subItem.title} {subItem.admin && <span className="ml-2 px-1.5 py-0.5 text-red-600 dark:text-red-400 bg-red-200 dark:bg-red-200/30 rounded-md leading-tight text-[10px]">admin</span>}</Button>
            </Link>)}
        </div>
    </>
}

export default function MainLayout({ children }) {
    const path = usePathname();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true) }, []);
    
    return <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {isClient && <ToTopBtn />}
        <main className="w-full min-h-screen flex justify-between transition-all duration-300">
            <section className="w-[22%] border-r border-gray-200 dark:border-white/10 px-8 py-10">
                <div className="sticky top-20 w-full max-h-[75vh] overflow-hidden hover:overflow-y-auto">
                    <div className="p-4 flex flex-col">
                        {sidebarData.map((item, index) => <MenuItem index={index} item={item} path={path} />)}
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
