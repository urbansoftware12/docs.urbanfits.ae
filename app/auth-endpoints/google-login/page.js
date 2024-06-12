import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Login with Google API</h1>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/auth/login/google</CodeBadge>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="leading-7 my-2">The response can be of 2 types which depends on a condition. The condition is that if the user have 2FA enabled or disabled. Which can result on 2 different possible responses:</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>2FA Enabled</b>: If the user have 2FA enabled, the API will return a <CodeBadge>redirect_url</CodeBadge> in response which is for the web to easily redirect user to the <b>Verify TOTP</b> page but in <b>Mobile Development</b>, it should be taken care of by manually detecting if the <CodeBadge>redirect_url</CodeBadge> exists then redirect the user. It is further explained in <Link href="/2fa/verify-totp" className="text-blue-600 underline underline-offset-4">Verify TOTP</Link> API documentation.</li>
            <li><b>2FA Disabled</b>: In case of disabled 2FA, the API will follow the below mentioned response and will directly login the user.</li>
        </ul>
        <CodeBlock>{`{
    "token": "the signed user token obtained from the google..."
}`}</CodeBlock>


        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
        <CodeBlock>{`{
    "success": true,
    "msg": "You are Logged in successfully !",
    "user": {
        "_id": "65ddb7496a09ca290bec88b2",
        "username": "user_123",
        "register_provider": "google",
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

        <div className="w-full mt-20 flex justify-between">
            <Link href="/auth-endpoints/google-signup">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Signup with Google API</Button>
            </Link>
            <Link href="/auth-endpoints/forgot-password">
                <Button variant="outline">Forgot Password API &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}