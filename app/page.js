import Image from "next/image";
import { Button } from "@/components/ui/button";
import UFHomeImg from "@/public/urbanfits-home.webp";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Introduction</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Welcome to the Urban Fits API Documentation! <b>Urban Fits</b> is an E-commerce website developed on <b>Next JS</b>.</p>
        <Image src={UFHomeImg} alt="urbanfits-homepage" placeholder="blur" className="w-3/4 mx-auto my-10 rounded-lg border select-none pointer-events-none" />

        <h2 className="font-bold text-2xl tracking-tight">Features</h2>
        <p className="leading-7 mt-4 mb-2">Apart from a typical e-commerce experience, from development point of view, it has <br /> a bunch of other honorable mentions:</p>
        <ul className="list-inside list-disc text-sm leading-7">
            <li>In app reward system - <b>UF Points</b></li>
            <li>Unique UF-Wallet card generation with a barcode for each user</li>
            <li>UF-Tasks for user to gain uf points</li>
            <li>Weekly spins (3 times a week) and daily checkin reward</li>
            <li>Multiple user sessions</li>
            <li>Multi-lingual (English, Arabic)</li>
            <li>Cloud Storage for <b>Prouduct images</b> and <b>User data images</b> using <b>AWS - S3 bucket</b></li>
            <li>Payment gateway integratin via <b>Stripe</b>; self hosted checkout page.</li>
            <li>Real time events handling using <b>Pusher Channels</b> and push notifications using <b>Pusher Beams</b></li>
            <li>Shipment integration with <b>Swft-Box</b> UAE based service.</li>
        </ul>

        <div className="w-full mt-20 flex justify-end">
            <Link href="/getting-started/app-architecture">
                <Button variant="outline">App Architecture &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}
