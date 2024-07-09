import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Search API</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This API will help search for the products and available categories</p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
        <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/search</CodeBadge></p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
        <p className="leading-7 my-2">
            This API expects a mandatory <CodeBadge>q</CodeBadge> query parameter which will be the search keyword. For example, to search for "t-shirt" use the following payload:
            <CodeBadge>/search?q=t-shirt</CodeBadge>
        </p>

        <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
        <p className="my-2">In the response, matching products and categories will be returned but the products will be given precedence.</p>
        <CodeBlock>{`[
    {
        "name": {
            "en": "Jacket wıth dress set",
            "ar": "سترة مع فستان مجموعة"
        },
        "description": {
            "en": "Fabric:%86 RAYON %14 POLYESTER Chiffon:%100 POLYESTER  Liner: %5 LYCRA %95 VİSCON",
            "ar": "قماش:% 86 رايون% 14 بوليستر شيفون:% 100 بوليستر بطانة:% 5 ليكرا ٪ 95 فيسكون"
        },
        "seo_details": {
            "title": "Jacket wıth dress set ",
            "description": "Fabric:%86 RAYON %14 POLYESTER Chiffon:%100 POLYESTER  Liner: %5 LYCRA %95 VİSCON",
            "meta_keywords": "women, top, jacket"
        },
        "shipping_details": {
            "width": "8",
            "height": "18",
            "weight": 400
        },
        "_id": "65690d1d37972ff051acea88",
        "cover_image": "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea88.webp",
        "price": 1190,
        "uf_points": null,
        "sale_price": null,
        "categories": [
            "64a59d5816b4c91fa1967b2e"
        ],
        "slug": "jacket-with-dress-set/",
        "tags": [
            "women",
            "top",
            "jacket"
        ],
        "active": false,
        "ratings": 0,
        "variants": [
            {
                "color": "#111032",
                "color_name": "Petrol grey",
                "images": [
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea89/0.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea89/1.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea89/2.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea89/3.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea89/4.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea89/5.webp"
                ],
                "sizes": [
                    {
                        "size": "S",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaa5"
                    },
                    {
                        "size": "M",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaa6"
                    },
                    {
                        "size": "L",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaa7"
                    }
                ],
                "stock": 30,
                "_id": "65690d2837972ff051aceaa4",
                "sku": "UF1000-#111032"
            },
            {
                "color": "#000000",
                "color_name": "Black",
                "images": [
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea8d/0.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea8d/1.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea8d/2.webp"
                ],
                "sizes": [
                    {
                        "size": "S",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaa9"
                    },
                    {
                        "size": "M",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaaa"
                    },
                    {
                        "size": "L",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaab"
                    }
                ],
                "stock": 30,
                "_id": "65690d2837972ff051aceaa8",
                "sku": "UF1000-#000000"
            },
            {
                "color": "#9e7761",
                "color_name": "Stone",
                "images": [
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea91/0.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea91/1.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea91/2.webp",
                    "/product-images/65690d1d37972ff051acea88/65690d1d37972ff051acea91/3.webp"
                ],
                "sizes": [
                    {
                        "size": "S",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaad"
                    },
                    {
                        "size": "M",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaae"
                    },
                    {
                        "size": "L",
                        "quantity": 10,
                        "_id": "65690d2837972ff051aceaaf"
                    }
                ],
                "stock": 30,
                "_id": "65690d2837972ff051aceaac",
                "sku": "UF1000-#9e7761"
            }
        ],
        "bundle_items": [],
        "createdAt": "2023-11-30T22:30:53.392Z",
        "updatedAt": "2024-05-12T11:31:10.934Z",
        "__v": 0,
        "sku_number": 1000
    },
    // Other mathcing products
    {
        "name": {
            "en": "women",
            "ar": "نساء"
        },
        "description": {
            "en": "This is a clothing category for women of the age above 18",
            "ar": "هذه فئة الملابس للنساء اللاتي تزيد أعمارهن عن 18 عامًا"
        },
        "_id": "64a59d5816b4c91fa1967b2e",
        "slug": "women/",
        "path": "women/",
        "children": [
            "64b5391e2c57908f1e94dc27"
        ],
        "createdAt": "2023-07-05T16:42:00.778Z",
        "updatedAt": "2024-05-16T20:47:35.378Z",
        "__v": 0
    },
    {
        "name": {
            "en": "hand bags",
            "ar": "حقائب يد"
        },
        "description": {
            "en": "This is a subcategory of the Women accessories category.",
            "ar": "هذه فئة فرعية من فئة اكسسوارات النساء"
        },
        "_id": "64b3f4f02c57908f1e94d9a2",
        "slug": "hand-bags/",
        "path": "women/accessories/hand-bags/",
        "children": [],
        "createdAt": "2023-07-16T13:47:28.428Z",
        "updatedAt": "2024-05-16T20:47:35.601Z",
        "__v": 0,
        "parent": "64b5391e2c57908f1e94dc27"
    },
    {
        "name": {
            "en": "Accessories",
            "ar": "إكسسوارات"
        },
        "description": {
            "en": "sub category of women category which will contain accessories sales for women.",
            "ar": "فئة فرعية من فئة النساء والتي ستحتوي على مبيعات الإكسسوارات للنساء"
        },
        "_id": "64b5391e2c57908f1e94dc27",
        "slug": "accessories/",
        "path": "women/accessories/",
        "parent": "64a59d5816b4c91fa1967b2e",
        "children": [
            "64b3f4f02c57908f1e94d9a2"
        ],
        "createdAt": "2023-07-17T12:50:38.438Z",
        "updatedAt": "2024-05-16T20:47:35.823Z",
        "__v": 0
    } // And the matching categories
]`}</CodeBlock>

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