import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// components
import ProjectModal from "../components/ProjectModal";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";

function Projects() {
  const [modalId, setModalId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const {
    data: projects,
    isLoading,
    error,
  } = useFetch("http://localhost:4100/api/projects/");

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
      {isLoading && <Loader />}

      <div className="projects">
        <div className="projects_banner">
          <div className="container">
            <h1 className="banner_title">{t("projectsPage.title")}</h1>
            <p className="banner_link">{t("projectsPage.link")}</p>
          </div>

          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="projects_content">
            <div className="projects_cards">
              {projects &&
                projects.data &&
                projects.data.map((project) => {
                  return (
                    <div
                      className="projects_card"
                      onClick={() => {
                        setModalId(project._id);
                        setShowModal(true);
                      }}
                    >
                      <div className="media_number">
                        {project.images.length}
                      </div>

                      {project.image.includes(".jpg") ? (
                        <img
                          src={`http://localhost:4100/uploads/${project.image}`}
                          alt=""
                        />
                      ) : (
                        <video autoPlay loop muted>
                          <source
                            src={`http://localhost:4100/uploads/${project.image}`}
                          />
                        </video>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ProjectModal setShowModal={setShowModal} modalId={modalId} />
      )}
    </>
  );
}

export default Projects;
