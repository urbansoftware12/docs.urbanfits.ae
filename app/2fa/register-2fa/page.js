import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Register User 2FA</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The user 2FA registeration flow includes 2 APIs</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Get QR Code</b>: First, user will be provided a unique Qr Code by calling this API which user will scan to add it to the <CodeBadge>Google Authenticator</CodeBadge> app.</li>
            <li><b>Create User 2FA</b>: After adding the key to the app successfully, the user will submit a <b>TOTP (Timed One Time Password)</b> to enable 2 factor authentication on their account.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Get QR Code</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/2fa/get-qr-code</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p>The <CodeBadge>session-token</CodeBadge> cookie header must be sent in the request.</p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <p className="leading-7 my-2">In response, 2 important things will be provided. The first one will be <CodeBadge>qrSecret</CodeBadge> which a user can manually copy and add it to the authenticator app. And secondly <CodeBadge>qrCodeUrl</CodeBadge> which will be a <b>Data Url</b> for the Qr code image, it shoud be displayed as an image and user can scan it through the app to add the key. </p>
            <CodeBlock>{`{
    "success": true,
    "qrSecret": "KB2FU6JDHRYDAJROEVOXQYZEOART45LQF5BWISZXGJNHEM3E",
    "qrCodeUrl": "data:image/png;base64,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"
}`}</CodeBlock>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Create user 2FA</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/2fa/create-user-2fa</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">In payload, the <CodeBadge>qr_secret</CodeBadge> should be sent which the user was provided through the <b>Get Qr Code</b> API (should be sent by the developer behind the scenes). And the <CodeBadge>totp_code</CodeBadge> which user will enter by seeing it from the authenticator app within <b>30 seconds</b>.</p>
            <CodeBlock>{`{
    "qr_secret": "KB2FU6JDHRYDAJROEVOXQYZEOART45LQF5BWISZXGJNHEM3E",
    "totp_code": "12345"
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <span className="leading-7 my-2 text-green-400">Successful Response</span>
            <CodeBlock>{`{
    "success": true,
    "msg": "2 Factor Authentication is Enabled",
    "user": {} // the same user object as mentioned in earlier responses, containing the latest information. In this case the updated info about the 2FA.
}`}</CodeBlock>

            <span className="leading-7 mt-4 mb-2 text-red-400">Incorrect TOTP</span>
            <CodeBlock>{`{
    success: false,
    msg: "Your code is either wrong or expired. Please try again."
}`}</CodeBlock>
        </section>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/auth-endpoints/logout">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Logout API</Button>
            </Link>
            <Link href="/2fa/reset-2fa">
                <Button variant="outline">Reset User 2FA&nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}