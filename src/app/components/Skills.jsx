import SvgIcon from "./SvgIcon";

export default function Skills() {
    return (
        <article>
            <h2 className="text-center">Skills</h2>
            <div className="flex flex-row">
                <SvgIcon
                    id="#js"
                    className="fill-white stroke-black hover:fill-yellow-500 hover:stroke-black transition-colors size-2/4"
                />

                <SvgIcon
                    id="#react"
                    className="fill-black hover:[fill:#4ea8bd] transition-colors size-2/4"
                />
                <SvgIcon
                    id="#mongodb"
                    className=" hover:[fill:#00684a] transition-colors size-2/4"
                />
                <SvgIcon
                    id="#node"
                    className="hover:[fill:#5fa04e] transition-colors size-2/4"
                />
                <SvgIcon
                    id="#express"
                    className="stroke-1 hover:fill-white hover:stroke-black transition-colors size-2/4"
                />
            </div>
        </article>
    );
}
