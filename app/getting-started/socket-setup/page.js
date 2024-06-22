import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";


export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Socket Setup</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            For receiving and handling real time events, we're using the <b>Pusher</b> service;
        </p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Pusher Channels</b>: For handling in app real time events. Refer the documentation here <Link href="https://pusher.com/docs/channels" className="text-blue-600 underline underline-offset-4">Pusher Channels Docs</Link>.</li>
            <li><b>Pusher Beams</b>: For handling push notifications. Refer the documentation here <Link href="https://pusher.com/docs/beams" className="text-blue-600 underline underline-offset-4">Pusher Beams Docs</Link>.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Pusher Channels Setup</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-4">
            To setup the pusher channels for in app real time events, you'll need to first configure the <b>Pusher SDK</b> according to the development plaform and secondly the pusher app credentials which will be provided in an <CodeBadge>ENV</CodeBadge> file. <br />
            After you have configured the <b>Pusher Client SDK</b>, you'll have to do 2 important things:
        </p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Subscribe to Presence Channel</b> to inform the server about the user's online status and activities monitering.</li>
            <li><b>Subscribe to Personal Channel</b> for receiving the real time events such as notifications.</li>
        </ul>

        <section className="container">
            <h3 className="mt-4 font-bold text-xl tracking-tight">a. Subscribe Presence Channel</h3>
            <p className="leading-7 [&:not(:first-child)]:mt-4">First initialize a <b>Pusher Client</b> instance using the Pusher Client SDK by sending the following data. You will have to first authenticate the user from our server as it's required by the Pusher to first authorize the <b>Presence Channels</b>. Provide the folloing endpoint and query parameters to the pusher instance configuration:</p>
            <h4 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h4>
            <CodeBadge>/user/notifications/get</CodeBadge>
            <h4 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Query Parameters</h4>
            <ul className="list-outside list-disc text-sm leading-7 px-5 py-1">
                <li><CodeBadge>user_id</CodeBadge> containing the unique user's ID.</li>
                <li><CodeBadge>email</CodeBadge> containing the user email address.</li>
            </ul>
            <p className="leading-7 [&:not(:first-child)]:mt-4">Then after successfully initializing the Pusher Client instance, subscribe every user to the presence channel <CodeBadge>presence-urbanfits</CodeBadge> right when the app starts. And also remember to clean it up by unsubscirbing when the app unloads/unmounts.</p>

            <h3 className="mt-6 font-bold text-xl tracking-tight">b. Subscribe Personal Channel</h3>
            <p className="leading-7 [&:not(:first-child)]:mt-4">Here are the steps to subscribe to the presence channel:</p>
            <ul className="list-outside list-disc text-sm leading-7 px-5 py-1">
                <li>Initialize the Pusher Client instance by providing the <CodeBadge>cluster</CodeBadge> name value.</li>
                <li>Subscribe to the user channel. The channel name should be comprised of the <b>User ID</b> prefixed by <CodeBadge>uf-user_</CodeBadge> . For example if the user id is <CodeBadge>65ddb7496a09ca290bec88b2</CodeBadge> then the channel name would be <CodeBadge>uf-user_65ddb7496a09ca290bec88b2</CodeBadge> .</li>
                <li>And lastly bind a notification event listener callback. The event name for notification is <CodeBadge>new-notification</CodeBadge> .</li>
            </ul>
        </section>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">2. Pusher Beams Setup</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-4">
            To setup the <b>Pusher Beams</b> you need to:
        </p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-1">
            <li>Initialize the Beams Client instance by providing the <CodeBadge>instanceId</CodeBadge>.</li>
            <li>Start the beams client and add the device interest named after the <b>user's ID</b> e.g. <CodeBadge>65ddb7496a09ca290bec88b2</CodeBadge>.</li>
            <li>And setup the <b>Pusher Service Worker</b>. Follow the setup steps for mobile by referring the <Link href="https://pusher.com/docs/beams" className="text-blue-600 underline underline-offset-4">Pusher Beams Docs</Link> accordingly.</li>
        </ul>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/getting-started/api-prerequisites">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;API Prerequisites</Button>
            </Link>
            <Link href="/getting-started/github-repositories">
                <Button variant="outline">Github Repositories &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}
