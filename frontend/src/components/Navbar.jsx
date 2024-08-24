// packages
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { logo } from "../assets/images";
import Dropdown from "../components/Dropdown";

import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"));

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLang = (lang) => {
    Cookies.set("lang", lang);
  };

  useEffect(() => {
    if (cookie_lang) {
      i18n.changeLanguage(cookie_lang);
    } else {
      i18n.changeLanguage("uz");
    }
  }, [cookie_lang]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newValue = Cookies.get("lang");
      if (newValue !== cookie_lang) {
        setCookie_lang(newValue);
        i18n.changeLanguage(newValue);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, ["lang", cookie_lang]);
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav_items">
          <li className="nav_item">
            <NavLink to="/">{t("navbar.navbar1")}</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/projects">{t("navbar.navbar2")}</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/blog">{t("navbar.navbar3")}</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/contact">{t("navbar.navbar4")}</NavLink>
          </li>
          <li className="nav_item">
            <Dropdown
              options={[
                {
                  label: "UZ",
                  value: "uz",
                },
                {
                  label: "EN",
                  value: "en",
                },
                {
                  label: "RU",
                  value: "ru",
                },
              ]}
              placeholder={cookie_lang === 'uz' ? 'UZ' : cookie_lang === 'en' ? 'EN' : cookie_lang === 'ru' ? 'RU' : "Tilni tanlang"}
              handleChangeLang={handleChangeLang}
            />
          </li>
        </ul>

        <li className="nav_item nav_responsive_icons">
          {isOpen ? (
            <i onClick={handleChange} className="fa-solid fa-xmark"></i>
          ) : (
            <i onClick={handleChange} className="fa-solid fa-bars"></i>
          )}
        </li>
      </div>
      {isOpen && (
        <div className="container responsive_nav_container">
          <ul className="responsive_nav_items">
            <li className="responsive_nav_item">
              <NavLink to="/">Bosh sahifa</NavLink>
            </li>
            <li className="responsive_nav_item">
              <NavLink to="/projects">Loyihalar</NavLink>
            </li>
            <li className="responsive_nav_item">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="responsive_nav_item">
              <NavLink to="/contact">Bog’lanish</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
