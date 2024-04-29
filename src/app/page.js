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
                    <section>
                        <AboutMe />
                    </section>
                    <section><Projects /></section>
                    <section><Contact /></section>
                </article>
            </main>
        </>
    );
}
