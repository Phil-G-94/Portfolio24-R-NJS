import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./page.module.css";
import Skills from "./components/Skills";

export default function Home() {
    return (
        <>
            <main className={styles["flex_container_col"]}>
                <div className={styles["home_page_layout"]}>
                    <h1 className={styles["title_section"]}>Phil Georgiou</h1>
                    <section className={styles["contact_section"]}>
                        <Contact />
                    </section>
                    <section className={styles["about_me_section"]}>
                        {/* className={styles["about_me"]} */}
                        <AboutMe />
                    </section>
                    <section className={styles["projects_section"]}>
                        {/* className={styles["min_width_50"]} */}
                        <Projects />
                    </section>
                    <section className={styles["skills_section"]}>
                        <Skills />
                    </section>
                </div>
            </main>
        </>
    );
}
