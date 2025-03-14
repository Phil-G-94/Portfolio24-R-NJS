import projects from "../data/projects.json";
import ProjectsCarousel from "./ProjectsCarousel";

export default async function Projects() {
    return (
        <>
            <h2 className="text-center">Projects</h2>
            <section className="flex flex-col justify-center">
                <article>
                    <ProjectsCarousel projects={projects} />
                </article>
            </section>
        </>
    );
}
