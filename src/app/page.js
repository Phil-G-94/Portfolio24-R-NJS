import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <main className={styles["flex_container_col"]}>
                <h1>Welcome to my portfolio website!</h1>
                <section>
                    <Contact />
                </section>
                <section className={styles["about_me"]}>
                    <AboutMe />
                </section>
                <section className={styles["min_width_50"]}>
                    <Projects />
                </section>
            </main>
        </>
    );
}
