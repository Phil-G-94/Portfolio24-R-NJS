import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <header></header>
            <main className={styles["flex_container_col"]}>
                <h1>Welcome to my portfolio website!</h1>
                <article>
                    <section id="about-me">
                        <h2>About Me</h2>
                        <AboutMe />
                    </section>
                </article>
                <article>
                    <section id="projects">
                        <h2>Projects</h2>
                        <Projects />
                    </section>
                </article>
                <article>
                    <section id="contact">
                        <h2>Contact</h2>
                        <Contact />
                    </section>
                </article>
            </main>
        </>
    );
}
