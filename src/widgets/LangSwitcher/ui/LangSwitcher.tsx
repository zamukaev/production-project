import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shered/lib/classNames/classNames";

import { Button, ThemeButton } from "shered/ui/Button/Button";

import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
	className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
	}
	return (
		<Button theme={ThemeButton.CLEAR} className={classNames(styles.LangSwitcher, {}, [className])} onClick={toggle} type="button">
			{t("Язык")}
		</Button>
	);
}

export default LangSwitcher;