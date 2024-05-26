import Link from "next/link";
import styles from "../page.module.css";

export default function ProjectDetail({ project }) {
    return (
        <article className={styles["flex_container_col"]}>
            <button className={styles["back_btn"]}>
                <Link href="../">Back</Link>
            </button>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            {/*

                CMP structure:

                // title?
                // project description?
                // an image?
                // link to project github repo?

            */}
        </article>
    );
}
