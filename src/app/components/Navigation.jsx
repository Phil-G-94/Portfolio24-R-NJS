"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <ul className="hidden list-none gap-6 md:flex md:flex-row md:m-2">
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <span className="flex items-center">
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="size-6" />
                    ) : (
                        <Bars3Icon className="size-6" />
                    )}
                </button>
            </span>

            {isOpen && (
                <ul className="md:hidden flex flex-col items-center gap-4 m-2">
                    <li>
                        <a href="#about-me" onClick={() => setIsOpen(false)}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}
