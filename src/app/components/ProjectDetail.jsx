import Link from "next/link";

export default function ProjectDetail({ project }) {
    console.log(project);

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
