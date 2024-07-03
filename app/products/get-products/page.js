import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CodeBadge from "@/components/ui/code-badge";
import CodeBlock from "@/components/code-block";

export default function page() {
    return <>
        <h1 className="font-bold text-4xl tracking-tight">Get Product(s) APIs</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">There are four <CodeBadge>(4)</CodeBadge> APIs to get the products in different scenarios:</p>
        <ul className="list-outside list-decimal text-sm leading-7 px-5 py-3">
            <li><b>Get Products by Category ID</b>: This API will be used to get the products based on the desired category.</li>
            <li><b>Get One Product by ID</b>: This API will be used to get a single product by using the <CodeBadge>product id</CodeBadge>.</li>
            <li><b>Get Sale Products</b>: This API will return the sale products since it's not a category but the sale products have a different criteria.</li>
            <li><b>Get Products by IDs</b>: And this API will be used to get the products corresponding to multiple IDs provided to it.</li>
        </ul>

        <h2 className="mt-6 font-bold text-2xl tracking-tight">Product SKU calculation</h2>
        <p className="mt-2">
            Now there is a very <b>important</b> thing about the product object which is its <b>SKU Number</b>. Each product object will have a <CodeBadge>sku_number</CodeBadge> property at the top level and a <CodeBadge>sku</CodeBadge> property in its each variant object which both will be partial numbers and aren't ready to use. For user's point of view, one product to add in the cart will differentiated by a particular size of a specific variant. <br />
            When a user adds a product to the cart, you will have to put the size symbol at the end of the respected variant's sku. <br />
            For example the user selects a product with variant white of size <CodeBadge>L</CodeBadge> (Large), then the actual sku will be <CodeBadge>UF1014-#ffffff-LL</CodeBadge>. The size symbol have to be appended 2 times in the end.
        </p>

        <h2 id="get-products-by-category" className="mt-6 font-bold text-2xl tracking-tight">1. Get Products by Category ID</h2>
        <section className="container">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/products/get/bycategory</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p>There will be <CodeBadge>5</CodeBadge> URL Query parameters as payload:</p>

            <div className="w-full mt-4 grid grid-cols-6 border rounded-md">
                <b className="px-4 py-5 border-b">Query Parameter</b>
                <b className="px-4 py-5 border-b">Required</b>
                <b className="px-4 py-5 border-b">Default Value</b>
                <b className="col-span-3 px-4 py-5 border-b">About</b>

                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"> <CodeBadge flexDefault color="text-black dark:text-white">id</CodeBadge> </div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"><CodeBadge flexDefault>yes</CodeBadge></div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"><CodeBadge flexDefault>undefined</CodeBadge></div>
                <div className="col-span-3 border-b px-4 py-2">The category id you want to get the products for. For example: <CodeBadge color="text-gray-500 dark:text-gray-200">65ddb7496a09ca290bec88b2</CodeBadge></div>

                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"> <CodeBadge flexDefault color="text-black dark:text-white">min_price</CodeBadge> </div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"><CodeBadge flexDefault>partial</CodeBadge></div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2">minimum available price in current returned products</div>
                <div className="col-span-3 border-b px-4 py-2">The minimum available price in current page products. At first time you won't have to provide it but the server will give you min-price in page 1 and for further pages you have to send the it for comparison, and then server will give you the available min-price in 2 pages. It is intended for the filter on client side.</div>

                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"> <CodeBadge flexDefault color="text-black dark:text-white">max_price</CodeBadge> </div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"><CodeBadge flexDefault>partial</CodeBadge></div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2">maximum available price in current returned products</div>
                <div className="col-span-3 border-b px-4 py-2">The maximum available price in current page products. Handle it the same way as explained for the minimum price.</div>

                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"> <CodeBadge flexDefault color="text-black dark:text-white">page</CodeBadge> </div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"><CodeBadge flexDefault>no</CodeBadge></div>
                <div className="flex-1 w-full h-full flex items-center border-b px-4 py-2"><CodeBadge flexDefault>1</CodeBadge></div>
                <div className="col-span-3 border-b px-4 py-2">The page number you want to get the products of according to the pagination. It should be a non-decimal integer.</div>

                <div className="flex-1 w-full h-full flex items-center px-4 py-2"> <CodeBadge flexDefault color="text-black dark:text-white">limit</CodeBadge> </div>
                <div className="flex-1 w-full h-full flex items-center px-4 py-2"><CodeBadge flexDefault>no</CodeBadge></div>
                <div className="flex-1 w-full h-full flex items-center px-4 py-2"><CodeBadge flexDefault>30</CodeBadge></div>
                <div className="col-span-3 px-4 py-2">A non-decimal integer which specifies the limit of number of products you will get in per-page.</div>
            </div>

            <p className="mt-4 mb-6">
                Now let's say we make a request by using the women's category id: <CodeBadge>/products/get/bycategory?id=64a59d5816b4c91fa1967b2e</CodeBadge> <br />
                In this case the page will defaulted 1, limit will be defaulted to 30, min_price will be defaulted to minimum available price in these 30 products and max_price will be the maximum price available in these 30 products. <br />
                Let's take a look at the response:
            </p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "msg": "Products found with the category of id 64a59d5816b4c91fa1967b2e",
    "currentPage": 1,
    "totalPages": 1,
    "products": [
        {
            "name": {
                "en": "Women Collar Solid Color Pocket Cardigan",
                "ar": "كارديجان نسائي بياقة وجيب لون صلب"
            },
            "description": {
                "en": "%65 RAYON % 35 POLYAMID",
                "ar": "% 65 رايون ٪ 35 بولي أميد"
            },
            "seo_details": {
                "title": "Women Collar Solid Color Pocket Cardigan",
                "description": "%65 RAYON % 35 POLYAMID",
                "meta_keywords": "women, cardigan"
            },
            "shipping_details": {
                "width": "8",
                "height": "73",
                "weight": 400
            },
            "_id": "656a339e560eeb201a25d23a",
            "cover_image": "/product-images/656a339e560eeb201a25d23a/656a339e560eeb201a25d23a.webp",
            "price": 626,
            "uf_points": 350,
            "sale_price": null,
            "categories": [
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
                }
            ],
            "slug": "women-collar-solid-color-pocket-cardigan/",
            "tags": [
                "women",
                "cardigan"
            ],
            "active": false,
            "ratings": 0,
            "variants": [
                {
                    "color": "#ffffff",
                    "color_name": "White",
                    "images": [
                        "/product-images/656a339e560eeb201a25d23a/656a339e560eeb201a25d23b/0.webp",
                        "/product-images/656a339e560eeb201a25d23a/656a339e560eeb201a25d23b/1.webp",
                        "/product-images/656a339e560eeb201a25d23a/656a339e560eeb201a25d23b/2.webp"
                    ],
                    "sizes": [
                        {
                            "size": "M",
                            "quantity": 10,
                            "_id": "656a33a2560eeb201a25d244"
                        }
                    ],
                    "stock": 10,
                    "_id": "656a33a2560eeb201a25d243",
                    "sku": "UF1014-#ffffff"
                }
            ],
            "bundle_items": [],
            "createdAt": "2023-12-01T19:27:26.639Z",
            "updatedAt": "2024-05-12T11:31:14.245Z",
            "__v": 0,
            "sku_number": 1014
        }
        // and 29 more products if exist...
    ],
    "min_price": 349,
    "max_price": 1190,
    "available_colors": [
        {
            "color": "#000000",
            "color_name": "Black"
        },
        {
            "color": "#ffffff",
            "color_name": "White"
        },
        {
            "color": "#767387",
            "color_name": "Mink"
        },
        {
            "color": "#E1A822",
            "color_name": "Camel"
        },
        {
            "color": "#01c63c",
            "color_name": "Green"
        },
        {
            "color": "#f25e07",
            "color_name": "Orange"
        },
        {
            "color": "#d5a22a",
            "color_name": "Yellow"
        },
        {
            "color": "#b0b0b0",
            "color_name": "Grey"
        },
        {
            "color": "#EA3838",
            "color_name": "Red"
        },
        {
            "color": "#e2dfc1",
            "color_name": "Stone"
        },
        {
            "color": "#14133a",
            "color_name": "Dark Blue"
        },
        {
            "color": "#757575",
            "color_name": "Dark Grey"
        },
        {
            "color": "#EA3838",
            "color_name": "Carol"
        },
        {
            "color": "#D97133",
            "color_name": "Honey Foam"
        },
        {
            "color": "#212236",
            "color_name": "Petrol"
        },
        {
            "color": "#111032",
            "color_name": "Petrol grey"
        }
    ],
    "available_sizes": [
        "M",
        "L",
        "Xl",
        "S"
    ]
}`}</CodeBlock>

            <p className="my-4">
                In the response, 30 products will be returned which come under the women category or any subcategory of the women. First the server will look at the top level of the women category and if the number of products still deosn't satisfies then it go down the hierarchy with sub-categories. <br />
                After getting the respected category products according to provided or default pagination and limit, the server will calculate the the <b>minimum</b> and <b>maximum</b> available prices in the current batch of the products; in this case 30. <br />
                Then the server will filter out all the unique available <b>colors</b> in current batch (of 30 products) and then the available <b>sizes</b>. <br /> <br />
                All this calculation is intended to show the correct and smooth filtering on the client side so the user know that each of these filteration options must have some matching products. And in addition, the users will have a faster experience with filteration.
            </p>
        </section>

        <h2 className="mt-10 font-bold text-2xl tracking-tight">2. Get One Product by ID</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/products/get/one</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">You have to send a mandatory <b>Query Parameter</b>: <CodeBadge>id</CodeBadge>. It will be the product id which you want to get the details for.</p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "success": true,
    "msg": "Product found with the id 656a0cc84839597ecab95819",
    "product": {
        "name": {
            "en": "Waist Fabric Belt Knitwear Tunic",
            "ar": "قميص بحزام من الصوف"
        },
        "description": {
            "en": "%65 RAYON % 35 POLYAMID/ %100 POLYESTER",
            "ar": "% 65 رايون ٪ 35 بولي أميد / ٪ 100 بوليستر"
        },
        "seo_details": {
            "title": "Waist Fabric Belt Knitwear Tunic",
            "description": "%65 RAYON % 35 POLYAMID/ %100 POLYESTER",
            "meta_keywords": "women, fabric dress, knitwear"
        },
        "shipping_details": {
            "width": "8",
            "height": "72",
            "weight": 430
        },
        "_id": "656a0cc84839597ecab95819",
        "cover_image": "/product-images/656a0cc84839597ecab95819/656a0cc84839597ecab95819.webp",
        "price": 425,
        "uf_points": 350,
        "sale_price": null,
        "categories": [
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
                    "en": "Latest Arrival",
                    "ar": "أحدث الوافدين"
                },
                "description": {
                    "en": "Urban Fits latest arrivals.",
                    "ar": "أحدث الوافدين إلى Urban Fits."
                },
                "_id": "65526c04994e55da77576df6",
                "slug": "latest-arrival/",
                "path": "latest-arrival/",
                "parent": null,
                "children": [],
                "createdAt": "2023-11-13T18:33:40.077Z",
                "updatedAt": "2024-05-16T20:47:37.394Z",
                "__v": 0
            }
        ],
        "slug": "waist-fabric-belt-knitwear-tunic/",
        "tags": [
            "women",
            "fabric dress",
            "knitwear"
        ],
        "active": false,
        "ratings": 0,
        "variants": [
            {
                "color": "#000000",
                "color_name": "Black",
                "images": [
                    "/product-images/656a0cc84839597ecab95819/656a0cc84839597ecab9581a/0.webp",
                    "/product-images/656a0cc84839597ecab95819/656a0cc84839597ecab9581a/1.webp"
                ],
                "sizes": [
                    {
                        "size": "S",
                        "quantity": 10,
                        "_id": "656a0cce4839597ecab9582f"
                    },
                    {
                        "size": "M",
                        "quantity": 10,
                        "_id": "656a0cce4839597ecab95830"
                    },
                    {
                        "size": "L",
                        "quantity": 10,
                        "_id": "656a0cce4839597ecab95831"
                    }
                ],
                "stock": 30,
                "_id": "656a0cce4839597ecab9582e",
                "sku": "UF1011-#000000"
            },
            {
                "color": "#01c63c",
                "color_name": "Green",
                "images": [
                    "/product-images/656a0cc84839597ecab95819/656a0cc84839597ecab9581e/0.webp",
                    "/product-images/656a0cc84839597ecab95819/656a0cc84839597ecab9581e/1.webp",
                    "/product-images/656a0cc84839597ecab95819/656a0cc84839597ecab9581e/2.webp"
                ],
                "sizes": [
                    {
                        "size": "S",
                        "quantity": 10,
                        "_id": "656a0cce4839597ecab95833"
                    },
                    {
                        "size": "M",
                        "quantity": 10,
                        "_id": "656a0cce4839597ecab95834"
                    },
                    {
                        "size": "L",
                        "quantity": 10,
                        "_id": "656a0cce4839597ecab95835"
                    }
                ],
                "stock": 30,
                "_id": "656a0cce4839597ecab95832",
                "sku": "UF1011-#01c63c"
            }
        ],
        "bundle_items": [],
        "createdAt": "2023-12-01T16:41:44.734Z",
        "updatedAt": "2024-05-12T11:31:13.583Z",
        "__v": 0,
        "sku_number": 1011
    }
}`}</CodeBlock>
            <p className="my-4">In the response you will get the full detailed product object. It will have the full objects of the categories to which it was assigned, all the variants, each variant containing all available colors, sizes and quanitity of them available for each size.</p>
        </section>
        <h2 className="mt-10 font-bold text-2xl tracking-tight">3. Get Sale Products</h2>
        <section className="container flex flex-col">
            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Endpoint</h3>
            <p><CodeBadge color="text-green-400">GET</CodeBadge> <CodeBadge>/products/get/sales</CodeBadge></p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Payload</h3>
            <p className="leading-7 my-2">This API will have the same <b>Query Parameters</b> as explained above in table for the <Link href="#get-products-by-category" className="text-blue-500 underline underline-offset-2">Get Products by Category ID API</Link> except the <CodeBadge>id</CodeBadge> parameter, its not required.</p>

            <h3 className="mt-4 mb-2 font-semibold text-lg tracking-tight">Response</h3>
            <CodeBlock>{`{
    "length": 4,
    "totalProducts": 4,
    "totalPages": 1,
    "currentPage": 1,
    "products": [
        {
            "name": {
                "en": "Waist Knitwear Belt Solid Color Dress",
                "ar": "فستان ذو حزام من الصوف واللون الصلب"
            },
            "description": {
                "en": "%65 RAYON % 35 POLYAMID",
                "ar": "% 65 رايون ٪ 35 بولي أميد"
            },
            "seo_details": {
                "title": "Waist Knitwear Belt Solid Color Dress",
                "description": "%65 RAYON % 35 POLYAMID",
                "meta_keywords": "women, belt, knitwear"
            },
            "shipping_details": {
                "width": "8",
                "height": "72",
                "weight": 450
            },
            "_id": "6569fe0d6edd1997d14d9aea",
            "cover_image": "/product-images/6569fe0d6edd1997d14d9aea/6569fe0d6edd1997d14d9aea.webp",
            "price": 425,
            "uf_points": null,
            "sale_price": 399,
            "categories": [
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
                }
            ],
            "slug": "waist-knitwear-belt-solid-color-dress/",
            "tags": [
                "women",
                "belt",
                "knitwear"
            ],
            "active": false,
            "ratings": 0,
            "variants": [
                {
                    "color": "#14133a",
                    "color_name": "Dark Blue",
                    "images": [
                        "/product-images/6569fe0d6edd1997d14d9aea/6569fe0d6edd1997d14d9aeb/0.webp",
                        "/product-images/6569fe0d6edd1997d14d9aea/6569fe0d6edd1997d14d9aeb/1.webp",
                        "/product-images/6569fe0d6edd1997d14d9aea/6569fe0d6edd1997d14d9aeb/2.webp"
                    ],
                    "sizes": [
                        {
                            "size": "S",
                            "quantity": 10,
                            "_id": "6569fe18b56ee511ddcf6e60"
                        },
                        {
                            "size": "M",
                            "quantity": 10,
                            "_id": "6569fe18b56ee511ddcf6e61"
                        },
                        {
                            "size": "L",
                            "quantity": 10,
                            "_id": "6569fe18b56ee511ddcf6e62"
                        }
                    ],
                    "stock": 30,
                    "_id": "6569fe18b56ee511ddcf6e5f",
                    "sku": "UF1007-#14133a"
                },
                {
                    "color": "#757575",
                    "color_name": "Dark Grey",
                    "images": [
                        "/product-images/6569fe0d6edd1997d14d9aea/6569fe0d6edd1997d14d9aef/0.webp",
                        "/product-images/6569fe0d6edd1997d14d9aea/6569fe0d6edd1997d14d9aef/1.webp",
                        "/product-images/6569fe0d6edd1997d14d9aea/6569fe0d6edd1997d14d9aef/2.webp"
                    ],
                    "sizes": [
                        {
                            "size": "S",
                            "quantity": 10,
                            "_id": "6569fe18b56ee511ddcf6e64"
                        },
                        {
                            "size": "M",
                            "quantity": 10,
                            "_id": "6569fe18b56ee511ddcf6e65"
                        },
                        {
                            "size": "L",
                            "quantity": 10,
                            "_id": "6569fe18b56ee511ddcf6e66"
                        }
                    ],
                    "stock": 30,
                    "_id": "6569fe18b56ee511ddcf6e63",
                    "sku": "UF1007-#757575"
                }
            ],
            "bundle_items": [],
            "createdAt": "2023-12-01T15:38:53.379Z",
            "updatedAt": "2024-05-12T11:31:12.716Z",
            "__v": 0,
            "sku_number": 1007
        }
        // Other 3 Sale Products...
    ],
    "min_price": 425,
    "max_price": 599,
    "available_colors": [
        {
            "color": "#14133a",
            "color_name": "Dark Blue"
        },
        {
            "color": "#757575",
            "color_name": "Dark Grey"
        },
        {
            "color": "#bfbfbf",
            "color_name": "Grey"
        },
        {
            "color": "#000000",
            "color_name": "Black"
        }
    ],
    "available_sizes": [
        "S",
        "M",
        "L"
    ]
}`}</CodeBlock>
            <p className="my-4">Now the only different between <b>Get Products by Categories</b> and this API is that the returned products by this API in response, each product will have <CodeBadge>sale_price</CodeBadge> specified along with the original <CodeBadge>price</CodeBadge>. It's just to show difference to the user but for the Sale Products, you will have to calculate things using <CodeBadge>sale_price</CodeBadge> instead of <CodeBadge>price</CodeBadge>.</p>
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