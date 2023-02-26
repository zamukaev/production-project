import React from 'react'
import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation("main");
	console.log("main page")
	return (
		<div>
			{t("Главная стрыница")}
		</div>
	)
}

export default MainPage;
