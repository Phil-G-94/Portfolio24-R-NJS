// import ProjectDetail from "@/app/components/ProjectDetail";

// export async function generateStaticParams() {
//     const baseUrl = process.env.VERCEL_URL
//         ? `https://${process.env.VERCEL_URL}`
//         : "http://localhost:3000";

//     const res = await fetch(`${baseUrl}/data/projects.json`);

//     const data = await res.json();

//     const params = data.map((project) => ({ id: project.id.toString() }));

//     return params.map((param) => ({ params: param }));
// }

// export default async function Page({ params }) {
//     const { projectId } = await params;

//     const baseUrl = process.env.VERCEL_URL
//         ? `https://${process.env.VERCEL_URL}`
//         : "http://localhost:3000";

//     const res = await fetch(`${baseUrl}/data/projects.json`);

//     const data = await res.json();

//     console.log(data);

//     const project = data.find((p) => p.id.toString() === projectId);

//     return <ProjectDetail project={project} />;
// }

import ProjectDetail from "@/app/components/ProjectDetail";

export async function generateStaticParams() {
    const filePath = path.resolve(process.cwd(), "src/app/data/projects.json");

    const file = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(file);

    const params = data.map((project) => ({ id: project.id.toString() }));

    return params.map((param) => ({ params: param }));
}

export default async function Page({ params }) {
    const { projectId } = await params;

    const filePath = path.resolve(process.cwd(), "src/app/data/projects.json");

    const file = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(file);

    const project = data.find((p) => p.id.toString() === projectId);

    return <ProjectDetail project={project} />;
}
