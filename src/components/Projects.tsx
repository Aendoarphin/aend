import { useState } from "react";
import {
	SiPython,
	SiQt,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiMongodb,
	SiCss3,
	SiSass,
	SiAuth0,
} from "@icons-pack/react-simple-icons";

export default function Projects() {
	const shImages = [
		"src/assets/sh_home.jpeg",
		"src/assets/sh_dashboard.jpeg",
		"src/assets/sh_rankings.jpeg",
	];
	type Project = {
		title: string;
		stack: JSX.Element[];
		description: string;
		from: string;
		to: string;
		link: string;
		media: JSX.Element;
	};

	const projects: Project[] = [
		{
			title: "Comps",
			stack: [<SiPython color="#3776AB" />, <SiQt color="#41CD52" />],
			description:
				"A desktop application which retrieves and processes sold listings data from eBay, streamlining the process for collectors to access and isolate sold trading card listings. It enables collectors to identify fair prices for buying, bidding, or selling trading cards in the eBay trading card market, providing valuable insights for making informed pricing decisions.",
			from: "January 2023",
			to: "April 2023",
			link: "https://github.com/Aendoarphin/comps_v1",
			media: (
				<iframe
					height={300}
					src="https://www.youtube.com/embed/G1poX9Qd7oY?si=cGGPk-fWSM2fVDiV"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					className="pt-2"
				></iframe>
			),
		},
		{
			title: "ScrapHouse",
			stack: [
				<SiJavascript color="#F7DF1E" />,
				<SiCss3 color="#1572B6" />,
				<SiSass color="#CC6699" />,
				<SiNextdotjs />,
				<SiReact color="#61DAFB" />,
				<SiMongodb className="text-[#47a248] bg-foreground rounded-full p-1" />,
				<SiAuth0 color="#EB5424" />,
			],
			description:
				"An ongoing project that aims to provide comprehensive information on the top fighter rankings, news, and statistical data across various MMA promotions. Planned features, including the incorporation of event schedules and fighter directory, are in the works as part of this ongoing project.",
			from: "December 2023",
			to: "Present",
			link: "https://github.com/Aendoarphin/scraphousemma",
			media: (
				<div className="flex items-start pt-2">
					{shImages.map((img) => (
						<img src={img} className="w-1/3" />
					))}
				</div>
			),
		},
		{
			title: "Tool Life Utility",
			stack: [<SiPython color="#3776AB" />, <SiQt color="#41CD52" />],
			description:
				"A desktop application for displaying part production progress for multiple CNC machines, enabling operators to avoid the necessity of individually inspecting each machine throughout the shop.",
			from: "August 2023",
			to: "September 2023",
			link: "https://github.com/Aendoarphin/pyforcam",
			media: <img src="src/assets/tlu_sample.png" className="pt-2"></img>,
		},
	];

	const [selected, setSelected] = useState(0);

	const handleClick = (index: number) => {
		setSelected(index);
	};

	return (
		<div
			id="projects"
			className="flex flex-col px-8 sm:max-w-[30em] lg:max-w-[54em] md:max-w-[50em] mx-auto justify-center"
		>
			<h1 className="text-heading font-semibold">Projects</h1>
			<hr className="mb-2" />
			<div id="project-buttons" className="flex flex-nowrap">
				{projects.map((project: Project, index: number) => (
					<button
						type="button"
						key={index}
						className={`transition-all ease-in font-light mr-4 pb-2 ${
							selected === index ? "font-normal" : "text-neutral-600"
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
					<a
						href={projects[selected].link}
						target="_blank"
						className="underline"
					>
						Go To Project
					</a>
					<p>
						{projects[selected].from} - {projects[selected].to}
					</p>
				</div>
				<div className="flex flex-nowrap justify-start gap-2">
					{projects[selected]["stack"].map((icon: JSX.Element) => icon)}
				</div>
				{projects[selected].media}
			</div>
		</div>
	);
}