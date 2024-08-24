import { useEffect, useState } from "react";
import "../App.css";
import Cookies from "js-cookie";

import { Carousel } from "react-responsive-3d-carousel";
import { useTranslation } from "react-i18next";

function HomeClients() {
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
    <div className="clients">
      <div className="container">
        <div className="clients_info">
          <div>
            <h1 className="title">{t("clientsHeader.title")}</h1>
            <p className="desc">{t("clientsHeader.desc")}</p>
          </div>
          <div className="raiting">
            <div className="clients_info_data">
              <h2>13m+</h2>
              <p className="desc">{t("clientsHeader.status1")}</p>
            </div>
            <div className="clients_info_data">
              <h2>4.88</h2>
              <p className="desc">{t("clientsHeader.status2")}</p>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="clients_cards">
          <Carousel>
            <div className="clients_card">
              <div className="clients_card_info">
                <p className="desc">{t("clients.client1.desc")}</p>
              </div>
              <div className="clients_card_author">
                <i class="fa-solid fa-user"></i>
                <div>
                  <p className="desc">{t("clients.client1.author")}</p>
                </div>
              </div>
            </div>
            <div className="clients_card">
              <div className="clients_card_info">
                <p className="desc">{t("clients.client2.desc")}</p>
              </div>
              <div className="clients_card_author">
                <i class="fa-solid fa-user"></i>

                <div>
                  <p className="desc">{t("clients.client2.author")}</p>
                </div>
              </div>
            </div>
            <div className="clients_card">
              <div className="clients_card_info">
                <p className="desc">{t("clients.client3.desc")}</p>
              </div>
              <div className="clients_card_author">
                <i class="fa-solid fa-user"></i>

                <div>
                  <p className="desc">{t("clients.client3.author")}</p>
                </div>
              </div>
            </div>
            <div className="clients_card">
              <div className="clients_card_info">
                <p className="desc">{t("clients.client4.desc")}</p>
              </div>
              <div className="clients_card_author">
                <i class="fa-solid fa-user"></i>

                <div>
                  <p className="desc">{t("clients.client4.author")}</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomeClients;
