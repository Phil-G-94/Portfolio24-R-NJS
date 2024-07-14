"use client";

import styles from "./page.module.css";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className={styles["grid_container"]}>
            <h2>404: Page not found!</h2>

            <p>
                The page you are looking for does not exist. Check the URL or
                head <Link href="../">back</Link>
            </p>

            <svg className={styles["error_sprite"]}>
                <use href="/img/errorSprites.svg#page-not-found"></use>
            </svg>
        </div>
    );
}
