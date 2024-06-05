import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";


export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">API Prerequisites</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">All APIs are designed with some consistant approaches and parameters. Here are the things which should be kept in mind while integrating the APIs:</p>
        <ol className="mt-4 px-5 list-outside list-decimal text-sm leading-7">
            <li><b>Base URL</b> The Base URL for API calls will be <CodeBadge>https://urbanfits.ae</CodeBadge> for both; Website and Admin panel. The paths in upcoming APIs will be relative to this.</li>
            <li><b>API Response</b> Each API must contains 2 mandatory parameters i.e
                <ul style={{ listStyleType: "lower-alpha" }} className="list-outside text-sm leading-7 px-5 py-3">
                    <li><CodeBadge>success</CodeBadge> : <b>Boolean</b> which tells whether the requested operation was successful or not.</li>
                    <li><CodeBadge>msg</CodeBadge> : <b>String</b> A user friendly message to inform about the requested operation. It can be directly shown in the notification/toasts.</li>
                </ul>
            </li>
            <li><b>Session</b> The backend uses <b>JWT & Cookies</b> based session both in Website and Admin panel.</li>
            <li>
                <b>Session Cookies</b> The session response will contain 2 important cookies:
                <ul style={{ listStyleType: "lower-alpha" }} className="list-outside text-sm leading-7 px-5 py-3">
                    <li><CodeBadge>session-token</CodeBadge>: An <b>HTTP only</b> cookie which should always be sent to the server in subsequent requests to the backend. It should be properly handled in mobile app so it can be sent back to the backend making any request for a logged in user. </li>
                    <li><CodeBadge>is_logged_in</CodeBadge> : A client accessible cookie to demonstrate if the user is logged in or not. This cookie does not needed to be sent to the server on subsequent requsts.</li>
                </ul>
            </li>
            <li><b>User update</b> Each time user updates their data or something that will affect the user profile data, it will be udpated in the session token.</li>
            <li>Every response containing user data will have a fixed key i.e. <CodeBadge>user</CodeBadge> .</li>
        </ol>
        <h2 className="mt-6 font-bold text-2xl tracking-tight">CORS</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-4">The backend only allow CORS headers to these following origins:</p>
        <ul className="mb-2 list-inside list-disc text-sm leading-7 text-blue-600">
            <li>https://urbanfits.ae</li>
            <li>https://admin.urbanfits.ae</li>
            <li>http://localhost:3000</li>
            <li>https://localhost:3000</li>
            <li>http://localhost:3001</li>
            <li>https://localhost:3001</li>
        </ul>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/getting-started/app-architecture">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;App Architecture</Button>
            </Link>
            <Link href="/auth-endpoints/signup">
                <Button variant="outline">Auth Endpoints / Signup &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}
