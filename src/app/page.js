import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./globals.css";

export default function Home() {
    return (
        <>
            <header className="flex justify-between">
                <h1 className="text-4xl">Phil Georgiou</h1>
                <nav>
                    <ul className="flex flex-row list-none gap-6 m-2">
                        <li>
                            <a href="about-me">About Me</a>
                        </li>
                        <li>
                            <a href="projects">Projects</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <section
                        id="about-me"
                        className="col-span-full md:col-start-2 md:col-end-4"
                    >
                        <AboutMe />
                    </section>
                    <section className="col-span-full md:col-start-2 md:col-end-4">
                        <Skills />
                    </section>
                    <section
                        id="projects"
                        className="col-span-full md:col-start-2 md:col-end-4"
                    >
                        <Projects />
                    </section>

                    <footer
                        id="contact"
                        className="col-span-full md:col-start-2 md:col-end-4"
                    >
                        <Contact />
                    </footer>
                </div>
            </main>
        </>
    );
}
