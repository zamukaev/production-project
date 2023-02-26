import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shered/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}
interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		className,
		to,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;
	return (
		<Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...otherProps}>
			{children}
		</Link>
	);
}

