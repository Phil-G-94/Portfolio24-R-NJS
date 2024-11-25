"use client";

import Link from "next/link";
import "./globals.css";

import { useEffect } from "react";
import SvgIcon from "./components/SvgIcon";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col justify-center items-center gap-16">
            <h2 className="mt-12">Error!</h2>

            <p>Something isn&apos;t quite right. </p>
            <p>Use the buttons below.</p>

            <SvgIcon id="#app-error" />
            <div className="flex flex-row justify-center gap-10">
                <button
                    className="border-solid border-2 border-black rounded-md pl-2 pr-2"
                    onClick={() => reset()}
                >
                    Try Again
                </button>
                <button className="border-solid border-2 border-black rounded-md pl-2 pr-2">
                    <Link href="/">Go Home</Link>
                </button>
            </div>
        </div>
    );
}
