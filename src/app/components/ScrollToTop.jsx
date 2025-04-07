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
        <section className="flex flex-row justify-center md:justify-end">
            <button
                className={`hover:drop-shadow-lg active:scale-110 md:size-10 lg:size-12 fixed flex items-center justify-center bottom-1 right-1 rounded-full bg-barn-red hover:bg-barn-red-light transition-all size-8  cursor-pointer disabled:cursor-default ${show ? "opacity-65" : "opacity-0"}`}
                onClick={scrollToTop}
                disabled={!show}
            >
                <ChevronUpIcon className="size-8 stroke-papaya-whip" />
            </button>
        </section>
    );
}
