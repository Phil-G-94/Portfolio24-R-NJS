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
                <section id="contact">
                    <Contact />
                </section>
                <section id="about-me">

                    <AboutMe />
                </section>
                <section id="projects">
                    <Projects />
                </section>
            </main>
        </>
    );
}
