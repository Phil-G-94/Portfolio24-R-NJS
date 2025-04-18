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
                <div className="grid grid-cols-1 grid-rows-1 gap-10 justify-items-center md:grid-cols-2">
                    <div className="rounded-xl border border-gray-300 shadow-lg w-fit h-fit">
                        <Image
                            src={project["desktop-image"]}
                            alt={project["desktop-alt"]}
                            width={800}
                            height={600}
                            priority={true}
                        />
                    </div>
                    <div className="rounded-xl border border-gray-300 shadow-lg w-fit h-fit">
                        <Image
                            src={project["mobile-image"]}
                            alt={project["mobile-alt"]}
                            width={500}
                            height={250}
                            priority={true}
                        />
                    </div>
                </div>
            </section>
        </article>
    );
}
