import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    const obj = {
        "product_id": "64a59d5816b4c91fa1967b2e", // | Required | The respected product, the user want to add review for.
        "rating": 4, // | Required | Any non-decimal number between 1 and 5, 1 and 5 inclusive.
        "review": "The product quality is good but the delivery was a little late.", // | Optional | The review/comment of the user about the product. Max 500 characters.
        "images": [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg"
        ] // | Optional | An array of image URLs. Maximum 5 images are allowed.
    }
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Product Reviews APIs</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">There two <CodeBadge>(2)</CodeBadge> APIs for the product reviews:</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Add Product review</b></li>
            <li><b>Get Product reviews</b></li>
        </ul>

        <h2 id="get-products-by-category" className="mt-6 font-bold text-2xl tracking-tight">1. Add Product review</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">POST</CodeBadge> <CodeBadge>/products/reviews/add</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="mb-2">The payload properties and their respctive conditions are mentioned in code comments along below, please read the comments carefully. Here's an example review pauload.</p>
            <CodeBlock>{`{
        "product_id": "64a59d5816b4c91fa1967b2e",  // | Required | The respected product, the user want to add review for.
        "rating": 4,  // | Required | Any non-decimal number between 1 and 5, 1 and 5 inclusive.
        "review": "The product quality is good but the delivery was a little late.",  // | Optional | The review/comment of the user about the product. Max 500 characters.
        "images": [  // | Optional | An array of image URLs. Maximum 5 images are allowed.
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg"
        ]
}`}</CodeBlock>
            <p className="my-2">Remember that if the <CodeBadge>rating</CodeBadge> value is provided in a decimal number, the server will automatically round it off to its next highest non-decimal value. <br />
                For example if <CodeBadge>rating</CodeBadge>'s value is <CodeBadge>3.2</CodeBadge> or <CodeBadge>3.7</CodeBadge>, it will be converted to <CodeBadge>4</CodeBadge>.
            </p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
        success: true,
        msg: "Thanks for your review! It would help others to know about the product.",
        review: {
                "_id": "6683df8f3985b340027b164a",
                "user_id": "65ddb7496a09ca290bec88b2",
                "images": [
                        "https://example.com/image1.jpg",
                        "https://example.com/image2.jpg"
                ],
                "product_id": "656a0cc84839597ecab95819",
                "rating": 4,
                "review": "The product quality is quite good and the delivery time is also as promised. I would recommend it!",
                "createdAt": "2024-07-02T11:07:58.955Z",
                "updatedAt": "2024-07-02T11:09:40.664Z"
                "__v": 0,
        }
}`}</CodeBlock>
            <p className="my-4">After adding a review successfully, a notification will be delivered to the user's notification inbox in category <CodeBadge>primary</CodeBadge>.</p>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Get Product reviews</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/products/reviews/get</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">There are 2 Query parameters for this API. You have to send a mandatory <b>Query Parameter</b>: <CodeBadge>product_id</CodeBadge> containing the id of the product. And an optional query parameter <CodeBadge>page</CodeBadge>, by default it's value will be considered <CodeBadge>1</CodeBadge> if not provided. <br />
                This API also has pagination with constant limit of <CodeBadge>10</CodeBadge>.
            </p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "msg": "",
    "reviews": [
        {
            "_id": "6683df8f3985b340027b164a",
            "user_id": {
                "_id": "65ddb7496a09ca290bec88b2",
                "username": "_saad_",
                "email": "binarshadsaad6@gmail.com",
                "firstname": "Saad",
                "gender": "male",
                "lastname": "Bin Arshad"
            },
            "__v": 0,
            "createdAt": "2024-07-02T11:07:58.955Z",
            "images": [],
            "product_id": "656a0cc84839597ecab95819",
            "rating": 4,
            "review": "The product quality is quite good and the delivery time is also as promised. I would recommend it!",
            "updatedAt": "2024-07-02T11:09:40.664Z"
        }
        // Other 9 reviews if exist.
    ],
    "total_pages": 1,
    "total_reviews": 1, // In this case, only 1 review exists for this product.
    "current_page": 1,
    "limit": 10, // In this API, the limit will always be 10 and cannot be changed.
    "average_rating": 4 // It will be the average rating i.e sum of all ratings devided by total number of reviews.
}`}</CodeBlock>
        </section>

        <div className="w-full mt-20 flex justify-between">
            <Link href="/products/get-products">
                <Button variant="outline"><ChevronLeft className="w-5" />&nbsp;&nbsp;Get Products</Button>
            </Link>
            <Link href="/services/upload-image">
                <Button variant="outline">Services / Upload Image &nbsp;&nbsp; <ChevronRight className="w-5" /></Button>
            </Link>
        </div>
    </>
}