import selfImage from "../assets/self.png";
import "animate.css";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="flex flex-row gap-20 animate__animated animate__fadeIn animate__slow animate__">
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
        <div className="opacity-0 group-hover:opacity-100 absolute transition-all"><Stats /></div>
        <img
          className="max-w-sm place-self-center"
          src={selfImage}
          alt="a man wearing a dress shirt with his arms crossed"
        />
      </div>
    </section>
  );
}
