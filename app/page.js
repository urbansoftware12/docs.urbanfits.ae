import Image from "next/image";
import { Button } from "@/components/ui/button";
import UFHomeImg from "@/public/urbanfits-home.webp";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return <main className="">
        <h1 className="font-bold text-4xl tracking-tight">Introduction</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            Welcome to the Urban Fits API Documentation! <b>Urban Fits</b> is an E-commerce website developed on <b>Next JS</b> framework utilizing the <b>Serverless</b> arhictecture and Client side rendering.
        </p>
        <Image src={UFHomeImg} alt="urbanfits-homepage" placeholder="blur" className="w-3/4 mx-auto my-10 rounded-lg border select-none pointer-events-none" />
        <div className="w-full flex justify-end">
            <Link href="/getting-started/backend-structure">
                <Button variant="outline">Backend Structure &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </main>
}
