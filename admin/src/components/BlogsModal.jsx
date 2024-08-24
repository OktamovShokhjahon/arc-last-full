// packages
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";

// css
import "../css/Modal.css";

function BlogsModal({ setShowModal, id, getAllData }) {
  const [desc, setDesc] = useState(null);
  const [blog, setBlog] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  // const {
  //   data: blog,
  //   isLoading,
  //   err,
  // } = useFetch(`http://localhost:4100/api/blogs/id/${id}`);

  const getData = () => {
    axios
      .get(`http://localhost:4100/api/blogs/id/${id}`)
      .then((res) => {
        if (res.data.ok) {
          setBlog(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!blog) {
    getData();
  }

  if (!desc) {
    if (blog) {
      setDesc(blog.desc);
    }
  }

  const handleImageChange = (event) => {
    setSelectedImages(event.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    console.log(desc);
    if (selectedImages) {
      for (let i = 0; i < selectedImages.length; i++) {
        formData.append("image", selectedImages[i]);
      }
    }
    formData.append("desc", desc);

    try {
      const response = await axios.post(
        `http://localhost:4100/api/blogs/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setShowModal(false);
      getAllData();
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal_header">
            <i
              onClick={() => setShowModal(false)}
              class="fa-solid fa-xmark"
            ></i>
          </div>
          <div className="create_blog modal_body" style={{ border: "none" }}>
            <div className="create_blog_label">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>
            <div className="modal_body_label">
              <span>Matnni o'zgartirish</span>
              <textarea
                placeholder="Matnni kiriting"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              ></textarea>
            </div>
            <div className="modal_body_btn">
              <button className="btn" onClick={handleUpload}>
                Tahrirlash
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  );
}

export default BlogsModal;
