"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="m-2">
            <ul className="hidden list-none gap-6 md:flex md:flex-row">
                <li>
                    <a
                        className="text-papaya-whip hover:underline decoration-barn-red decoration-4 underline-offset-8"
                        href="#projects"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        className="text-papaya-whip hover:underline decoration-barn-red decoration-4 underline-offset-8"
                        href="#contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            <span className="flex justify-center">
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="size-6 stroke-papaya-whip" />
                    ) : (
                        <Bars3Icon className="size-6 stroke-papaya-whip" />
                    )}
                </button>
            </span>

            <ul
                className={`md:hidden relative transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                <li className="mx-2">
                    <a
                        className="text-papaya-whip hover:underline decoration-barn-red decoration-2 underline-offset-4"
                        href="#projects"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </a>
                </li>
                <li className="mx-2">
                    <a
                        className="text-papaya-whip hover:underline decoration-barn-red decoration-2 underline-offset-4"
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
