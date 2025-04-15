import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
    title: "Phil Georgiou | Developer",
    description: "Powered By NextJS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth bg-papaya-whip">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                ></link>

                <meta name="apple-mobile-web-app-title" content="Portfolio" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
