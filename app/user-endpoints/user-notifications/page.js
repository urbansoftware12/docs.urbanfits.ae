import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">User Notifications APIs</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            There will be maximum 20 latest notifications stored for each user. If more new notifications get generated, the latest ones will replace the oldest ones regardless of if the user have seen them or not.<br />
            Both APIs require the <CodeBadge>session-token</CodeBadge> cookie header to sent along. <br />
            There are also 2 APIs for handling the user notifications:
        </p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Get Notifications</b>: This API will return 20 latest notifications each time which will be divided into a few categories (more on categories later below).</li>
            <li><b>Update Notification Status</b>: This API will update the <CodeBadge>seen</CodeBadge> status of the notifications based on what category notifications are opened by the user.</li>
        </ul>
        <p>
            There will be <CodeBadge>4</CodeBadge> notfication categories as given below:
            <ol className="list-outside list-decimal text-sm leading-7 px-5 py-1 font-semibold">
                <li>account</li>
                <li>primary</li>
                <li>reward</li>
                <li>order</li>
            </ol>
            These category values are constant. Each notification object will contain a <CodeBadge>category</CodeBadge> property having one of the above category value.
        </p>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Get User Notifications</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/user/notifications/get</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "notification_data": {
        "_id": "65ddb74ad5d42b2477361d98",
        "user_id": "65ddb7496a09ca290bec88b2",
        "__v": 0,
        "createdAt": "2024-02-27T10:19:54.298Z",
        "notifications": [
            {
                "category": "account",
                "heading": "Login",
                "message": "You logged in to your Urban Fits account through Windows10/Opera at 21-6-2024 12:41",
                "mini_msg": "You logged in to your Urban Fits account at 21-6-2024 12:41",
                "seen": false,
                "timestamp": "2024-06-21T07:41:07.356Z",
                "_id": "66752e9335c91168eaed1d79"
            },
            {
                "category": "account",
                "heading": "Login",
                "message": "You logged in to your Urban Fits account through Windows10/Chrome at 21-6-2024 7:35",
                "mini_msg": "You logged in to your Urban Fits account at 21-6-2024 7:35",
                "seen": false,
                "timestamp": "2024-06-21T07:35:26.472Z",
                "_id": "66752d3f02248364f6173e14"
            },
            {
                "category": "reward",
                "heading": "Congratulations!!",
                "message": "You have won a lot of points",
                "mini_msg": "You have won a lot of points",
                "seen": true,
                "timestamp": "2024-05-25T15:23:44.656Z",
                "_id": "66520280d505188bced40359"
            },
            // And so on...
        ],
        "updatedAt": "2024-06-21T07:41:07.359Z"
    }
}`}</CodeBlock>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Update Notifications Seen Status</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>/user/notifications/update</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">This API will be needing just a <b>url query parameter</b> of category name. Specify a category whose notifications status you want to update to <CodeBadge>seen</CodeBadge>. For instance the user opened the <CodeBadge>account</CodeBadge> category notifications from the client then to update all the account category notifications to seen status, the url will be like this:</p>
            <CodeBlock>{`/user/notifications/update?category=account`}</CodeBlock>


            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <p className="my-2">The whole updated notifications object won't be returned in the response. You will have to update it manually on the client side to <CodeBadge>seen</CodeBadge> status as soon as user opens the notifications from inbox for a better and fast UX.</p>
            <CodeBlock>{`{
        success: true,
        msg: "Notifications of acccount categroy status updated to seen"
}`}</CodeBlock>
            <p className="my-2">
                Although for receiving the real time notifications, you need to set up the <b>Pusher Client SDK</b>. Please first refer to the <Link href="/getting-started/socket-setup" className="text-blue-600 underline underline-offset-4 whitespace-nowrap">Socket Setup</Link> before moving further. <br />
                Here are few more <b>important</b> things about some of the notification object properties to keep in mind:
            </p>
            <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
                <li><CodeBadge>heading</CodeBadge> The heading property is the short title to display with the actual notificaiton message.</li>
                <li><CodeBadge>mini_msg</CodeBadge> The mini_msg property will have a short and concise message to show in the in app toast notifications for a compact and clean UI.</li>
                <li><CodeBadge>message</CodeBadge> This will be the detailed message about any action or operation describing it in detail. It can as short as one line and as long as a paragraph. So avoid showing this message in toasters.</li>
                <li><CodeBadge>href</CodeBadge> This is a hyper referance url, an optional property. Only some of the notifications will have it. Embed this link with the notifications in the app who have this.</li>
            </ul>

            <p className="my-2">The notification data you will receive in the <CodeBadge>new-notification</CodeBadge> event will have 2 mandatory properties and 1 optional property. The property names and there information is given below:                </p>
            <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
                <li><CodeBadge>notify</CodeBadge> : <CodeBadge color="text-green-400">Mandatory</CodeBadge> | This is a <b>boolean</b> property which will tell whether to show the notification in the toast or not. If its false then you just have to store it along with other inbox notifications, skipping the display of it in a notification toast.</li>
                <li><CodeBadge>notification_data</CodeBadge> : <CodeBadge color="text-green-400">Mandatory</CodeBadge> | This will be the notification data object containing all the necessary properties.</li>
                <li><CodeBadge>user_data</CodeBadge> : <CodeBadge color="text-yellow-400">Optional</CodeBadge> | This user data object will be sent when there's an update occured in the user's data. On getting this data, update the user data in the app.</li>
            </ul>

        </section>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/user-endpoints/user-addresses">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Addresses</Button>
            </Link>
            <Link href="/products/get-products">
                <Button variant="outline">Products / Get Products &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}