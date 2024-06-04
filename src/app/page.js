import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./page.module.css";
import Skills from "./components/Skills";

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
                <section>
                    <Skills />
                </section>
            </main>
        </>
    );
}
