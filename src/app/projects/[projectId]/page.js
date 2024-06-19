import ProjectDetail from "@/app/components/ProjectDetail";
import { getProject } from "@/app/data/database";

export default async function Page({ params }) {
    const project = await getProject(params);

    return <ProjectDetail project={project} />;
}
