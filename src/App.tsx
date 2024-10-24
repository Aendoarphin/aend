import "./App.css";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
	return (
		<div className="bg-background text-color-default">
			<header>
				<Nav />
			</header>
			<main className="flex flex-col gap-4">
				<About />
				<Projects />
				<Tech />
			</main>
			<footer>
				<p className="text-sm font-light text-center p-4">
					&copy; {new Date().getFullYear()} AEND
				</p>
			</footer>
		</div>
	);
}

export default App;
