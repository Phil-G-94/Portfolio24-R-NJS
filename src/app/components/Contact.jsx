import Link from "next/link";
import SvgIcon from "./SvgIcon";

export default function Contact() {
    return (
        <section className="mt-2">
            <ul className="flex flex-row justify-center gap-16">
                <Link href="">
                    <SvgIcon
                        id="#linkedin"
                        className="size-16 hover:scale-105"
                    />
                </Link>
                <Link href="">
                    <SvgIcon
                        id="#github"
                        className="size-16 hover:scale-105 "
                    />
                </Link>
                <Link href="">
                    <SvgIcon
                        id="#discord"
                        className="size-16 hover:scale-105"
                    />
                </Link>
            </ul>
        </section>
    );
}
