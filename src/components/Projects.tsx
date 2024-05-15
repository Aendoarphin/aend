import { useState } from "react";

export default function Projects() {
	const projects: Array<string> = ["Comps", "ScrapHouse", "Tool Utility"];
	const [selected, setSelected] = useState(0);

	const handleClick = (index: number) => {
		setSelected(index);
	};

	return (
		<div id="projects" className="flex flex-col border px-8">
			<h1 className="text-heading font-semibold">Projects</h1>
			<hr className="mb-2" />
			<div id="project-buttons" className="flex flex-nowrap">
				{projects.map((project, index) => (
					<button
						key={index}
						className={`border border-foreground font-light p-1 w-full first:rounded-l-sm last:rounded-r-sm ${
							selected === index ? "font-normal" : "brightness-50"
						}`}
						onClick={() => handleClick(index)}
					>
						{project}
					</button>
				))}
			</div>
		</div>
	);
}
