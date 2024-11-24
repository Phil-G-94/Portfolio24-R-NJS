import Link from "next/link";

export default function Contact() {
    const contactSprites = [
        {
            urlRef: "",
            svgRef: "/img/contactSprites.svg#linkedin",
        },
        {
            urlRef: "",
            svgRef: "/img/contactSprites.svg#github",
        },
        {
            urlRef: "",
            svgRef: "/img/contactSprites.svg#discord",
        },
    ];

    return (
        <section>
            <ul className="flex flex-row justify-center gap-16">
                {contactSprites.map((sprite) => {
                    return (
                        <Link href="" key={crypto.randomUUID()}>
                            <svg className="size-14 hover:scale-105">
                                <use href={sprite.svgRef}></use>
                            </svg>
                        </Link>
                    );
                })}
            </ul>
        </section>
    );
}
