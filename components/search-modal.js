import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { flatMenu } from "@/static/sidebar-data";
import Link from "next/link";

export function SearchModalBtn() {
    const modalRef = useRef(null);
    const [query, setQuery] = useState("");
    const toggleSearchOnShortCut = (event) => {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            modalRef.current.click();
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", toggleSearchOnShortCut)

        return () => {
            window.removeEventListener("keydown", toggleSearchOnShortCut)
        }
    }, [])

    return <Dialog>
        <DialogTrigger ref={modalRef} asChild>
            <Button variant="outline" size="sm" className="text-xs"><span className="opacity-60 mr-3">Search Documentation...</span> <Badge className="text-[11px]" variant="secondary">Ctrl + K</Badge> </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md p-0">
            <Input className="w-full pt-4 border-none rounded-b-none" onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Search here the keywords..." />
            <ScrollArea className="w-full h-[40vh] p-4 flex flex-col border-t border-gray-100 dark:border-white/20">
                {!query ? <div className="w-full text-center">No results :(</div>
                    : flatMenu.filter(item => {
                        const title = item.title.toLowerCase();
                        const searchQuery = query.toLowerCase();
                        return (title.includes(searchQuery) || query.includes(title)) && !item.menuHeading
                    }).map(item => <Link key={item.href} href={item.href}><Button variant="outline" size="sm" className="w-full h-11 mb-2 text-sm justify-start">{item.title}</Button></Link>)}
            </ScrollArea>
        </DialogContent>
    </Dialog>
}