import { useEffect, useState } from "react";
import { contact, contactBackground } from "../assets/images";

// packages
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// css
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/responsive.css";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

function Contact() {
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
    <>
    
      <div className="contact">
        
        {/* <img src={contactBackground} alt="" /> */}

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

      <ToastContainer />
    </>
  );
}

export default Contact;
