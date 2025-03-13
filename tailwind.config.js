/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "barn-red": "#780000",
                "fire-brick": "#C1121F",
                "papaya-whip": "#FDF0D5",
                "prussian-blue": "#003049",
                "blue-gray": "#6699CC",
            },
        },
    },
    plugins: [],
};
