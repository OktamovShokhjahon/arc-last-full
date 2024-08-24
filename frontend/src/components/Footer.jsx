import { whiteLogo } from "../assets/images";
import { NavLink } from "react-router-dom";

// css
import "../assets/css/footer.css";

// packages
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Footer() {
  const [t, i18n] = useTranslation("global");
  const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"));

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
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <div className="logo">
            <h2>ARC Design Group</h2>
            <img src={whiteLogo} alt="" />
            <p>
              Architecture is both the process and the product of planning,
              designing...
            </p>
          </div>
        </div>
        <div className="footer-section remove-responsive">
          <h3>{t("footerHeader.title")}</h3>
          <ul>
            <li>
              <NavLink href={"/projects"}>{t("footerHeader.header1")}</NavLink>
            </li>
            <li>
              <NavLink href={"/blogs"}>{t("footerHeader.header2")}</NavLink>
            </li>
            <li>
              <NavLink href={"/contact"}>{t("footerHeader.header3")}</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section change-responsive">
          <h3>{t("footerNews.title")}</h3>
          <ul>
            <li>
              <p>{t("footerNews.desc")}</p>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t("footerSocials.title")}</h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-telegram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
