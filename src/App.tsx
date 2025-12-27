import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
// import Services from "./components/Services";
import "animate.css";
import { useState } from "react";
import { ThemeContext } from "./context/context";

export default function App() {
  const [theme, setTheme] = useState("dark");

  if (theme === "light") {
    window.document.body.style.color = "var(--background)";
    window.document.body.style.backgroundColor = "var(--foreground)";
  } else {
    window.document.body.style.color = "var(--foreground)";
    window.document.body.style.backgroundColor = "var(--background)";
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <div className="fixed top-0 bottom-0 left-0 right-0 grayscale opacity-25 -z-1 bg-[url('/background.svg')] bg-cover"></div>
        <header className="relative z-50">
          <Nav />
        </header>
        <main className="flex flex-col gap-4 mx-auto">
          <About />
          <Projects />
          {/* <Services /> */}
        </main>
        <footer className="flex w-full items-center justify-center">
          <p className="p-4 text-sm font-light text-center">
            &copy; {new Date().getFullYear()} AENDOARPHIN
          </p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
