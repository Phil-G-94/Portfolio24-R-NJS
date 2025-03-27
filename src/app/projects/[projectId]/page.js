import data from "@/app/data/projects.json";
import ProjectDetail from "@/app/components/ProjectDetail";

export async function generateStaticParams() {
    const params = data.map((project) => ({
        projectId: project.id.toString(),
    }));

    return params.map((param) => ({ params: param }));
}

export default async function Page({ params }) {
    const { projectId } = await params;

    const project = data.find((p) => p.id.toString() === projectId);

    return <ProjectDetail project={project} />;
}
