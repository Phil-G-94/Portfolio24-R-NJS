import ProjectDetail from "@/app/components/ProjectDetail";

export async function generateStaticParams() {
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/data/projects.json`);

    const data = await res.json();

    const params = data.map((project) => ({ id: project.id.toString() }));

    return params;
}

export default async function Page({ params }) {
    const { projectId } = await params;

    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/data/projects.json`);

    const data = await res.json();

    const project = data.find((p) => p.id.toString() === projectId);

    return <ProjectDetail project={project} />;
}
