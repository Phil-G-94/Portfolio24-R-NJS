import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <header></header>
            <main className={styles["flex_container_col"]}>
                <h1>Welcome to my portfolio website!</h1>
                <section>
                    About Me


                </section>
                <section>Projects</section>
                <section>Contact</section>
            </main>
        </>
    );
}
