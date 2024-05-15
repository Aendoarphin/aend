import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";
import { Phone, Mail, MapPin } from "lucide-react";
const About = () => {
	return (
		<div
			id="about"
			className="flex flex-col md:flex-row-reverse md:items-center md:justify-center md:min-h-screen"
		>
			<div className="mt-24 md:mt-0 max-w-full flex md:flex-col overflow-clip justify-center min-w-64">
				<img
					src="./src/assets/profile-img.png"
					alt=""
					className="size-64 lg:size-80 rounded-full overflow-clip bg-[url(./src/assets/profile-bg.jpg)] mix-blend-screen"
				/>
				<div
					id="contact-container"
					className="flex flex-col md:flex-row md:mx-auto gap-6 p-4 my-auto"
				>
					<a
						href="https://www.linkedin.com/in/arhon-pineda-ba957023a/"
						title="LinkedIn"
					>
						<SiLinkedin />
					</a>
					<a href="https://github.com/aendoarphin" title="GitHub">
						<SiGithub />
					</a>
					<a href="tel:+19189062551" title="Phone">
						<Phone fill="var(--foreground)" strokeWidth={0} />
					</a>
					<a href="mailto:arhon.k.pineda@gmail.com" title="Email">
						<Mail stroke="var(--background)" fill="white" />
					</a>
				</div>
			</div>
			<div className="p-8 md:pl-0 mx-auto md:mx-0 max-w-[30em]">
				<div className="text-nowrap flex justify-between items-center">
					<h1 className="text-heading font-semibold">Arhon Pineda</h1>
					<p className="font-light text-xs flex flex-row gap-1">
						<MapPin
							size={18}
							fill="var(--foreground)"
							stroke="var(--background)"
						/>
						Oklahoma, USA
					</p>
				</div>
				<hr className="mb-2" />
				<p className="font-light">
					Arhon is a web developer and graphic designer deeply passionate about
					user experience and visual aesthetics. His primary goal is to create
					user-centered products and solutions.
				</p>
			</div>
		</div>
	);
};

export { About };
