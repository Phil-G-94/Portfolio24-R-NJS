"use client";

import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import "./globals.css";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center gap-16">
            <h2 className="mt-12 text-xl">404: Page not found!</h2>

            <p>You&apos;ve hit a route that doesn&apos;t exist...</p>

            <div className="flex gap-2">
                <p className="self-end">Check the URL or head back</p>
                <Link href="../">
                    <HomeIcon className="size-10 hover:scale-110 hover:drop-shadow-lg" />
                </Link>
            </div>
        </div>
    );
}
