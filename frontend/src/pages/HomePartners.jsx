import "../assets/css/partners.css";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
} from "../assets/images";

const HomePartners = () => {
  return (
    <div className="partners">
      <h1 className="title" style={{ textAlign: "center" }}>
        Bizning hamkorlarimiz
      </h1>
      <marquee scrollamount="10" behavior="" direction="">
        <div className="container">
          <div className="partners_image">
            <img src={partner1} alt="" />
          </div>
          <div className="partners_image">
            <img src={partner2} alt="" />
          </div>
          <div className="partners_image">
            <img src={partner6} alt="" />
          </div>
          <div className="partners_image">
            <img src={partner4} alt="" />
          </div>
          <div className="partners_image">
            <img src={partner5} alt="" />
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default HomePartners;
