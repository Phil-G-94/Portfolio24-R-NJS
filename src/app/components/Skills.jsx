import SvgIcon from "./SvgIcon";

export default function Skills() {
    return (
        <article>
            <h2 className="text-center">Skills</h2>
            <div className="flex flex-row">
                <SvgIcon
                    id="#js"
                    className="text-yellow-500 stroke-black fill-black"
                />
                <SvgIcon id="#react" className="text-blue-800" />
                <SvgIcon id="#mongodb" className="text-green-800" />
                <SvgIcon id="#node" className="text-green-800" />
                <SvgIcon id="#express" className="text-black" />
            </div>
        </article>
    );
}
