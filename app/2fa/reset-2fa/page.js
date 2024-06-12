import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Reset User 2FA</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This API, as marked in the sidebar is only for admin panel use. An only admin users will be authorized to use it. It will reset he user's 2FA data, making it seem like the user never registered for the 2FA. The user will have to register for 2FA again after this.</p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>/2fa/reset-user-2fa</CodeBadge></p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="mb-2">In the payload, firstly the admin's session-token cookie header should be sent and secondly the following body:</p>
        <CodeBlock>{`{
        "user_id": "65ddb7496a09ca290bec88b2" // The user ID of the respected user who's 2FA you want to reset.
}`}</CodeBlock>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
        <CodeBlock>{`{
        "success": true,
        "msg": "john's 2FA has been reset.",
        "user": {} // Same updated user object as mentioned in earlier APIs
}`}</CodeBlock>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/2fa/register-2fa">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Register 2FA</Button>
            </Link>
            <Link href="/2fa/update-2fa">
                <Button variant="outline">Update 2FA&nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}