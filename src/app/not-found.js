"use client";

import Link from "next/link";
import "./globals.css";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center gap-16">
            <h2 className="mt-12">404: Page not found!</h2>

            <p>
                The page you are looking for does not exist. Check the URL or
                head <Link href="../">back</Link>
            </p>
        </div>
    );
}
