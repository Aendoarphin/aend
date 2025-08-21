import {
  SiDotnet,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import selfImage from "../assets/self.png";
import "animate.css";
import { Pin } from "lucide-react";

export default function About() {
  const iconSize = 20;

  return (
    <section
      id="about"
      className="flex flex-row gap-20 animate__animated animate__fadeIn animate__slow animate__"
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
      <div className="group w-full rounded-4xl bg-gradient-to-b to-[#c9c9c9] relative z-0 from-[var(--foreground)] overflow-x-visible max-w-xs shadow-lg">
        <div className="opacity-100 group-hover:opacity-100 transition-all">
          <div className="flex flex-wrap flex-col gap-2 absolute border border-black w-full h-full p-4">
            <SiTypescript size={iconSize} color="#3178C6" />
            <SiNodedotjs size={iconSize} color="#339933" />
            <SiReact size={iconSize} color="#61DAFB" />
            <SiDotnet size={iconSize} color="#512BD4" />
            <SiSupabase size={iconSize} color="#3ECF8E" />
            <SiVite size={iconSize} color="#646CFF" />
            <SiPostgresql size={iconSize} color="#4169E1" />
            <div className="text-[var(--background)] mix-blend-luminosity absolute top-6 right-0 p-2">
              <h5><Pin/></h5>
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
