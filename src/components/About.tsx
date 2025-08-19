import selfImage from "../assets/self.png";
import "animate.css";

export default function About() {
  return (
    <section id="about" className="border-b-2 overflow-clip ">
      <div>
        <h1 className="animate__animated animate__slideInLeft animate__slow">
          Hi, I'm Arhon
        </h1>
        <p className="lead animate__animated animate__slideInRight animate__slow">
          I'm a passionate developer with a love for creating dynamic and
          engaging web applications. My journey in tech has been fueled by
          curiosity and a desire to solve real-world problems through code.
        </p>
      </div>
      <div className="size-[50rem] -mt-40 animate__animated animate__fadeIn animate__slow animate__delay-2s -ml-30">
        <img src={selfImage} />
      </div>
    </section>
  );
}
