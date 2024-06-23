import Link from "next/link";
import styles from "../page.module.css";

export default function Contact() {
    return (
        <>
            <ul className={styles["contact_flex_container_row"]}>
                <li>
                    <Link href="">
                        <svg className={styles["contact_sprite"]}>
                            <use href="/img/contactSprites.svg#linkedin"></use>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <svg className={styles["contact_sprite"]}>
                            <use href="/img/contactSprites.svg#github"></use>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <svg className={styles["contact_sprite"]}>
                            <use href="/img/contactSprites.svg#discord"></use>
                        </svg>
                    </Link>
                </li>
            </ul>
        </>
    );
}
