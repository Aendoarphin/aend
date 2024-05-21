import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";
import { Phone, Mail, MapPin } from "lucide-react";
const About = () => {
	return (
		<section
			id="about"
			className="flex flex-col px-8 sm:max-w-[30em] lg:max-w-[54em] md:max-w-[50em] mx-auto justify-center"
		>
			<div className="sm:max-w-[30em] md:max-w-[50em] lg:max-w-[54em] mx-auto flex flex-col md:flex-row pt-24">
				<div className="items-center max-w-full flex md:flex-col overflow-clip justify-center min-w-64">
					<img
						src="./src/assets/profile-img.png"
						alt=""
						className="size-52 rounded-full overflow-clip bg-[url(./src/assets/profile-bg.jpg)] mix-blend-screen"
					/>
				</div>
				<br />
				<div className="mx-auto md:mx-0">
					<div className="text-nowrap flex justify-between items-center">
						<h1 className="text-heading font-semibold">Arhon Pineda</h1>
						<p className="font-light text-xs flex flex-row gap-1">
							<MapPin
								size={16}
								fill="var(--foreground)"
								stroke="var(--background)"
							/>
							Oklahoma, USA
						</p>
					</div>
					<hr className="mb-2" />
					<p className="font-light">
						Arhon is a developer and graphic designer deeply passionate
						about user experience and visual aesthetics. With his background in
						computer science and extensive knowledge in various development
						tools, he strives to maximize user experience while maintaining
						efficient solutions.
					</p>
					<div
						id="contact-container"
						className="flex flex-row md:mx-auto gap-6 mt-2"
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
			</div>
		</section>
	);
};

export { About };
