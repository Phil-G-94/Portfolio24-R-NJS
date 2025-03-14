import { promises as fs } from "fs";
import ProjectDetail from "@/app/components/ProjectDetail";

export async function generateStaticParams() {
    const filePath = path.resolve(process.cwd(), "src/app/data/projects.json");

    const file = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(file);

    const params = data.map((project) => ({ id: project.id.toString() }));

    return params;
}

export default async function Page({ params }) {
    const { projectId } = await params;

    const filePath = path.resolve(process.cwd(), "src/app/data/projects.json");

    const file = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(file);

    const project = data.find((p) => p.id.toString() === projectId);

    return <ProjectDetail project={project} />;
}
