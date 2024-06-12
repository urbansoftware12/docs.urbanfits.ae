import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Verify TOTP</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This API will be used during the <b>Login</b> process if the user have 2FA enabled, the login API will return a redirect response instead direclty logging the user in. Then the user will be prompted to enter the current <b>TOTP</b> from the authenticator app.</p>

        <h3 className="mt-4 mb-2 font-semibold text-xl tracking-tight">2FA Login</h3>
        <p className="mb-2">When the user who's trying to login have 2FA enabled, the <b>Login API</b> will return different response instead of directly logging the user in. i.e.</p>
        <CodeBlock>{`{
            success: true,
            msg: "",
            redirect_url: "/auth/confirm-2fa-totp?user_id=65ddb7496a09ca290bec88b2",
}`}</CodeBlock>
        <p className="mt-2">Then from here onward, the following pattern should be followed to authenticate the user with 2nd factor and login the user successfully.</p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <p><CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/2fa/verify-totp</CodeBadge></p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="mb-2">This API will be use </p>
        <CodeBlock>{`{
        "totp_code": "12345"
}`}</CodeBlock>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
        <CodeBlock>{`{
            "success": true,
            "msg": "You are signed in successfully!",
            "user": "user": {
                "_id": "65ddb7496a09ca290bec88b2",
                "username": "user_123",
                "register_provider": "urbanfits",
                "image": "/website-copyrights/default-pfp.webp ",
                "phone_prefix": "+971",
                "phone_number": "31643454835",
                "email": "example@domain.com",
                "two_fa_enabled": true,
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
            <Link href="/2fa/update-2fa">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Update 2FA</Button>
            </Link>
            <Link href="/user-endpoints/get-me">
                <Button variant="outline">Get Me&nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}