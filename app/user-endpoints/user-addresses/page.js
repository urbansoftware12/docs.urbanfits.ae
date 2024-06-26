import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">User Addresses APIs</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            A user can store 2 addresses at maximum and the user will have the same addresses options in the checkout process to select from one of the saved addresses to continue. <br />
            Both APIs require the <CodeBadge>session-token</CodeBadge> cookie header to sent along. <br />
            There are 2 APIs for handling the user addresses information:
        </p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Get Addresses</b>: The user's addresses can be fetched via this API.</li>
            <li><b>Update Addresses</b>: User addresses can be updated using this API.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Get User Addresses</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/user/addresses/get</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "addresses": {
        "_id": "65df69ecd5d42b2477085cec",
        "user_id": "65ddb7496a09ca290bec88b2",
        "createdAt": "2024-02-28T17:14:20.859Z",
        "updatedAt": "2024-05-21T18:23:59.425Z",
        "address1": {
            "address_title": "Home",
            "firstname": "John",
            "lastname": "Doe",
            "address": "street 123, Dubai, UAE",
            "apt_suite": "",
            "city": "Dubai",
            "country": "ae", // SO 3166-1 alpha-2 country code. It will be alwasy UAE since the platform is in UAE
            "phone_prefix": "+971",
            "phone_number": "31643454835",
            "state": "ae-sh" // The state code of UAE
        },
        "address2": null // Means that user has saved only one address
        "__v": 0,
    }
}`}</CodeBlock>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Update Addresses</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>/user/addresses/update</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">For instance we are updating the second address as <b>Office</b> address. It will be saved along with the previous <b>Home</b> address as well. In short only that data can be sent which needs to be updated.</p>
            <CodeBlock>{`{
    "address1": {
        "address_title": "Office",
        "firstname": "John",
        "lastname": "Doe",
        "address": "street 456, Abu Dhabi, UAE",
        "apt_suite": "Near building ABC",
        "city": "Abu Dhabi",
        "country": "ae", // SO 3166-1 alpha-2 country code. It will be alwasy UAE since the platform is in UAE
        "phone_prefix": "+971",
        "phone_number": "31643454835",
        "state": "ae-az" // The state code of UAE
    }
}`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "msg": "Your Address updated successfully",
    "addresses": {
        "_id": "65df69ecd5d42b2477085cec",
        "user_id": "65ddb7496a09ca290bec88b2",
        "createdAt": "2024-02-28T17:14:20.859Z",
        "updatedAt": "2024-05-21T19:01:42.425Z",
        "address1": {
            "address_title": "Home",
            "firstname": "John",
            "lastname": "Doe",
            "address": "street 123, Dubai, UAE",
            "apt_suite": "",
            "city": "Dubai",
            "country": "ae",
            "phone_prefix": "+971",
            "phone_number": "31643454835",
            "state": "ae-sh"
        },
        "address2": { // The updated adddress object
            "address_title": "Office",
            "firstname": "John",
            "lastname": "Doe",
            "address": "street 456, Abu Dhabi, UAE",
            "apt_suite": "Near building ABC",
            "city": "Abu Dhabi",
            "country": "ae",
            "phone_prefix": "+971",
            "phone_number": "31643454835",
            "state": "ae-az"
        }
        "__v": 0,
    }
}`}</CodeBlock>
        </section>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/user-endpoints/get-me">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Get Me API</Button>
            </Link>
            <Link href="/user-endpoints/user-notifications">
                <Button variant="outline">User Notifications &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}