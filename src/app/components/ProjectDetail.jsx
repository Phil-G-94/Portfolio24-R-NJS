"use client";
import Link from "next/link";

export default function ProjectDetail({ project }) {
    return (
        <article>
            <button>
                <Link href="../">Back</Link>
            </button>

            <h2>{project.title}</h2>

            <p>{project.description}</p>
        </article>
    );
}
