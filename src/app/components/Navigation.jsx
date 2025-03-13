"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="m-2">
            <ul className="hidden list-none gap-6 md:flex md:flex-row">
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

            <ul
                className={`md:hidden relative  transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
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
        </nav>
    );
}
