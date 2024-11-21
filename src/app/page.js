import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./globals.css";

export default function Home() {
    return (
        <>
            <main>
                <h1 className="text-4xl">Phil Georgiou</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    <section className="col-span-full md:col-start-2 md:col-end-4">
                        <Contact />
                    </section>
                    <section className="col-span-full md:col-start-2 md:col-end-4">
                        <AboutMe />
                    </section>
                    <section className="col-span-full md:col-start-2 md:col-end-4">
                        <Projects />
                    </section>
                    <section className="col-span-full md:col-start-2 md:col-end-4">
                        <Skills />
                    </section>
                </div>
            </main>
        </>
    );
}
