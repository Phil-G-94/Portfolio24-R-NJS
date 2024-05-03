import styles from "../page.module.css";

export default function AboutMe() {
    return (
        <>
            <h2>About Me</h2>
            <article className={styles["flex_container_col"]}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolore illum animi illo odit consectetur mollitia
                    soluta eveniet ipsa aliquam ut autem et modi libero
                    repellendus distinctio qui, consequatur a.
                </p>
            </article>
        </>
    );
}
