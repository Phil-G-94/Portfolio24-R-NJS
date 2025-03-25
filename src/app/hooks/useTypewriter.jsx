import { useEffect, useState, useMemo } from "react";

export default function useTypewriter(text, speed = 20) {
    const [index, setIndex] = useState(0);

    const displayText = useMemo(() => text.slice(0, index), [text, index]);

    useEffect(() => {
        if (index >= text.length) return;

        const timeoutId = setTimeout(() => {
            setIndex((i) => i + 1);
        }, speed);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [index, text, speed]);

    return displayText;
}

/**
 * credit: https://stackoverflow.com/questions/77869504/creating-a-typewriter-effect-in-react-using-js
 */
