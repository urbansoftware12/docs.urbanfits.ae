import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Update 2FA</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This API will be used to update the user's 2FA <b>enable / disable</b> status. But each time user performs either of the actions, the user will be rquired to enter the current TOTP from the authenticator app.</p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>/2fa/update-user-2fa</CodeBadge></p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="mb-2">This is a toggle API. Each time user enters a <b>TOTP</b> and trigger this API, the status of the 2FA will enabled if it was disabled and vise versa.</p>
        <CodeBlock>{`{
        "totp_code": "12345"
}`}</CodeBlock>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
        <CodeBlock>{`{
            success: true,
            msg: "Your 2FA has been disabled successfully.",
            user: {} // Updated user object
}`}</CodeBlock>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/2fa/reset-2fa">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Reset User 2FA</Button>
            </Link>
            <Link href="/2fa/verify-totp">
                <Button variant="outline">Verify TOTP&nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}