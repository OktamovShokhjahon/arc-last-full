// packages
import { useState } from "react";
import axios from "axios";

// css
import "../css/Modal.css";

function BlogsModal({ setShowModal, id, getAllData }) {
  const [descUz, setDescUz] = useState(null);
  const [descEn, setDescEn] = useState(null);
  const [descRu, setDescRu] = useState(null);
  const [blog, setBlog] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

  if (blog === null) {
    getData();
  }

  if (!descUz) {
    if (blog) {
      setDescUz(blog.desc_uz);
    }
  }

  if (!descEn) {
    if (blog) {
      setDescEn(blog.desc_en);
    }
  }

  if (!descRu) {
    if (blog) {
      setDescRu(blog.desc_ru);
    }
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    if (selectedFile) {
      formData.append("newImage", selectedFile);
    } else {
      console.log(blog);
      formData.append("image", blog.image);
    }

    formData.append("desc_uz", descUz);
    formData.append("desc_en", descEn);
    formData.append("desc_ru", descRu);

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
      console.log(response);
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
              className="fa-solid fa-xmark"
            ></i>
          </div>
          <div className="create_blog modal_body" style={{ border: "none" }}>
            <div className="create_blog_label">
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className="modal_body_label">
              <span>Ozbekcha Matnni kiriting</span>
              <textarea
                placeholder="O'zbekcha Matnni kiriting"
                onChange={(e) => setDescUz(e.target.value)}
                value={descUz}
              ></textarea>
            </div>
            <div className="modal_body_label">
              <span>Ruscha Matnni kiriting</span>
              <textarea
                placeholder="Ruscha Matnni kiriting"
                onChange={(e) => setDescRu(e.target.value)}
                value={descRu}
              ></textarea>
            </div>
            <div className="modal_body_label">
              <span>Ingilizcha Matnni kiriting</span>
              <textarea
                placeholder="O'zbekcha Matnni kiriting"
                onChange={(e) => setDescEn(e.target.value)}
                value={descEn}
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
