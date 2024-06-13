import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Logout API</h1>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/auth/logout</CodeBadge>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="leading-7 my-2">Logout API doesn't require any payload but just an empty body; <CodeBadge>{"{}"}</CodeBadge>. This can be necessary for the web browser because browser handles all the cookies itself according to its policies. In the response, the API will remove the <CodeBadge>session-token</CodeBadge> and <CodeBadge>is_logged_in</CodeBadge> cookies headers from the response and the browser will automatically log the user out. But in mobile application, since the cookies will be handled manually, the developer can directly log the user out instead of calling the logout API.</p>

        <h3 className="mt-4 mb-3 font-semibold text-lg tracking-tight">Response</h3>

        <CodeBlock>{`{
        "success": true,
        "msg": "You are Logged out successfully !"
}`}</CodeBlock>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/auth-endpoints/change-email">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Change Email API</Button>
            </Link>
            <Link href="/2fa/register-2fa">
                <Button variant="outline">2FA Endpoints / Register 2FA &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}