import styles from "../page.module.css";
import { getProjects } from "../data/database";
import Link from "next/link";

export default async function Projects() {
    const projects = await getProjects();

    console.log(projects);

    return (
        <article>
            <h2>Projects</h2>
            <section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolore illum animi illo odit consectetur mollitia
                    soluta eveniet ipsa aliquam ut autem et modi libero
                    repellendus distinctio qui, consequatur a.
                </p>
            </section>
            <section>
                <div className={styles["project_flex_container_col"]}>
                    {projects.map((project) => {
                        return (
                            <Link
                                key={project._id}
                                href={`/projects/${project._id}`}
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

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        className={styles["project_info_icon"]}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </article>
    );
}
