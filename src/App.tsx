import "./App.css";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import Projects from "./components/Projects";

function App() {


	return (
		<div className="bg-background text-color-default">
			<header>
				<Nav />
			</header>
			<main>
				<About />
				<Projects />
			</main>
			<footer>
				<p className="text-sm font-light text-center p-4">&copy; {new Date().getFullYear()} AEND</p>
			</footer>
		</div>
	);
}

export default App;
