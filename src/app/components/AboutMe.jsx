"use client";

import useTypewriter from "../hooks/useTypewriter";

export default function AboutMe() {
    const greetingText = useTypewriter(`Hey, I'm Phil!`, 100);

    return (
        <>
            <article>
                <h2 className="text-center text-lg">About Me</h2>
                <section className="text-pretty p-2">
                    <p className="min-h-[24px]">
                        {greetingText}
                        <span>👋🏼</span>
                    </p>
                    <p className="my-2">
                        London-based JavaScript developer capable of working
                        with vanilla JS, React, Next.js and Node.js/ExpressJS.
                    </p>
                    <p className="my-2">
                        Comfortable with MongoDB and learning PostgreSQL - able
                        to work with or without the use of ORMs.
                    </p>
                    <p className="my-2">
                        Passionate about crafting intuitive and seamless web
                        experiences. Always keen to learn, and eager to improve.
                    </p>
                </section>
            </article>
        </>
    );
}
