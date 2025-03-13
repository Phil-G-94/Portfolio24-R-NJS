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
                        <ChevronLeftIcon className="size-5" />
                    </button>

                    <Link
                        key={projects[currentIndex].id}
                        href={`/projects/${projects[currentIndex].id}`}
                    >
                        <div className="border-solid border-2 rounded p-2 ">
                            <h3 className="text-center">
                                {projects[currentIndex].title}
                            </h3>
                            <p className="truncate">
                                {projects[currentIndex].description}
                            </p>
                        </div>
                    </Link>

                    <button onClick={nextProject}>
                        <ChevronRightIcon className="size-5" />
                    </button>
                </div>

                <div className="flex justify-center mt-4">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full ${
                                index === currentIndex
                                    ? "bg-gray-800"
                                    : "bg-gray-400"
                            }`}
                        ></div>
                    ))}
                </div>
            </article>
        </>
    );
}
