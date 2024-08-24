import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(document.readyState === "complete");

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default RootLayout;
