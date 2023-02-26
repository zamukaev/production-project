import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shered/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ThemeButton {
	CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { theme, className, children, ...otherProps } = props;
	return (
		<button className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherProps}>
			{children}
		</button>
	);
}

