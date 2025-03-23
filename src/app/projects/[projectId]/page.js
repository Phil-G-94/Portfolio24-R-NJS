import data from "@/app/data/projects.json";
import ProjectDetail from "@/app/components/ProjectDetail";

export async function generateStaticParams() {

    // const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

    // const response = await fetch(`${baseURL}/projects.json`);

    // const data = await response.json();

    const params = data.map((project) => ({ projectId: project.id.toString() }));

    return params.map((param) => ({ params: param }));
}

export default async function Page({ params }) {
    const { projectId } = await params;

    // const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

    // const response = await fetch(`${baseURL}/projects.json`);

    // const data = await response.json();

    const project = data.find((p) => p.id.toString() === projectId);

    return <ProjectDetail project={project} />;
}
