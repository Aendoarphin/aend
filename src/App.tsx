import "./App.css";
import "animate.css";
import { useState } from "react";
import { ThemeContext } from "./context/context";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

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
      <div className="main-bg fixed top-0 bottom-0 min-w-screen object-contain -z-1"></div>
      
      {/* Mobile Header - Horizontal at top */}
      <header className="md:hidden fixed top-0 left-0 right-0 w-full flex justify-center items-center px-4 py-4 tracking-widest text-xs gap-4 sm:gap-6 z-50 backdrop-blur-sm bg-background/30">
        <a 
          href="#about" 
          className="hover:scale-110 transition-all duration-75 px-2 py-1"
        >
          About Me
        </a>
        <a 
          href="#projects" 
          className="hover:scale-110 transition-all duration-75 px-2 py-1"
        >
          My Projects
        </a>
        <a 
          href="#contact" 
          className="hover:scale-110 transition-all duration-75 px-2 py-1"
        >
          Contact
        </a>
      </header>

      {/* Desktop Header - Vertical sidebar */}
      <header className="hidden md:flex text-center fixed bottom-0 top-0 h-screen w-max flex-col place-content-center px-6 tracking-widest text-xs gap-4 z-50 *:hover:scale-110 *:transition-all *:duration-75">
        <a href="#about">About Me</a>
        <a href="#projects">My Projects</a>
        <a href="#contact">Contact</a>
      </header>

      <main className="md:ml-0">
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeContext.Provider>
  );
}
