// packages
import { useState } from "react";
import "../css/Login.css";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

// css
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleError = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = () => {
    if (!username || !password) {
      handleError("Barcha ma'lumotlarni kiriting");
      return;
    }

    if (username === "admin" && password === "a@a@admina@a@") {
      Cookies.set("isLogined", true);
      return;
    }

    handleError("Username yoki parol noto'g'ri kiritildi");
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
