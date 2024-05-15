import { useState, useEffect } from "react";

const Nav = () => {
	const brandText: Array<string> = ["a", "e", "n", "d"];
	const navLinks: Array<string> = ["about", "projects", "tech"];
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [visible, setVisible] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos: number = window.scrollY;
			const isScrollingDown: boolean = currentScrollPos < prevScrollPos;

			setPrevScrollPos(currentScrollPos);

			setVisible(isScrollingDown || currentScrollPos < 10);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<div
			className={`fixed left-0 right-0 backdrop-blur-md z-50 ${
				visible
					? "translate-y-0 transition-transform"
					: "-translate-y-full transition-transform"
			}`}
		>
			<nav className="flex items-center justify-between p-6">
				<a
					className="text-4xl sm:text-6xl h-min content-center uppercase transition-all flex gap-1 hover:gap-0 ease-in items-end group"
					href="/"
				>
					{brandText.map((letter) => (
						<p className="font-brand max-h-8 sm:max-h-12">{letter}</p> 
					))}
					<p className="font-brand text-sm sm:text-lg opacity-0 group-hover:opacity-100 duration-200">.dev</p>
				</a>
				<div id="links-container" className="flex flex-row gap-4 text-nowrap">
					{Object.values(navLinks).map((link) => (
						<div className="uppercase text-xs sm:text-base group transition-all">
							<a href={`#${link}`}>{link}</a>
							<br />
							<hr className="w-0 group-hover:w-full transition-all ease-in duration-75" />
						</div>
					))}
				</div>
			</nav>
		</div>
	);
};

export { Nav };
