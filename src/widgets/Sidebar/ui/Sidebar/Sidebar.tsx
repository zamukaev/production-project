import { FC, useState } from "react";
import { classNames } from "shered/lib/classNames/classNames";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	return (
		<div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={styles.lang} />
			</div>
		</div >
	);
}
