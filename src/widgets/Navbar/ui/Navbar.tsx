import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { classNames } from "shered/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shered/ui/AppLink/AppLink";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import styles from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>{t("Главная стрыница")}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t("О сайте")}</AppLink>
			</div>

		</div>
	);
}


