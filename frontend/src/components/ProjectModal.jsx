import { useState } from "react";
import "../assets/css/modal.css";
import useFetch from "../hooks/useFetch";

// packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProjectModal({ setShowModal, modalId }) {
  const { data, isLoading, err } = useFetch(
    `http://localhost:4100/api/projects/id/${modalId}`
  );

  const fixDate = (dateStr) => {
    const dateObj = new Date(dateStr);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = dateObj.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal_header">
          <div className="close-button" onClick={() => setShowModal(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        {data && (
          <>
            <div className="modal_body">
              <Carousel>
                {data.data.images.map((item) => {
                  return (
                    <div>
                      {item.includes(".jpg") ? (
                        <img
                          src={`http://localhost:4100/uploads/${item}`}
                          alt=""
                        />
                      ) : (
                        <video width={"100%"} autoPlay loop muted>
                          <source
                            src={`http://localhost:4100/uploads/${item}`}
                          />
                        </video>
                      )}
                    </div>
                  );
                })}
              </Carousel>
            </div>

            <div className="modal-date">{fixDate(data.data.createdDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
