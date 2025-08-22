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
import selfImage from "../assets/self.png";
import "animate.css";
import { IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-row gap-20 justify-center animate__animated animate__fadeIn"
    >
      <div className="max-w-xl relative z-1 border-l pl-10">
        <h1 className="text-nowrap">Hi, I'm Arhon Pineda</h1>
        <p className="lead">
          I'm a web developer with two years of hands-on experience building
          responsive, user-centered applications from concept to deployment. I
          work across the full development stack, focusing on clean code
          architecture and efficient delivery timelines. If you're looking for
          someone to transform your ideas into complete web solutions, I'd love
          to collaborate.
        </p>
        <h6>Tech Stack</h6>
        <div id="icons" className="flex gap-4 w-full *:size-10">
          <SiTypescript color="#3178C6" />
          <SiNodedotjs color="#339933" />
          <SiReact color="#61DAFB" />
          <SiSupabase color="#3ECF8E" />
          <SiPostgresql color="#646CFF" />
          <SiExpress style={{ color: "var(--foreground)" }} />
          <SiReactrouter color="#CA4245" />
          <SiVite color="#a020f0" />
        </div>
        <h6>Credentials</h6>
        <p className="small">BSc Computer Science, Comptia Security+</p>
        <h6>Primary Location</h6>
        <p className="small">Oklahoma, United States</p>
        <h6>Contact</h6>
        <p className="small flex flex-row gap-2 items-center">
          <a href="mailto:arhon.k.pineda@gmail.com">
            <IconMailFilled title="Email" />
          </a>
          <a href="https://github.com/Aendoarphin" target="_blank">
            <SiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/arhon-p-ba957023a"
            target="_blank"
          >
            <IconBrandLinkedinFilled title="LinkedIn" />
          </a>
        </p>
      </div>
      <div className={`bg-gradient-to-l from-neutral-300 to-background to-90% w-full rounded-r-4xl relative -z--1 bg-[var(--foreground)] overflow-x-visible max-w-sm transition`}>
        <img
          className="place-self-center drop-shadow-xl"
          src={selfImage}
          alt="a man wearing a dress shirt with his arms crossed"
        />
      </div>
    </section>
  );
}
