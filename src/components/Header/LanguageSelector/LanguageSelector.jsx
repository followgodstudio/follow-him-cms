/* eslint-disable react/jsx-no-bind */
import { useTranslation } from "react-i18next";
import { useState } from "react";
import chineseIcon from "assets/images/language-zh.png";
import englishIcon from "assets/images/language-en.png";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isChinese, setIsChinese] = useState(i18n.language === "zh");
  const [icon, setIcon] = useState(
    i18n.language === "zh" ? chineseIcon : englishIcon
  );

  const handleClick = () => {
    const newIsChinese = !isChinese;
    setIsChinese(newIsChinese);
    setIcon(newIsChinese ? chineseIcon : englishIcon);
    i18n.changeLanguage(newIsChinese ? "zh" : "en");
  };

  return (
    <button type="button" onClick={handleClick}>
      <img style={{ maxWidth: "50px" }} src={icon} alt="change language" />
    </button>
  );
};

export default LanguageSelector;
