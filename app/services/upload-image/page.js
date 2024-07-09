import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Upload Image</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            We are using the <b>AWS - S3 bucket</b> to store all the media of the website. Our bucket name is <CodeBadge>urban-fits</CodeBadge>. Please refer to the AWS documentation as well for the context.<br />
            There are different ways to upload the images on AWS S3 but here we're using the most suitable way which involves <CodeBadge>2</CodeBadge> steps:
        </p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li>First we'll get a presigned url from AWS which will be signed for a limited time for securely upload the image.</li>
            <li>Secondly we will upload the actual image by sending it to that <b>Presigned URL</b>, using it as an API.</li>
        </ul>
        So, it comes to 2 APIs:
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Get Presigned URL</b></li>
            <li><b>Upload image file on Presigned URL</b></li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">1. Get Presigned URL</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/S3/signed-url</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <div>It will require you a mandatory query nameed <CodeBadge>file_key</CodeBadge>. <br />
                You need to enter the relative path within the bucket file system where you want to host the respected file. For example the path for uploading the user profile pictures is specific and should be <b>strictly</b> followed i.e
                &nbsp;<CodeBadge>user-profiles/[user_id]</CodeBadge>. <br />
                In this previous mentioned path, the user id should suffixed e.g the <b>user id</b> is <CodeBadge>651ab014f10bff23784dd8e8</CodeBadge> then the path will look like this: <CodeBadge>user-profiles/651ab014f10bff23784dd8e8</CodeBadge>.
                And finally the API URL will be like this: <br /> <br />
                <div className="text-center mx-auto"><CodeBadge color="text-green-500">/S3/signed-url?file_key=user-profiles/651ab014f10bff23784dd8e8</CodeBadge></div> <br /> <br />
                So in this case we have requested a presigned url from AWS S3 service which will automatically host the file on the specified path for which we requested it.
            </div>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "uploadUrl": "https://urban-fits.s3.ap-south-1.amazonaws.com/user-profiles/651ab014f10bff23784dd8e8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAWXH553KR4CPX7D3R%2F20240625%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240625T220903Z&X-Amz-Expires=900&X-Amz-Signature=735f613109b33c6f1fc16c7b8ae3062c318fdab683a39facf22aa0bc9d3e0930&X-Amz-SignedHeaders=host&x-id=PutObject"
}`}</CodeBlock>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Upload image on Presigned URL</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">PUT</CodeBadge> <CodeBadge>https://urban-fits.s3.ap-south-1.amazonaws.com/user-profiles/651ab014f10bff23784dd8e8...</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">
                Now in the body of request, simply put the file as payload and upload the file. The API will return the confirmation of file being successfully uploaded. And after the confirmation, you can just update the file url wherever you need to update in our server as you know the file url was what we have already requested the presigned url for which in this case will be <CodeBadge>user-profiles/651ab014f10bff23784dd8e8</CodeBadge> . <br /> <br />
                And for using the image in application, you can prepend the <b>base image url</b> to our actual file url just as mentioned in the <Link scroll={true} href="/getting-started/api-prerequisites#images-usage" className="text-blue-500 underline underline-offset-2 whitespace-nowrap">API Prerequisites : Images Usage</Link>
            </p>
        </section>

        {/* <div className="w-full mt-20 flex justify-between">
            <Link href="/user-endpoints/get-me">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Get Me API</Button>
            </Link>
            <Link href="/user-endpoints/user-notifications">
                <Button variant="outline">User Notifications &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div> */}
    </>
}