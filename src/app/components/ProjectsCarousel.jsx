"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsCarousel({ projects }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + projects.length) % projects.length
        );
    };

    return (
        <>
            <article>
                <div className="flex flex-row justify-center gap-4">
                    <button onClick={prevProject}>
                        <ChevronLeftIcon className="size-10 stroke-prussian-blue active:stroke-blue-gray" />
                    </button>

                    <Link
                        key={projects[currentIndex].id}
                        href={`/projects/${projects[currentIndex].id}`}
                    >
                        <div className="flex flex-col justify-center border-solid border-2 border-prussian-blue rounded-lg p-2 w-96 h-40 shadow-black shadow-md">
                            <h3 className="text-center">
                                {projects[currentIndex].title}
                            </h3>
                            <p className="overflow-hidden text-ellipsis line-clamp-2 text-center">
                                {projects[currentIndex].description}
                            </p>
                        </div>
                    </Link>

                    <button onClick={nextProject}>
                        <ChevronRightIcon className="size-10 stroke-prussian-blue active:stroke-blue-gray" />
                    </button>
                </div>

                <div className="flex justify-center mt-4">
                    {projects?.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full ${
                                index === currentIndex
                                    ? "bg-prussian-blue"
                                    : "bg-blue-gray"
                            }`}
                        ></div>
                    ))}
                </div>
            </article>
        </>
    );
}
