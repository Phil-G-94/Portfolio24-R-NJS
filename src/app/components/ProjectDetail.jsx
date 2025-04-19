"use client";

import Link from "next/link";
import Image from "next/image";
import {
    HomeIcon,
    LinkIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function ProjectDetail({ project }) {
    return (
        <article className="flex flex-col place-items-center">
            <button>
                <Link href="../">
                    <HomeIcon
                        title="Back"
                        className="size-8 stroke-barn-red-light hover:scale-110 hover:drop-shadow-lg active:scale-125"
                    />
                </Link>
            </button>

            <section className="p-2 flex flex-col gap-6">
                <h2 className="text-xl text-center">{project.title}</h2>
                <p className="text-pretty">{project.description}</p>
                <div className="flex flex-row gap-6 place-content-center">
                    {project.link && (
                        <div className="flex flex-row gap-2">
                            <p>App</p>
                            <Link href={project.link}>
                                <LinkIcon
                                    title="Link"
                                    className="size-6 hover:scale-110 hover:drop-shadow-lg"
                                />
                            </Link>
                        </div>
                    )}

                    {project.repo && (
                        <div className="flex flex-row gap-2">
                            <p>Repo</p>
                            <Link href={project.repo}>
                                <CodeBracketIcon
                                    title="Repo"
                                    className="size-6 hover:scale-110 hover:drop-shadow-lg"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 grid-rows-1 gap-10 justify-items-center md:grid-cols-2">
                    <Image
                        className="object-contain rounded-xl border border-gray-300 shadow-lg"
                        src={project["desktop-image"]}
                        alt={project["desktop-alt"]}
                        width={600}
                        height={400}
                        priority={true}
                    />

                    <Image
                        className="w-[350px] h-auto object-contain rounded-xl border border-gray-300 shadow-lg"
                        src={project["mobile-image"]}
                        alt={project["mobile-alt"]}
                        width={600}
                        height={300}
                        priority={true}
                    />
                </div>
            </section>
        </article>
    );
}
