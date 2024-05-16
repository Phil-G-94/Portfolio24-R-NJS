export default function ProjectDetail({ project }) {
    console.log(project.title);

    return (
        <div>
            <p>{project.title}</p>
            <p>{project.description}</p>
        </div>
    );
}
