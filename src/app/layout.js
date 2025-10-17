import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Phil Georgiou | Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>

        <meta name="apple-mobile-web-app-title" content="Portfolio" />
      </head>
      <body
        className={`${inter.className} dark:bg-dpurple dark:text-afwhite bg-afwhite text-dpurple`}
      >
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
