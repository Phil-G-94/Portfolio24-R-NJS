"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

/**
 * debounce
 */

const debounce = (fn, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => fn(...args), delay);
    };
};

export default function ScrollToTop() {
    const [show, setShow] = useState();

    useEffect(() => {
        const handleScroll = debounce(() => {
            setShow(window.scrollY > 200);
        }, 200);

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="flex flex-row justify-end">
            <button
                className={`hover-container fixed flex items-center justify-center bottom-1 right-1 rounded-full bg-barn-red hover:bg-barn-red-light transition-all w-12 h-12 cursor-pointer ${show ? "opacity-100" : "opacity-0"} `}
                onClick={scrollToTop}
            >
                <ChevronUpIcon className="size-8 stroke-papaya-whip" />
            </button>
        </section>
    );
}
