import fs from "fs/promises";
import Link from "next/link";

export default async function Projects() {
    const file = await fs.readFile(
        process.cwd() + "/src/app/data/projects.json",
        "utf-8"
    );

    const data = JSON.parse(file);

    return (
        <>
            <h2 className="text-center">Projects</h2>
            <article className="flex flex-col sm:flex-col md:flex-row justify-center">
                <div className="grid grid-cols-1 m-2 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {data.map((project) => {
                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                            >
                                <div className="border-solid border-2 rounded p-2 hover:-translate-y-1 transition-transform">
                                    <p className="text-center">
                                        {project.title}
                                    </p>
                                    <p className="truncate">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </article>
        </>
    );
}
