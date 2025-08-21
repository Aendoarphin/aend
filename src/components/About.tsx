import {
  SiExpress,
  SiNextdotjs,
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
      <div className="max-w-xl">
        <h1 className="">Hi, I'm Arhon</h1>
        <p className="lead">
          I build websites for people ready to own their digital presence. Solo
          entrepreneurs, creators, and small businesses who've outgrown social
          media pages and want something that's actually theirs—professional
          enough to impress, personal enough to feel authentic.
        </p>
      </div>
      <div className="group w-full rounded-4xl bg-gradient-to-b to-[var(--background)] relative z-0 from-[var(--foreground)] overflow-x-visible max-w-[20vw] shadow-lg">
        <div className="opacity-100 group-hover:opacity-100 transition-all">
          <div className="flex flex-wrap flex-col gap-2 absolute h-full w-full p-4">
            <div className=" flex flex-col w-min gap-4 p-1 *:size-[2vw] *:hover:drop-shadow-xl *:drop-shadow-black *:transition">
              <SiTypescript color="#3178C6" />
              <SiNodedotjs color="#339933" />
              <SiReact color="#61DAFB" />
              <SiNextdotjs color="#000000" />
              <SiSupabase color="#3ECF8E" />
              <SiPostgresql color="#646CFF" />
              <SiExpress color="#000000" />
              <SiReactrouter color="#CA4245" />
              <SiVite color="#a020f0" />
            </div>
          </div>
        </div>
        <img
          className=" max-w-[25vw] place-self-center"
          src={selfImage}
          alt="a man wearing a dress shirt with his arms crossed"
        />
      </div>
    </section>
  );
}
