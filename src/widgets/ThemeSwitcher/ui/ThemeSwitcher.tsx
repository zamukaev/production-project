import { ButtonHTMLAttributes, FC } from "react";

import { Theme, useTheme } from "app/provides/ThemeProvider";
import { Button, ThemeButton } from "shered/ui/Button/Button";

import { classNames } from "shered/lib/classNames/classNames";
import DarkIcon from "shered/assets/icons/dark.svg";
import LightIcon from "shered/assets/icons/light.svg";

import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	const { className, ...otherProps } = props;
	const { toggleTheme, theme } = useTheme();

	return (
		<Button type="button" theme={ThemeButton.CLEAR} className={classNames(styles.ThemeSwitcher, {}, [className])} onClick={toggleTheme}{...otherProps}>
			{theme == Theme.DARK ? <DarkIcon /> : <LightIcon />
			}
		</Button >
	);
}


