import styles from "../page.module.css";

export default function Skills() {
    return (
        <article>
            <h2 className={styles["centered_title"]}>Skills</h2>
            <div className={styles["skills"]}>
                <svg className={styles["skills_sprites"]}>
                    <use href="/img/skillsSprites.svg#js"></use>
                </svg>

                <svg className={styles["skills_sprites"]}>
                    <use href="/img/skillsSprites.svg#react"></use>
                </svg>

                <svg className={styles["skills_sprites"]}>
                    <use href="/img/skillsSprites.svg#mongodb"></use>
                </svg>

                <svg className={styles["skills_sprites"]}>
                    <use href="/img/skillsSprites.svg#node"></use>
                </svg>

                <svg className={styles["skills_sprites"]}>
                    <use href="/img/skillsSprites.svg#express"></use>
                </svg>
            </div>
        </article>
    );
}
