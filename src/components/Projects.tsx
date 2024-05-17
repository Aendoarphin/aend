import { useState } from "react";
import { SiPython, SiQt, SiJavascript, SiNextdotjs, SiReact, SiMongodb, SiCss3, SiSass, SiAuth0 } from "@icons-pack/react-simple-icons";

export default function Projects() {

	type Project = {
		title: string;
		stack: JSX.Element[];
		description: string;
		from: string;
		to: string;
		link: string;
		media: string | string[];
	}

	const projects: Project[] = [
		{
			title: "Comps",
			stack: [<SiPython className="text-yellow-300" />, <SiQt className="text-green-400" />],
			description: "This desktop application retrieves and processes sold listings data from eBay, streamlining the process for collectors to access and isolate sold trading card listings. It enables collectors to identify fair prices for buying or selling trading cards in the eBay trading card market, providing valuable insights for making informed pricing decisions.",
			from: "January 2023",
			to: "April 2023",
			link: "https://github.com/Aendoarphin/comps_v1",
			media: "../assets/tlu_sample.png"
		},
		{
			title: "ScrapHouse",
			stack: [<SiJavascript className=" text-yellow-300" />, <SiCss3 className="text-blue-500" />, <SiSass className="text-pink-500" />, <SiNextdotjs />, <SiReact className="text-cyan-500" />, <SiMongodb className="text-green-500 bg-foreground rounded-full" />, <SiAuth0 className="text-orange-600" />],
			description: "This web application is in continuous development to deliver fighter rankings, news, and statistical data across various MMA promotions. Planned features, including the incorporation of event schedules and fighter directory, are in the works as part of this ongoing project.",
			from: "December 2023",
			to: "Present",
			link: "https://github.com/Aendoarphin/scraphousemma",
			media: "https://youtu.be/G1poX9Qd7oY"
		},
		{
			title: "Tool Life Utility",
			stack: [<SiPython className="text-yellow-300" />, <SiQt className="text-green-400" />],
			description: "The application centralizes data display, enabling CNC machine operators to avoid the necessity of individually inspecting each machine throughout the shop, thus reducing the need for extensive physical movement.",
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
		<div id="projects" className="flex mt-10 flex-col px-8 sm:max-w-[30em] mx-auto justify-center md:max-w-[50em] lg:max-w-[54em] h-screen">
			<h1 className="text-heading font-semibold">Projects</h1>
			<hr className="mb-4" />
			<div id="project-buttons" className="flex flex-nowrap">
				{projects.map((project: Project, index: number) => (
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
					<a href={projects[selected].link} target="_blank" className="underline">Go To Project</a>
					<p>{projects[selected].from} - {projects[selected].to}</p>
				</div>
				<div className="flex flex-nowrap justify-start gap-2">{projects[selected]["stack"].map((icon: JSX.Element) => (
					icon
				))} 
				</div>
			</div>
		</div>
	);
}

// TODO: add media constants below project info
