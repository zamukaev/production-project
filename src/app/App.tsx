import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss"
import { AboutPageAsync } from "pages/AboutPage/ui/AboutPageAsync";
import { MainPageAsync } from "pages/MainPage/ui/MainPageAsync";
import { useTheme } from "app/provides/ThemeProvider";
import { classNames } from "shered/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { fchmod, fchmodSync } from "fs";
import { AppRouter } from "./provides/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";


export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}
const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>

		</div>
	);
}
export default App;
