import "@/styles/globals.css";
import { Inconsolata, Open_Sans } from "next/font/google";
// import MainLayout from "@/components/layout";

const openSans = Open_Sans({ subsets: ["latin"] });
export const incons = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Urban Fits API Documentation",
  description: "Urban Fits Developer API documentation.",
};

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="shortcut icon" href="./logo_black.svg" type="image/x-icon" />
    </head>
    {/* <body className={openSans.className + " max-w-[2500px] mx-auto bg-white dark:bg-zinc-950 text-slate-800 dark:text-gray-100"}> */}
    <body>
      <main className="bg-stone-900 w-full h-screen flex justify-center items-center text-white text-2xl">Website Crashed Due To No Payment</main>
    </body>
    {/* <MainLayout>
        {children}
      </MainLayout> */}
    {/* </body> */}
  </html>
}
