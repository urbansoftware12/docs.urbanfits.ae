import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Sign Up API</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The Sign up with credentials includes 2 APIs</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Sign up</b>: First, user will have to submit their credentials and then an authentication email will be sent to the sumitted email address. A temporary OTP session will be created having the submitted credentials.</li>
            <li><b>Callback</b>: If the user gets email successfully in their mail box with an OTP and user submits it within <CodeBadge>5 minutes</CodeBadge> to this api, the saved credentials will be saved permanently and then the server will create user's <b>UF-Card</b> and <b>UF-Tasks</b> record.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Sign Up</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/auth/signup</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <CodeBlock>{`{
    "username": "user_123",
    "email": "example@domain.com",
    "phone_prefix": "+92",
    "phone_number": "30142353150",
    "password": "password",
    "timezone": "Asia/Dubai", // UAE timezone format
    "accept_policies": true // Make user agree with the terms of use and policies.
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "otp_id": "6661902bb6c41aba2ac07fc3", // This OTP ID must be sent when submitting the OTP. 
    "msg": "Verification Email sent to example@domain.com",
    "redirect_url": "/auth/signup/verify-otp?otp_id=6661902bb6c41aba2ac07fc3" // Only for Web to directly use pre-composed url.
}`}</CodeBlock>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Callback</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/auth/signup/callback</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">The OTP Id obtained from submitting the credentials.</p>
            <CodeBlock>{`{
    "otp_id": "66150428c953c3d56112fbce", // OTP ID optained from signup api.
    "otp": "12345"
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <span className="leading-7 my-2 text-green-400">Successful Response</span>
            <CodeBlock>{`{
    "success": true,
    "msg": "You're Resgistered successfully !",
    "user": {
        "username": "user_123",
        "register_provider": "urbanfits",
        "image": "/website-copyrights/default-pfp.webp",
        "phone_prefix": "+92",
        "phone_number": "30142353150",
        "email": "example@domain.com",
        "password": "U2FsdGVkX1/xe04hrg0sOQRl8wAjE/Y9U8nFc2tMPlc=",
        "two_fa_enabled": false,
        "role": "customer",
        "is_active": true,
        "uf_wallet": {
            "card_number": "70517176715488753497",
            "bar_code": "/uf-wallet-barcodes/70517176715488753497"
        },
        "last_checkin": "2024-06-06T10:49:13.345Z",
        "timezone": "Asia/Karachi",
        "user_agent": "eyJhbGciOiJIUzI1NiJ9.UG9zdG1hblJ1bnRpbWUvNy4zNy4z.lYd97Uv60STIestaaO3UO_aiP7G10yEmi_XG22KbOPo",
        "purchases": 0,
        "_id": "6661967e061f9d6e964d7b69",
        "createdAt": "2024-06-06T00:00:00.000Z",
        "updatedAt": "2024-06-06T00:00:00.000Z",
        "__v": 0
    }
}`}</CodeBlock>

            <p className="leading-7 mt-3 mb-2">Along with all the user profile data, 2 mandatory <b>Set-Cookie</b> headers will be sent as mentioned in <Link href="/getting-started/api-prerequisites" className="text-blue-500 underline underline-offset-2">Api Prerequisites</Link>. These 2 headers should be configured accordingly in the browser so that it sends them back with all API calls. And as for mobile application, they should be saved as they are and should be set in the API request headers. <br />
                The default user session expiration will be <CodeBadge>7 days</CodeBadge>. If the user checks the <CodeBadge>remeber me</CodeBadge> box while signing in, the session will be extended upto <CodeBadge>30 days</CodeBadge>.
            </p>
            <CodeBlock>{`Set-Cookie: session-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRkYjc0OTZhMDljYTI5MGJlYzg4YjIiLCJ1c2VybmFtZSI6Il9zYWFkXyIsImVtYWlsIjoiYmluYXJzaGFkc2FhZDZAZ21haWwuY29tIiwicmVnaXN0ZXJfcHJvdmlkZXIiOiJ1cmJhbmZpdHMiLCJ1c2VyX2FnZW50IjoiZXlKaGJHY2lPaUpJVXpJMU5pSjkuVFc5NmFXeHNZUzgxTGpBZ0tGZHBibVJ2ZDNNZ1RsUWdNVEF1TURzZ1YybHVOalE3SUhnMk5Da2dRWEJ3YkdWWFpXSkxhWFF2TlRNM0xqTTJJQ2hMU0ZSTlRDd2diR2xyWlNCSFpXTnJieWtnUTJoeWIyMWxMekV5TXk0d0xqQXVNQ0JUWVdaaGNta3ZOVE0zTGpNMklFOVFVaTh4TURrdU1DNHdMakEubU45LS02Uy1FbzF2YndyNTJQQkhJUHl6b1pMb3FISVNRdEtxUGhXOEZhdyIsInRpbWV6b25lIjoiQXNpYS9LYXJhY2hpIiwidHdvX2ZhX2VuYWJsZWQiOmZhbHNlLCJ1Zl93YWxsZXQiOnsiY2FyZF9udW1iZXIiOiI3MDUxNzA5MDI5MTkyMTI0NzY1NiIsImJhcl9jb2RlIjoiL3VmLXdhbGxldC1iYXJjb2Rlcy83MDUxNzA5MDI5MTkyMTI0NzY1NiIsImxhc3Rfc3Bpbl9yZXdhcmQiOjIwMCwibGFzdF91Zl9zcGluIjoiMjAyNC0wNS0wOVQyMzo1OTo1OS4wMDBaIiwibmV4dF91Zl9zcGluIjoiMjAyNC0wNS0xMVQwMDowMDowMC4wMDBaIn0sImxhc3RfY2hlY2tpbiI6IjIwMjQtMDUtMjFUMjM6NTk6NTkuOTk5WiIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMjdUMDA6MDA6MDAuMDAwWiIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNzE3Njc1NzgyLCJleHAiOjE3MjAyNjc3ODJ9.8JnNPdl0eYb-xmTUVJw7E_GJBvqQNhP_DfFAp22VlBc; Max-Age=2592000; Domain=.urbanfits.ae; Path=/; HttpOnly; Secure; Priority=High; SameSite=None
Set-Cookie: is_logged_in=true; Max-Age=2592000; Domain=.urbanfits.ae; Path=/; Secure; Priority=High; SameSite=None
`}</CodeBlock>

            <span className="leading-7 mt-4 mb-2 text-red-400">Incorrect OTP</span>
            <CodeBlock>{`{
        success: false,
        msg: "The OTP is incorrect."
}`}</CodeBlock>
        </section>

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