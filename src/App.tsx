import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";

import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}
const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle</button>
			<Link to="/">MainPage</Link>
			<Link to="/about">AboutPage</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>

					<Route path={'/'} element={<MainPageAsync />} />
					<Route path={'/about'} element={<AboutPageAsync />} />

				</Routes>
			</Suspense>
		</div>
	);
}
export default App;