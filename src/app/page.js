import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
    return (
        <>
            <header className="flex justify-between bg-prussian-blue p-6">
                <h1 className="text-2xl md:text-4xl text-papaya-whip">
                    Phil Georgiou
                </h1>
                <Navigation />
            </header>

            <main className="container mx-auto mt-10">
                <div className="grid grid-cols-1 gap-28 md:grid-cols-4 md:gap-48">
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
                        <ScrollToTop />
                    </footer>
                </div>
            </main>
        </>
    );
}
