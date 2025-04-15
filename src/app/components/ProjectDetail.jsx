"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail({ project }) {
    return (
        <article className="flex flex-col place-items-center">
            <button>
                <Link href="../">Back</Link>
            </button>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <Image
                src={project["desktop-image"]}
                alt="GitHubDash desktop view"
                width={800}
                height={800}
                priority
            />
            <Image
                src={project["mobile-image"]}
                alt="GitHubDash mobile view"
                width={500}
                height={600}
                priority
            />
        </article>
    );
}
