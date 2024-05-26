import styles from "../page.module.css";

export default function AboutMe() {
    return (
        <>
            <h2 className={styles["centered_title"]}>About Me</h2>
            <article className={styles["flex_container_col"]}>
                <p>
                    Hi, thanks for stopping by. My name is Phil Georgiou and I
                    am a JavaScript developer.
                </p>
                <p>
                    Outside of code, my interests include current affairs,
                    music, gaming and martial arts.
                </p>
                <p>
                    I am looking for entry-level roles as a Front End or
                    Fullstack Developer utilising the MERN stack &#40;or
                    others!&#41;.
                </p>
            </article>
        </>
    );
}
