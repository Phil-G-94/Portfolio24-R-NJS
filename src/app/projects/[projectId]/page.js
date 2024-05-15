import ProjectDetail from "@/app/components/ProjectDetail";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";


export async function generateStaticParams() {
    const client = await MongoClient.connect("mongodb+srv://philipposgeorgiou7:7Oa0sLuPRLzh6Dj3@cluster0.0fp99ys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    const db = client.db("Projects");

    const projects = await db.collection("projects").find({}, { _id: 1 }).toArray();

    client.close();

    return projects.map((project) => ({
        projectId: project._id.toString(),
    }));
}

async function getProject(params) {
    const client = await MongoClient.connect("mongodb+srv://philipposgeorgiou7:7Oa0sLuPRLzh6Dj3@cluster0.0fp99ys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    const db = client.db("Projects");

    const selectedProject = await db.collection("projects").findOne({ _id: ObjectId.createFromHexString(params.projectId) });

    client.close();

    return {
        project: selectedProject,

    };
}

export default async function Page({ params }) {

    const project = await getProject(params);

    console.log(project);

    return <ProjectDetail project={project}></ProjectDetail>;
}