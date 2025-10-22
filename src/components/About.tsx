import {
  SiExpress,
  SiGithub,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiSupabase,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import "animate.css";
import { IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="about"
      className="flex flex-col sm:flex-row mt-6 sm:mt-0 gap-20 justify-center animate__animated animate__fadeIn"
    >
      <div className="max-w-7xl relative z-1 border-0 sm:border-l pl-0 sm:pl-10">
        <h1 className="text-nowrap">Hi, I'm Arhon Pineda</h1>
        <p className="small sm:text-xl w-xs sm:w-full">
          I'm a web developer who works across the full stack—backend, frontend,
          whatever the project needs. My goal is pretty straightforward: use the
          skills I have (and the ones I'm still picking up) to build things that
          actually work for people. When you have an idea or problem to solve,
          I'll dig into the right tools and technologies to make it happen. I'm
          all about leveraging web tech to help clients stand out in an
          increasingly digital world, one project at a time.
        </p>
        <h6 className="lg:text-xl">Tech Stack</h6>
        <div id="icons" className="flex flex-wrap gap-4 sm:*:size-10">
          <SiTypescript color="#3178C6" />
          <SiNodedotjs color="#339933" />
          <SiReact color="#61DAFB" />
          <SiSupabase color="#3ECF8E" />
          <SiPostgresql color="#646CFF" />
          <SiExpress />
          <SiReactrouter color="#CA4245" />
          <SiVite color="#a020f0" />
        </div>
        <h6 className="lg:text-xl">Credentials</h6>
        <p className="lg:text-xl small">
          BSc Computer Science, CompTia Security+
        </p>
        <h6 className="lg:text-xl">Primary Location</h6>
        <p className="lg:text-xl small">Oklahoma, United States</p>
        <h6 className="lg:text-xl">Contact</h6>
        <p className="small flex flex-row gap-2 items-center">
          <a href="mailto:arhon.k.pineda@gmail.com">
            <IconMailFilled title="Email" className="lg:size-10" />
          </a>
          <a href="https://github.com/Aendoarphin" target="_blank">
            <SiGithub className="lg:size-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/aendoarphin"
            target="_blank"
          >
            <IconBrandLinkedinFilled title="LinkedIn" className="lg:size-10" />
          </a>
        </p>
      </div>
      <div
        className={`bg-gradient-to-l  ${
          theme === "dark"
            ? "from-foreground to-background"
            : "to-foreground from-background"
        } to-80% w-full rounded-r-4xl relative -z--1 overflow-x-visible max-w-2xs sm:max-w-sm md:max-w-md`}
      >
        <img
          className="place-self-center drop-shadow-xl h-0 sm:h-max"
          src={`/images/self${theme === 'dark' ? "-dark" : ""}.png`}
          alt="a man wearing a dress shirt with his arms crossed"
        />
      </div>
    </section>
  );
}
