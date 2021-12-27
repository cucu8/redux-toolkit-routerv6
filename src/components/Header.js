import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage,setDarkMode } from "../store/SiteSlice.js/SiteSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["tr", "en"];

  return (
    <>
      <div>
        Dark mode: {dark === false ? "false" : "true"} - Language:
        {language}
      </div>
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => dispatch(setLanguage(lang))}
            className={lang === language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          Dark mode: {dark === false ? "false" : "true"}
        </button>
      </div>
    </>
  );
};

export default Header;
