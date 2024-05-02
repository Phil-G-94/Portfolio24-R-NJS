import styles from "../page.module.css";
import projects from "../data/projects";
import Link from "next/link";

export default function Projects() {
    return (
        <article>
            <section>
                <div className={styles["project_flex_container_col"]}>
                    {projects.map((project) => {
                        return (
                            <Link
                                key={project.id}
                                href="/"
                                className={styles["project_info_link"]}
                            >
                                <div className={styles["project_info_grid"]}>
                                    <p className={styles["project_info_title"]}>
                                        {project.title}
                                    </p>
                                    <p
                                        className={
                                            styles["project_info_description"]
                                        }
                                    >
                                        {project.description}
                                    </p>
                                    <img
                                        className={styles["project_info_icon"]}
                                        src="svg/box-arrow-up-right.svg"
                                        alt="icon"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </article>
    );
}
