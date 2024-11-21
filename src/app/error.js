"use client";

import Link from "next/link";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className={styles["grid_container"]}>
            <h2>Error!</h2>

            <p>Something isn&apos;t quite right. </p>

            <svg>
                <use href="/img/errorSprites.svg#app-error"></use>
            </svg>
            <div>
                <button onClick={() => reset()}>Try Again</button>
                <button>
                    <Link href="/">Go Home</Link>
                </button>
            </div>
        </div>
    );
}
