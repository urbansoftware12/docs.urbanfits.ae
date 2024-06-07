import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Forgot Password</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The Forgot password flow includes 2 APIs</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Forgot Password</b>: First, user will have to submit their email and the new passowrd. A temporary OTP session will be created having the new password. And the OTP will be delivered to the submitted email address.</li>
            <li><b>Change Password</b>: If the user gets email successfully in their mail box with an OTP and user submits it within <CodeBadge>5 minutes</CodeBadge> to this api, the saved new password will be permanently changed successfully.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Forgot Password</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/auth/otp/forgot-password</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <CodeBlock>{`{
    "email": "exmaple@domain.com",
    "new_password": "new_12345678"
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <p className="leading-7 my-2">Save this <CodeBadge>otp_id</CodeBadge>, we'll be needing it to change the password with authenticity.</p>
            <CodeBlock>{`{
    "success": true,
    "msg": "We just sent you an OTP, please check your Mail Box",
    "otp_id": "6662e9e67f688698857bd1b8"
}`}</CodeBlock>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Change Password</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>/auth/otp/change-password</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">The OTP Id obtained from submitting the credentials.</p>
            <CodeBlock>{`{
    "otp_id": "66150428c953c3d56112fbce", // OTP ID optained from forgot password api.
    "otp": "12345"
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <span className="leading-7 my-2 text-green-400">Successful Response</span>
            <CodeBlock>{`{
    "success": true,
    "msg": "Your password has been updated!"
}`}</CodeBlock>

            <p className="leading-7 mt-3 mb-2">Now after you receive a successful response for password change, you can redirect user to the login page again and the user will login using their new credentials. <br /><b>Remeber!</b> that the users who signed up with <b>Google</b> won't be able to submit request for <b>password change</b> neither for <b>email change</b>.</p>

            <span className="leading-7 mt-4 mb-2 text-red-400">Incorrect OTP</span>
            <CodeBlock>{`{
        success: false,
        msg: "The OTP is incorrect."
}`}</CodeBlock>
        </section>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/auth-endpoints/google-login">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Login with Google</Button>
            </Link>
            <Link href="/auth-endpoints/change-email">
                <Button variant="outline">Change Email API &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}