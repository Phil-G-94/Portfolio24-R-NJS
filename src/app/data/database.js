import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

import dotenv from "dotenv";

dotenv.config();

async function getProject(params) {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MDB_UN}:${process.env.MDB_PW}@cluster0.0fp99ys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    const db = client.db("Projects");

    const selectedProject = await db
        .collection("projects")
        .findOne({ _id: ObjectId.createFromHexString(params.projectId) });

    client.close();

    return selectedProject;
}

async function getProjects() {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MDB_UN}:${process.env.MDB_PW}@cluster0.0fp99ys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    const db = client.db("Projects");

    const projects = await db.collection("projects").find({}).toArray();

    client.close();

    return projects;
}

export { getProject, getProjects };
