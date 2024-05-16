import { useState } from "react";
import { SiPython, SiQt, SiJavascript, SiNextdotjs, SiReact, SiMongodb, SiCss3, SiSass, SiAuth0, IconType, SiGithub } from "@icons-pack/react-simple-icons";

export default function Projects() {

	const projects: Record<string, any> = [
		{
			title: "Comps",
			stack: [<SiPython className="text-yellow-300" />, <SiQt className="text-green-400" />],
			description: "Price analytics tool for sold trading cards. Allows collectors to find effective price references and identify historical sales trends.",
			from: "January 2023",
			to: "April 2023",
			link: "https://github.com/Aendoarphin/comps_v1",
			media: "../assets/tlu_sample.png"
		},
		{
			title: "ScrapHouse",
			stack: [<SiJavascript className=" text-yellow-300" />, <SiCss3 className="text-blue-500" />, <SiSass className="text-pink-500" />, <SiNextdotjs />, <SiReact className="text-cyan-500" />, <SiMongodb className="text-green-500 bg-foreground rounded-full" />, <SiAuth0 className="text-orange-600" />],
			description: "Web application for sharing mixed martial arts content. Provides information about rankings, news, stats, and events.",
			from: "December 2023",
			to: "Present",
			link: "https://github.com/Aendoarphin/scraphousemma",
			media: "https://youtu.be/G1poX9Qd7oY"
		},
		{
			title: "Tool Life Utility",
			stack: [<SiPython className="text-yellow-300" />, <SiQt className="text-green-400" />],
			description: "Desktop application that presents machine production data. Allows machinists to monitor multiple machines in one central location.",
			from: "August 2023",
			to: "September 2023",
			link: "https://github.com/Aendoarphin/pyforcam",
			media: ["../assets/sh_home.jpeg", "../assets/sh_dashboard.jpeg", "../assets/sh_rankings.jpeg"],
		}
	]

	const [selected, setSelected] = useState(0);

	const handleClick = (index: number) => {
		setSelected(index);
	};

	return (
		<div id="projects" className="flex mt-10 flex-col px-8 sm:max-w-[30em] sm:mx-auto md:justify-center lg:mx-80 h-screen">
			<h1 className="text-heading font-semibold">Projects</h1>
			<hr className="mb-4" />
			<div id="project-buttons" className="flex flex-nowrap">
				{projects.map((project: Record<string, any>, index: number) => (
					<button
						type="button"
						key={index}
						className={`transition-all ease-in font-light mr-4 pb-2 ${selected === index ? "font-normal" : "text-neutral-600"
							}`}
						onClick={() => handleClick(index)}
					>
						{project.title}
					</button>
				))}
			</div>
			<div className=" flex flex-col gap-2">
				<p>{projects[selected].description}</p>
				<div className="text-xs font-light flex flex-nowrap justify-between">
					<a href={projects[selected].link} target="_blank" className="underline">Repository</a>
					<p>{projects[selected].from} - {projects[selected].to}</p>
				</div>
				<div className="flex flex-nowrap justify-start gap-2">{projects[selected]["stack"].map((icon: IconType) => (
					icon
				))} <br />
					{Array.isArray(projects[selected].media) ? projects[selected].media.map() : <img src={projects[selected].media} alt="media" className="rounded-md" />}
				</div>
			</div>
		</div>
	);
}

// TODO: add media constants below project info
