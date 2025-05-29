"use client";

import Link from "next/link";

export default function ProjectCards({ projects }) {
    return (
        <>
            <article>
                <div className="grid lg:grid-cols-2 place-items-center gap-10 lg:gap-x-56">
                    {projects.map((project) => {
                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                            >
                                <section className="bg-white border-black shadow-lg shadow-black rounded-md p-6 w-72 h-56">
                                    <h3 className="text-center text-sm font-semibold">
                                        {project.title}
                                    </h3>
                                    <div className="grid grid-flow-col place-items-center">
                                        <div className="grid grid-cols-1">
                                            <p className="overflow-hidden text-ellipsis line-clamp-2 text-center text-sm">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-row justify-center gap-4 p-2">
                                                {project.stack.map((item) => (
                                                    <i
                                                        key={item}
                                                        className={`devicon-${item}-plain colored text-2xl`}
                                                    ></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Link>
                        );
                    })}
                </div>
            </article>
        </>
    );
}
