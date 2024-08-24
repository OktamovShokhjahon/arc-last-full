import useFetch from "../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

// css
import "../css/Projects.css";
import "react-toastify/dist/ReactToastify.css";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleSuccess = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const hadnleError = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const getData = () => {
    axios
      .get("http://localhost:4100/api/projects/")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        hadnleError("Keyinroq urinib ko'ring");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .post(`http://localhost:4100/api/projects/delete/${id}`)
      .then((res) => {
        if (res.data.ok) {
          getData();
          handleSuccess("Muvaffaqiyatli o'chirib tashlandi");
        }
      })
      .catch((err) => {
        getData();
        hadnleError("Keyinroq urinib ko'ring");
      });
  };

  // const handleCreate = async () => {
  //   const formData = new FormData();
  //   for (let i = 0; i < selectedImages.length; i++) {
  //     formData.append("images", selectedImages[i]);
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4100/api/projects/create",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log("Upload successful:", response.data);
  //     setSelectedImages([]);
  //     getData();
  //   } catch (error) {
  //     console.error("Error uploading images:", error);
  //   }
  // };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select files first!");
      return;
    }

    const selectedFilesLength = selectedFiles.length;

    let c = 0;
    for (let i = 0; i < selectedFilesLength; i++) {
      const item = selectedFiles[i];
      if (item.type.includes("image")) {
        c += 1;
      }
    }

    if (c === 0) {
      hadnleError("Kamida bitta rasm kiriting");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("media", selectedFiles[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:4100/api/projects/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      handleSuccess("Muvaffaqiyatli yaratildi");
      getData();
    } catch (error) {
      hadnleError("Nimadir xato ketdi");
    }
  };

  return (
    <>
      <div className="projects">
        <div className="container">
          <div className="create_project">
            <div>
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileChange}
              />
              <div style={{ marginTop: "20px" }}>
                {selectedImages.length > 0 && (
                  <div>
                    <h3>Selected Images:</h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {selectedImages.map((image, index) => (
                        <div key={index}>
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Selected ${index}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                          <p>{image.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button className="btn" onClick={handleUpload}>
              Yaratish
            </button>
          </div>

          <div className="project_cards">
            {projects &&
              projects.data.map((project) => {
                return (
                  <div className="project_card" key={project._id}>
                    <div className="project_card_image">
                      {project.image.includes(".jpg") ? (
                        <img
                          src={`http://localhost:4100/uploads/${project.image}`}
                          alt=""
                        />
                      ) : (
                        <video width={"100%"} autoPlay loop muted>
                          <source
                            src={`http://localhost:4100/uploads/${project.image}`}
                          />
                        </video>
                      )}
                    </div>
                    <div className="project_card_settings">
                      <div className="project_card_delete">
                        <i
                          onClick={() => handleDelete(project._id)}
                          className="fa-solid fa-trash"
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <ToastContainer />

      {showModal && (
        <ProjectsEditModal id={modalId} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default Projects;
