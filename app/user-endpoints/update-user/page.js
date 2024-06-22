import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Update User Data</h1>
        <p className="leading-7 my-2">This API will be used to update the ordinary user data profile data which won't affect the security. It can't update the information like <b>2FA</b>, <b>Username</b>, <b>Email</b>, <b>Email</b>, <b>Password</b>, <b>Timezone</b> etc. Even if these values are submitted to update, the server will ignore these properties and only update those which are permitted.</p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/user/update</CodeBadge>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="leading-7 my-2">In the payload, the same properties need to be sent with different values to update. There are 2 important things to be noted about it;
            <ul className="mb-2 pl-4 list-outside list-disc text-sm leading-7">
                <li>You don't need to submit full user object along with previous and the new values. Just submit those values which you need to update.</li>
                <li>But the to update the <CodeBadge>image</CodeBadge> will be a little different. You will need to first upload the image on the S3 cloud using separate API which will return you back the relative url of the image, then update that url in this API. Please refer the <Link href="/" className="text-blue-600 underline underline-offset-4">Image Upload API</Link>.</li>
            </ul>
        </p>
        <CodeBlock>{`{
        "image": "/user-profiles/65ddb7496a09ca290bec88b2", // Remeber that in order to update the image url, first you need to upload the image using a separate API and then update the url in here.
        "phone_prefix": "+971",
        "phone_number": "31643454835",
        "title": "Mr."
        "firstname": "Alice",
        "lastname": "Davidson",
        "gender": "other",
}`}</CodeBlock>

        <section className="w-full flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <p className="leading-7 my-2">In response, you'll get the full user object with all the updated latest values which you can unhesitantly update in your local storage/state.</p>
            <CodeBlock>{`{
    "success": true,
    "msg": "Your data has been updated successfully",
    "user": {
        "_id": "65ddb7496a09ca290bec88b2",
        "username": "user_123",
        "register_provider": "urbanfits",
        "image": "/user-profiles/65ddb7496a09ca290bec88b2",
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
        "title": "Mr."
        "firstname": "Alice",
        "lastname": "Davidson",
        "gender": "other",
    }
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