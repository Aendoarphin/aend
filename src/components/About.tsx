import {
  SiExpress,
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

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-row gap-20 animate__animated animate__fadeIn animate__slow"
    >
      <div className="max-w-xl relative z-1 border-l pl-10">
        <h1 className="">Hi, I'm Arhon</h1>
        <p className="lead">
          I build websites for people ready to own their digital presence. Solo
          entrepreneurs, creators, and small businesses who've outgrown social
          media pages and want something that's actually theirs—professional
          enough to impress, personal enough to feel authentic.
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
      </div>
      <div className="bg-gradient-to-l from-neutral-300 to-[var(--background)] to-90% w-full rounded-r-4xl relative -z--1 bg-[var(--foreground)] overflow-x-visible max-w-96 transition">
        <img
          className="place-self-center drop-shadow-xl"
          src={selfImage}
          alt="a man wearing a dress shirt with his arms crossed"
        />
      </div>
    </section>
  );
}
