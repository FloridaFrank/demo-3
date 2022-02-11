import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo rotate"
					alt="logo"
					width="40"
					height="40"
				/>

				<span className="architect">UI/UX Enterprise Architect</span>
			</header>

			<div className="main">
				<h2>App Dev</h2>
				<div className="project">project</div>
				<div className="sub-main">
					<h2>GitHub Pages demo-3</h2>
				</div>
			</div>
			<footer>Frank Abong software &copy;2022</footer>
		</div>
	);
}

export default App;
