"use client";

import projects from "../data/projects.json";
import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects() {
    return (
        <>
            <h2 className="text-center text-lg">Projects</h2>
            <article className="flex flex-col justify-center">
                <section className="m-4">
                    <ProjectsCarousel projects={projects} />
                </section>
            </article>
        </>
    );
}
