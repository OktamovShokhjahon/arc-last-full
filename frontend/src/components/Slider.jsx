import "../assets/css/slider.css";
import { contact } from "../assets/images";

const Slider = () => {
  return (
    <div className="slider">
      {/* Radio buttons for controlling slides */}
      <input type="radio" name="slider" id="slide1" defaultChecked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />

      {/* Slides */}
      <div className="slides">
        <div className="slide">
          <img
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="Slide 1"
          />
        </div>
        <div className="slide">
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
          />
        </div>
        <div className="slide">
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
          />
        </div>
      </div>

      {/* Navigation controls */}
      <div className="controls">
        <label htmlFor="slide3" className="control left">
          &#10094;
        </label>
        <label htmlFor="slide2" className="control right">
          &#10095;
        </label>
        <label htmlFor="slide1" className="control left">
          &#10094;
        </label>
        <label htmlFor="slide3" className="control right">
          &#10095;
        </label>
        <label htmlFor="slide2" className="control left">
          &#10094;
        </label>
        <label htmlFor="slide1" className="control right">
          &#10095;
        </label>
      </div>
    </div>
  );
};

export default Slider;
