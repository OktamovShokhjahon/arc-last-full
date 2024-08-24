import "../assets/css/loader.css"; // Import the CSS file for styling

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="spinner"></div>
      </div>
      <div className="loader-overlay"></div>
    </>
  );
};

export default Loader;
