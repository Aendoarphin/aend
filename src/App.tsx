import "./App.css";
import "animate.css";
import { useState } from "react";
import { ThemeContext } from "./context/context";
import Projects from "./components/Projects";
import About from "./components/About";

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
      <header className="text-center fixed left-0 flex flex-col h-full place-content-center px-6 tracking-widest text-xs gap-4">
        <a href="#about">About Me</a>
        <a href="#projects">My Projects</a>
      </header>
      <main>
        <About/>
        <Projects/>
      </main>
    </ThemeContext.Provider>
  );
}
