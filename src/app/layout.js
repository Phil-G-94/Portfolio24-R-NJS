import { Roboto_Mono } from "next/font/google";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
    title: "Phil Georgiou | Developer",
    description: "Powered By NextJS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth bg-papaya-whip">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
