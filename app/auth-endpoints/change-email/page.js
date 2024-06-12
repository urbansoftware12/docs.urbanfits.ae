import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Change Email</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The Change Email flow also includes 2 APIs</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Auth Email</b>: First, user will have to submit their new email and the passowrd. A temporary OTP session will be created having the new email. And the OTP will be delivered to this new submitted email address.</li>
            <li><b>Change Email</b>: If the user gets email successfully in their mail box at provided new email with an OTP and user submits it within <CodeBadge>5 minutes</CodeBadge> to this api, the saved new email will be permanently changed successfully.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Auth Email</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>/auth/otp/auth-email</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <CodeBlock>{`{
    "new_email": "new.email@example.com",
    "password": "12345678" // Current password of the user
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <p className="leading-7 my-2">Save this <CodeBadge>otp_id</CodeBadge>, we'll be needing it to change the password with authenticity.</p>
            <CodeBlock>{`{
    "success": true,
    "otp_id": "6662e9e67f688698857bd1b8,
    "msg": "We just sent an otp to your new email, please check and submit the code."
}`}</CodeBlock>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Change Email</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>/auth/otp/change-email</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">The OTP Id obtained from submitting the new email address should be send along.</p>
            <CodeBlock>{`{
    "otp_id": "66150428c953c3d56112fbce", // OTP ID optained from forgot password api.
    "otp": "12345"
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <span className="leading-7 my-2 text-green-400">Successful Response</span>
            <CodeBlock>{`{
        "success": true,
        "msg": "Your email has been updated!",
        "user": {
            "_id": "65ddb7496a09ca290bec88b2",
            "username": "user_123",
            "register_provider": "urbanfits",
            "image": "https://lh3.googleusercontent.com/a/ACg8ocLUFVuvODAyQgKnZQyeKiplTsNvzvJr-DL-eghS5l7YM4Dg1VOi=s96-c",
            "phone_prefix": "+971",
            "phone_number": "31643454835",
            "email": "example@domain.com",
            "two_fa_enabled": false,
            "role": "customer",
            "is_active": true,
            "uf_wallet": {
                "card_number": "70517090291921247656",
                "bar_code": "/uf-wallet-barcodes/70517090291921247656",
                "last_spin_reward": 200,
                "last_uf_spin": "2024-05-09T23:59:59.000Z",
                "next_uf_spin": "2024-05-11T00:00:00.000Z"
            },
            "last_checkin": "2024-05-21T23:59:59.999Z",
            "timezone": "Asia/Dubai",
            "user_agent": "eyJhbGciOiJIUzI1NiJ9.UG9zdG1hblJ1bnRpbWUvNy4zNy4z.lYd97Uv60STIestaaO3UO_aiP7G10yEmi_XG22KbOPo",
            "purchases": 7,
            "createdAt": "2024-02-27T00:00:00.000Z",
            "updatedAt": "2024-06-06T12:04:37.382Z",
            "__v": 0,
            "firstname": "John",
            "gender": "male",
            "lastname": "Doe",
            "title": "Mr."
        }
}`}</CodeBlock>

            <p className="leading-7 mt-3 mb-2">After the email changes successfully you will once again get the whole user object with all the updated data not to mention the email as well.</p>

            <span className="leading-7 mt-4 mb-2 text-red-400">Incorrect OTP</span>
            <CodeBlock>{`{
        success: false,
        msg: "The OTP is incorrect."
}`}</CodeBlock>
        </section>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/auth-endpoints/forgot-password">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Forgot Password API</Button>
            </Link>
            <Link href="/2fa/register-2fa">
                <Button variant="outline">Register 2FA API &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}