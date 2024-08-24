// pakcages
import Cookies from "js-cookie";
import { useState } from "react";

// pages
import Projects from "./Projects";
import Login from "./Login";

function Home() {
  const [isLogined, setIsLogined] = useState(Cookies.get("isLogined"));

  setInterval(() => {
    if (Cookies.get("isLogined") != isLogined) {
      setIsLogined(Cookies.get("isLogined"));
    }
  }, 1000);

  return <>{isLogined ? <Projects /> : <Login />}</>;
}

export default Home;
