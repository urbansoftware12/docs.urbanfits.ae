"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "./navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import sidebarData from "@/static/sidebar-data";
import Link from "next/link";

export default function MainLayout({ children }) {

    return <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <main className="w-full min-h-screen flex justify-between">
            <section className="w-[25%] border-r border-gray-200 dark:border-white/10 px-8 py-10 overflow-x-hidden overflow-y-auto">
                <ScrollArea className="w-full h-screen">
                    <div className="p-4 flex flex-col">
                        {sidebarData.map((item, index) => {
                            if (item.menuHeading) return <h4 key={index} className={`${index == 0 ? "mb-4" : "my-4"} text-sm font-bold leading-none select-none`}>{item.title}</h4>
                            return <Link key={index} href={item.href} className="w-full">
                                <Button variant="ghost" size="sm" className="w-full text-left justify-start text-sm">{item.title}</Button>
                            </Link>
                        })}
                    </div>
                </ScrollArea>
            </section>
            <section className="w-[75%] p-10 pr-20 xl:pr-28">
                {children}
            </section>
        </main>
        <footer className="w-full px-6 py-10 flex flex-col gap-1 text-xs border-t border-gray-200 dark:border-white/10 text-slate-500">
            <span>Urban Fits API Documentation</span>
            <span>Developed by Faizan on Next JS</span>
        </footer>
    </NextThemesProvider>
}
