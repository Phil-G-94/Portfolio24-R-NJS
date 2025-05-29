"use client";

import useTypewriter from "../hooks/useTypewriter";

export default function AboutMe() {
    const greetingText = useTypewriter(`Hey, I'm Phil!`, 100);

    return (
        <>
            <article>
                <h2 className="text-center text-2xl">About Me</h2>
                <section className="text-pretty p-2">
                    <p className="min-h-[24px] md:text-lg">
                        {greetingText}
                        <span>👋🏼</span>
                    </p>
                    <p className="my-2 md:text-lg">
                        London-based JavaScript developer working with React,
                        Next.js and Node.js/ExpressJS.
                    </p>
                    <p className="my-2 md:text-lg">
                        Comfortable with MongoDB and learning PostgreSQL. Able
                        to work with or without the use of ORM/ODM tools.
                    </p>
                    <p className="my-2 md:text-lg">
                        Passionate about crafting intuitive and seamless web
                        experiences. Always keen to learn, and eager to improve.
                    </p>
                </section>
            </article>
        </>
    );
}
