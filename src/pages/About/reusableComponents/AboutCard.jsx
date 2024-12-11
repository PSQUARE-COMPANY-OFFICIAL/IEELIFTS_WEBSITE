import mamImg from "../../../assets/About/mamimg.jpg";
import prabhImg from "../../../assets/About/prabhsirimg.jpg";
import handsir from "../../../assets/About/handsirimg.jpg";
const AboutCard = () => {
  return (
    <div className="about_card_container">
      <div className="about_card_subcontainer">
        <div className="about_card">
          <img src={mamImg} />
          <p>Dr. Prabhjot Kaur</p>
          <h4>Director</h4>
        </div>
        <div className="about_card">
          <img src={prabhImg} />
          <p>Prabhsimran Singh </p>
          <h4>Director</h4>
        </div>
        <div className="about_card">
          <img src={handsir} />
          <p>Arun Handa</p>
          <h4>CEO</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;