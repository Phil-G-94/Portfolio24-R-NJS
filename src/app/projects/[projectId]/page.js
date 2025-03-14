import ProjectDetail from "@/app/components/ProjectDetail";

export async function generateStaticParams() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/data/projects.json`
    );

    const data = await res.json();

    const params = data.map((project) => ({ id: project.id.toString() }));

    return params;
}

export default async function Page({ params }) {
    const { projectId } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/data/projects.json`
    );

    const data = await res.json();

    const project = data.find((p) => p.id.toString() === projectId);

    return <ProjectDetail project={project} />;
}
