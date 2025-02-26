import fs from "fs/promises";

import ProjectsCarousel from "./ProjectsCarousel";

export default async function Projects() {
    const file = await fs.readFile(
        process.cwd() + "/src/app/data/projects.json",
        "utf-8"
    );

    const data = JSON.parse(file);

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
