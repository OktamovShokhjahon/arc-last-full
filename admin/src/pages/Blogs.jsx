// packages
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";

// components
import BlogsModal from "../components/BlogsModal";

// css
import "../css/Blogs.css";

function Blogs() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [descUz, setDescUz] = useState(null);
  const [descEn, setDescEn] = useState(null);
  const [descRu, setDescRu] = useState(null);
  const [projects, setProjects] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [modalId, setModalId] = useState(null);

  const isLogined = Cookies.get("isLogined");

  if (!isLogined) {
    window.location.href = "http://localhost:5173/";
  }

  const getData = () => {
    axios
      .get("http://localhost:4100/api/blogs/")
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!projects) {
    getData();
  }

  const handleImageChange = (event) => {
    setSelectedImages(event.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("images", selectedImages[i]);
    }
    formData.append("desc_uz", descUz);
    formData.append("desc_en", descEn);
    formData.append("desc_ru", descRu);

    try {
      const response = await axios.post(
        "http://localhost:4100/api/blogs/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      getData();
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const handleDelete = (id) => {
    axios
      .post(`http://localhost:4100/api/blogs/delete/${id}`)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="blogs">
        <div className="container">
          <div className="create_blog">
            <div className="create_blog_label">
              <span>Rasm yuklang</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>
            <div className="create_blog_label">
              <span>O'zbekcha matnni kiriting</span>
              <textarea
                placeholder="Matnni kiriting"
                onChange={(e) => setDescUz(e.target.value)}
                value={descUz}
              ></textarea>
            </div>
            <div className="create_blog_label">
              <span>Ingilizcha matnni kiriting</span>
              <textarea
                placeholder="Matnni kiriting"
                onChange={(e) => setDescEn(e.target.value)}
                value={descEn}
              ></textarea>
            </div>
            <div className="create_blog_label">
              <span>Ruscha matnni kiriting</span>
              <textarea
                placeholder="Matnni kiriting"
                onChange={(e) => setDescRu(e.target.value)}
                value={descRu}
              ></textarea>
            </div>
            <button className="btn" onClick={handleUpload}>
              Yaratish
            </button>
          </div>

          <div className="blog_cards">
            {projects &&
              projects.map((project) => {
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
                      <p className="desc">{project.desc}</p>
                      <p className="date">{formattedDate}</p>
                    </div>
                    <div className="blog_card_settings">
                      <div className="project_card_delete">
                        <i
                          onClick={() => handleDelete(project._id)}
                          className="fa-solid fa-trash"
                        ></i>
                      </div>
                      <div className="project_card_edit">
                        <i
                          class="fa-solid fa-pen"
                          onClick={() => {
                            setShowModal(true);
                            setModalId(project._id);
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {showModal && (
        <BlogsModal
          id={modalId}
          setShowModal={setShowModal}
          getAllData={getData}
        />
      )}
    </>
  );
}

export default Blogs;
