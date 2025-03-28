"use client";

import useTypewriter from "../hooks/useTypewriter";

export default function AboutMe() {
    const greetingText = useTypewriter(`Hey, I'm Phil!`, 100);

    return (
        <>
            <article>
                <h2 className="text-center text-lg">About Me</h2>
                <section className="text-pretty m-4">
                    <p className="min-h-[24px]">{greetingText}</p>
                    <p>
                        London-based JavaScript developer skilled in React,
                        Node.js/Express.js and Next.js developlment.
                    </p>
                    <p>
                        Comfortable working with SQL and noSQL databases, with
                        or without the use of ORM tools.
                    </p>
                    <p>
                        Passionate about crafting intuitive and seamless web
                        experiences.
                    </p>
                    <p>Always keen to learn, and eager to contribute.</p>
                </section>
            </article>
        </>
    );
}
