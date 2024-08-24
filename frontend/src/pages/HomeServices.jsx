import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

import "../assets/css/services.css";
import { service1, service2, service3 } from "../assets/images";

const HomeServices = () => {
  const { t, i18n } = useTranslation("global");
  const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"));

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

  useEffect(() => {
    if (cookie_lang) {
      i18n.changeLanguage(cookie_lang);
    } else {
      i18n.changeLanguage("uz");
    }
  }, [cookie_lang]);

  return (
    <section className="services">
      <div className="container services_container">
        <h1 className="title">{t("servicesPage.title")}</h1>

        <div className="services_cards">
          <div className="services_card service_card_1">
            <div className="services_card_image">
              <img src={service1} alt="" />
            </div>
            <div className="services_card_description">
              <h3>{t("servicesPage.title1")}</h3>
              <p className="desc">{t("servicesPage.desc1")}</p>
            </div>
          </div>
          <div className="services_card service_card_2">
            <div className="services_card_description service_card_description_2">
              <h3>{t("servicesPage.title2")}</h3>
              <p className="desc">{t("servicesPage.desc2")}</p>
            </div>
            <div className="services_card_image">
              <img
                // src="https://www.ivd.ru/images/cache/2022/4/28/widen_960_crop_1368_912_0_0_q90_2308712_0e3849503965fc45324084e6f.jpeg"
                // src="https://websitedemos.net/architects-04/wp-content/uploads/sites/403/2020/02/architect-plan.jpg"
                src={service2}
                alt=""
              />
            </div>
          </div>
          <div className="services_card service_card_3">
            <div className="services_card_image">
              <img
                src={service3}
                // src="https://websitedemos.net/architects-04/wp-content/uploads/sites/403/2020/02/architect-buildings.jpg"
                alt=""
              />
            </div>
            <div className="services_card_description">
              <h3>{t("servicesPage.title3")}</h3>
              <p className="desc">{t("servicesPage.desc3")}</p>
            </div>
          </div>
        </div>
      </div>

      <marquee behavior="" direction="" scrollamount="22">
        <h1>DESIGN</h1>
      </marquee>
    </section>
  );
};

export default HomeServices;
