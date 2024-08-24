// components
import useFetch from "../hooks/useFetch";

// css
import "../assets/css/blog.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Projects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch("http://localhost:4100/api/blogs/");

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
      <div className="projects">
        <div className="projects_banner">
          <div className="container">
            <h1 className="banner_title">{t("blogsPage.title")}</h1>
            <p className="banner_link">{t("blogsPage.link")}</p>
          </div>

          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="projects_content">
            <div className="blog_cards">
              {projects &&
                projects.data &&
                projects.data.map((project) => {
                  const dateStr = project.createdDate;
                  const dateObj = new Date(dateStr);

                  const day = String(dateObj.getDate()).padStart(2, "0");
                  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-based
                  const year = dateObj.getFullYear();

                  const formattedDate = `${day}.${month}.${year}`;

                  return (
                    <div className="blog_card" key={project._id}>
                      <div className="blog_card_image">
                        <img
                          src={`http://localhost:4100/uploads/${project.image}`}
                          alt=""
                        />
                      </div>
                      <div className="blog_card_info">
                        <p className="desc">
                          {cookie_lang === "uz"
                            ? project.desc_uz
                            : cookie_lang === "en"
                            ? project.desc_en
                            : project.desc_ru}
                        </p>
                        <p className="date">{formattedDate}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
