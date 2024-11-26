import { getProjects } from "../data/database";
import Link from "next/link";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <>
            <h2 className="text-center">Projects</h2>
            <article className="flex flex-col sm:flex-col md:flex-row justify-center">
                <div className="grid grid-cols-1 m-2 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {projects.map((project) => {
                        return (
                            <Link
                                key={project._id}
                                href={`/projects/${project._id}`}
                            >
                                <div className="border-solid border-2 rounded p-2 hover:-translate-y-1 transition-transform">
                                    <p className="text-center">
                                        {project.title}
                                    </p>
                                    <p className="truncate">
                                        {/* {project.description} */}
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Id dicta voluptas, in
                                        fugiat consequatur ratione voluptatibus
                                        modi rerum! Accusantium, consequuntur
                                        natus! Facilis ratione hic fuga. Iusto
                                        necessitatibus illo debitis nam.
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
