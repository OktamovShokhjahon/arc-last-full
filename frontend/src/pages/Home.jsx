import { main } from "../assets/images";
import Footer from "../components/Footer";
import HomeCards from "../components/HomeCards";
import { useNavigate } from "react-router-dom";
import HomeClients from "../components/HomeClients";
import HomeSwiper from "../components/HomeSwiper";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import HomeServices from "./HomeServices";
import HomePartners from "./HomePartners";
import FAQ from "./HomeFaq";

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global");
  const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"));

  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleError = () => {
    toast.error("Hamma ma'lumotni kiriting !!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSuccess = () => {
    toast.success("Muvaffaqiyatli jo'natildi.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = () => {
    if (firstName.length < 1 || phone.length < 1 || message.length < 1) {
      handleError();
      return;
    }

    const contact = {
      firstName,
      phone,
      message,
    };

    axios
      .post("http://localhost:4100/api/contact/create", contact)
      .then((res) => {
        console.log(res.data);
        handleSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <>
      <ToastContainer />
      <section className="home">
        <img src={main} alt="" />

        <div className="home_content">
          <h1 className="title">{t("main.title")}</h1>
          <p className="desc">{t("main.desc")}</p>
          <div className="home_btns">
            <button onClick={() => navigate("/projects")} className="btn">
              {t("main.button")}
            </button>
          </div>
        </div>
      </section>

      <div className="virtual_viewer">
        <section className="counter">
          <ul>
            <li>
              <h3>10+</h3>
              <p>{t("status.title1")}</p>
            </li>
            <li>
              <h3>210+</h3>
              <p>{t("status.title2")}</p>
            </li>
            <li>
              <h3>10+</h3>
              <p>{t("status.title3")}</p>
            </li>
            <li>
              <h3>20+</h3>
              <p>{t("status.title4")}</p>
            </li>
          </ul>
        </section>
        <div className="container">
          <h1 className="title">{t("projects.title")}</h1>
          <p className="desc1">{t("projects.desc")}</p>

          <HomeSwiper />

          <iframe
            width="100%"
            height="640"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            src="https://kuula.co/share/collection/7KsYS?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
          ></iframe>
        </div>
      </div>

      <HomeServices />
      <HomeClients />
      <HomePartners />
      <FAQ />

      <div className="contact">
        <div className="contact_content">
          <div className="header_form">
            <div className="contact_label">
              <span>{t("contactPage.name")}</span>
              <input
                type="text"
                placeholder="Muhammad"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="contact_label">
              <span>{t("contactPage.phone")}</span>
              <input
                type="number"
                placeholder="+998"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="contact_label">
              <span>{t("contactPage.message")}</span>
              <textarea
                placeholder={t("contactPage.message")}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="contact_btn">
              <button className="btn" type="submit" onClick={handleSubmit}>
                {t("contactPage.button")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Home;
