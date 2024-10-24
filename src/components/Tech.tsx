import {
	SiJavascript,
	SiCss3,
	SiSass,
	SiNextdotjs,
	SiReact,
	SiMongodb,
	SiCsharp,
	SiPython,
	SiTailwindcss,
	SiVite,
	SiVercel,
	SiExpress,
	SiMongoose,
	SiMicrosoftsqlserver,
	SiMysql,
	SiGit,
	SiNpm,
	SiBootstrap,
	SiFirebase,
	SiDotnet,
	SiVisualstudio,
	SiVisualstudiocode,
	SiRedux,
	SiJquery,
	SiFigma,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiWireshark,
	SiGnubash,
	SiLinux,
} from "@icons-pack/react-simple-icons";

const Tech = () => {
	const stack = [
		{ tag: SiJavascript, iconColor: "#f7df1e" },
		{ tag: SiCss3, iconColor: "#1572b6" },
		{ tag: SiSass, iconColor: "#cc6699" },
		{ tag: SiNextdotjs, iconColor: "#ffffff" },
		{ tag: SiReact, iconColor: "#61dafb" },
		{ tag: SiMongodb, iconColor: "#47a248" },
		{ tag: SiPython, iconColor: "#3776ab" },
		{ tag: SiCsharp, iconColor: "#512BD4" },
		{ tag: SiTailwindcss, iconColor: "#38b2ac" },
		{ tag: SiVite, iconColor: "#646CFF" },
		{ tag: SiVercel, iconColor: "#ffffff" },
		{ tag: SiExpress, iconColor: "#ffffff" },
		{ tag: SiMongoose, iconColor: "#880000" },
		{ tag: SiMicrosoftsqlserver, iconColor: "#cc2927" },
		{ tag: SiMysql, iconColor: "#00758f" },
		{ tag: SiGit, iconColor: "#f05032" },
		{ tag: SiNpm, iconColor: "#cb3837" },
		{ tag: SiBootstrap, iconColor: "#7952b3" },
		{ tag: SiFirebase, iconColor: "#ffca28" },
		{ tag: SiDotnet, iconColor: "#5c2d91" },
		{ tag: SiVisualstudio, iconColor: "#5c2d91" },
		{ tag: SiVisualstudiocode, iconColor: "#007acc" },
		{ tag: SiRedux, iconColor: "#764abc" },
		{ tag: SiJquery, iconColor: "#0769ad" },
		{ tag: SiFigma, iconColor: "#f24e1e" },
		{ tag: SiAdobephotoshop, iconColor: "#31a8ff" },
		{ tag: SiAdobeillustrator, iconColor: "#ff9a00" },
		{ tag: SiWireshark, iconColor: "#1679a7" },
		{ tag: SiGnubash, iconColor: "#4e9a06" },
		{ tag: SiLinux, iconColor: "#fcc624" },
	];

	return (
		<section
			id="tech"
			className="flex flex-col px-8 sm:max-w-[30em] lg:max-w-[54em] md:max-w-[50em] mx-auto justify-center"
		>
			<h1 className="text-heading font-semibold text-left w-full">Tech</h1>
			<hr className="mb-2 w-full" />
			<div className="w-full py-2">
				<div className="flex flex-wrap justify-center gap-6">
					{stack.map(({ tag: Icon, iconColor }, index) => (
						<div key={index}>
							<Icon size={40} color={iconColor} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Tech;
