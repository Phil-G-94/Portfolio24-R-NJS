"use client";

import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";

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
            </section>

            <section>
                <div className="grid grid-cols-1 gap-10 justify-items-center md:grid-cols-2">
                    <Image
                        src={project["desktop-image"]}
                        alt="GitHubDash desktop view"
                        width={800}
                        height={800}
                        priority={true}
                    />
                    <Image
                        src={project["mobile-image"]}
                        alt="GitHubDash mobile view"
                        width={500}
                        height={600}
                        priority={true}
                    />
                </div>
            </section>
        </article>
    );
}
