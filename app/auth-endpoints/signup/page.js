import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";


export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Sign Up API</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The Sign up with credentials includes 2 APIs</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Sign up</b>: First, user will have to submit their credentials and then an authentication email will be sent to the sumitted email address. A temporary OTP session will be created having the submitted credentials.</li>
            <li><b>Callback</b>: If the user gets email successfully in their mail box with an OTP and user submits it within <CodeBadge>5 minutes</CodeBadge> to this api, the saved credentials will be saved permanently and then the server will create user's <b>UF-Card</b> and <b>UF-Tasks</b> record.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">Sign Up</h2>




        <div className="w-full mt-20 flex justify-between">
            <Link href="/getting-started/api-prerequisites">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Getting Started / API Prerequisites</Button>
            </Link>
            <Link href="/auth-endpoints/login">
                <Button variant="outline">Login API &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}