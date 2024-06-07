import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Get Me</h1>
        <p className="leading-7 my-2">This API will be used to get the latest user data subsequently. It is suggested to store the profile data obtained from Signup / Login API in the local space to display on all the places in app. And instead of using placeholders or preloaders, use that old data from local space until the <b>Get Me</b> API response is pending. As soon as the this API respond, update the profile data in local space hence reflecting on all the places where it's being used for better <b>User Experience</b>.</p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/user/get/me</CodeBadge>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="leading-7 my-2">No payload required although for successful response, the <CodeBadge>session-token</CodeBadge> cookie header must be included in the request headers.</p>


        <section className="w-full flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <span className="leading-7 my-2 text-green-400">Successful Response</span>
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


            <span className="leading-7 my-2 text-red-400">Invalid Session</span>
            <p className="leading-7 mb-2">In case of absence of <CodeBadge>session-token</CodeBadge> in request headers or if the sessions token is expired, then any personalized API return this response indicating that the user session is no longer accepted and user needs to login again.</p>
            <CodeBlock>{`{
        "success": false,
        "msg": "Your session is invalid or expired. Please sign in again."
}`}</CodeBlock>
        </section>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/auth-endpoints/google-login">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Auth Endpoints / Login with Google</Button>
            </Link>
            <Link href="/user-endpoints/update-user">
                <Button variant="outline">Update User &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}