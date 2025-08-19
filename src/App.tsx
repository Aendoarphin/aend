import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import "animate.css";


export default function App() {
	return (
		<div className="animate__animated animate__fadeIn">
			<header className="">
				<Nav />
			</header>
			<main className="flex flex-col gap-4 mx-auto">
				<About />
				<Projects />
				<Tech />
			</main>
			<footer className="flex w-full items-center justify-center">
				<p className="p-4 text-sm font-light text-center">
					&copy; {new Date().getFullYear()} AEND
				</p>
			</footer>
		</div>
	);
}