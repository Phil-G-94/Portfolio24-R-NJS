"use client";
import projects from "@/app/data/projects.json";
import ProjectCards from "./ProjectCards";

export default function Projects() {
  return (
    <>
      <h2 className="text-center text-2xl">Projects</h2>
      <article className="flex flex-col justify-center items-center">
        <section className="m-4">
          <ProjectCards projects={projects} />
        </section>
      </article>
    </>
  );
}
