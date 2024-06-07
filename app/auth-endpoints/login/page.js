import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Login API</h1>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/auth/login</CodeBadge>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="leading-7 my-2">User can login either with their <b>Username</b> or <b>Email</b>. They key property for both cases will be the same; <CodeBadge>email</CodeBadge></p>
        <CodeBlock>{`{
    "email": "example@domain.com", // Or it can be a username like "user_123". In both cases the field should be the same as "email".
    "password": "P@$$w0rd",
    "register_provider": "urbanfits", // and if signing in with google then provide "google".
    "remember_me": true // boolean: the session will be extended upto 30 days if 'true', defaults to 7 days.
}`}</CodeBlock>


        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
        <CodeBlock>{`{
    "success": true,
    "msg": "You are Logged in successfully !",
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

        <div className="w-full mt-20 flex justify-between">
            <Link href="/auth-endpoints/signup">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Signup API</Button>
            </Link>
            <Link href="/auth-endpoints/google-signup">
                <Button variant="outline">Login with Google &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}