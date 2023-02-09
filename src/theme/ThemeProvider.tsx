
import { FC, useMemo, useState } from "react";
import { Theme } from "../App";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(() => ({
		setTheme: setTheme,
		theme: theme
	}), [theme])
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
export default ThemeProvider;


