import "../assets/css/cards.css";
import { project1, project2, project3, project4 } from "../assets/images";
import { useNavigate } from "react-router-dom";
function HomeCards() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home_cards_section">
        <div className="container">
          <div className="home_cards_info">
            <h1 className="title">Sifatli Dizayn Xizmatlari</h1>
            <p className="desc1">
              Bizning jamoamiz tajribali mutaxassislar, ijodkor dizaynerlar va
              malakali muhandislardan iborat bo'lib, har bir loyiha ustida
              jiddiyat bilan ishlaydi. Biz uchun har bir loyiha alohida
              ahamiyatga ega bo'lib, mijozlarning ehtiyoj va istaklarini to'liq
              qondirishga intilamiz.
            </p>
          </div>
        </div>
        <div className="home_cards cards1 container">
          <div>
            <div className="home_card home_card_1">
              <img src={project1} alt="" />
            </div>
            <div className="home_card home_card_2">
              <img src={project2} alt="" />
              <div className="home_card_info card_info_1">
                <h3>Tajribali Jamoa</h3>
                <p className="desc">
                  Bizning mutaxassislarimiz ko'p yillik tajribaga ega bo'lib,
                  har bir loyiha ustida ijodkorlik va professionalizm bilan
                  ishlaydi. Har bir dizayn va qurilish bosqichi puxta o'ylangan
                  va puxta bajarilgan bo'ladi
                </p>
                {/* <button className="btn">CHECK OUT</button> */}
              </div>
              <div className="home_card_info card_info_2">
                <h3>Yuqori Sifatli Ish</h3>
                <p className="desc">
                  Bizning asosiy maqsadimiz - mijozlarimizga yuqori sifatli
                  xizmatlarni taqdim etish. Materiallardan foydalanishdan
                  tortib, oxirgi natijagacha bo'lgan barcha jarayonlar yuqori
                  sifat standartlariga javob beradi.
                </p>
                {/* <button className="btn">CHECK OUT</button> */}
              </div>
            </div>
          </div>
          <div>
            <div className="home_card home_card_3">
              <img src={project3} alt="" />

              <div className="home_card_info">
                <h3>Mijozlar Bilan Yaqqol Hamkorlik</h3>
                <p className="desc">
                  Mijozlarimiz bilan yaqin hamkorlik qilamiz. Ularning
                  ehtiyojlari, istaklari va fikrlari biz uchun muhimdir. Har bir
                  loyiha individual tarzda yondashiladi va mijozning
                  tasavvurlari hisobga olinadi.
                </p>
                <button className="btn" onClick={() => navigate("/Projects")}>
                  Loyihalar
                </button>
              </div>
            </div>
            <div className="home_card home_card_4">
              <img src={project4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCards;
