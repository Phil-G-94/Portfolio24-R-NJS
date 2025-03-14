import ProjectsCarousel from "./ProjectsCarousel";

export default async function Projects() {
    const res = await fetch("/data/projects.json");

    const data = await res.json();

    return (
        <>
            <h2 className="text-center">Projects</h2>
            <section className="flex flex-col justify-center">
                <article>
                    <ProjectsCarousel projects={data} />
                </article>
            </section>
        </>
    );
}
