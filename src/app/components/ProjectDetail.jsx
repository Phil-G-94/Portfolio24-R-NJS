import styles from "../page.module.css";

export default function ProjectDetail({ project }) {
    return (
        <article className={styles["flex_container_col"]}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>
        </article>
    );
}
