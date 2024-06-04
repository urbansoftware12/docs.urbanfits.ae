import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">App Architecture</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            As Urban Fits is built on the <b>Next JS</b>,
            It uses <b>Serverless Backend Architecture</b> often referred as <b>Lambda Functions</b>. <br />
            Overall it uses an <b>MVC Architecture</b> as a whole app. <br /> <br />
            Since It's each API is a "Function as a Service", they're stateless and only use the server bandwidth during it's <br />
            execution time and server is not always active; resulting in preventing unecessary server bandwidth usage. The server will totally close after a certain period
            of inactivity and then it'll need a <b>Cold Start</b> when hit by an API call. <br />
            Since Next JS has advanced features like <b>SSR</b> (Server Side Rendering), <b>CSR</b> (Client Side Rendering) Urban Fits mostly uses <b>CSR</b>. <br /><br />
        </p>

        <h1 className="mt-6 mb-4 font-bold text-2xl tracking-tight">Reasons for using CSR</h1>
        <p>Why use CSR when SSR can result in faster initial loads? Well here are a few reasons to use CSR:</p>
        <ul className="my-6 list-outside list-disc pl-4 text-sm leading-7 max-w-[80%] space-y-2">
            <li>Client Side Rendering prevents the further usage of Server bandwidth as SSR will render every page on server so that client don't have to parse it in the browser hence using Server bandwidth equivalant to all users combined.</li>
            <li>Since most of our content is likely to be static and not very complex, it makes it easy for client to render it fast.</li>
            <li>Our targeted audiance is likely to be those who do online shopping and have mid to high end devices.</li>
        </ul>
        <div className="w-full mt-20 flex justify-between">
            <Link href="/">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Introduction</Button>
            </Link>
            <Link href="/getting-started/api-prerequisites">
                <Button variant="outline">API Prerequisites &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}