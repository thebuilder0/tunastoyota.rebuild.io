import "./Body.css";
import { FaPhoneAlt } from "react-icons/fa";

export const Pengalaman = () => {
  return (
    <section className="pengalaman">
      <h2 className="first">
        Pengalaman Membeli Mobil yang Tak<br></br> Terlupakan,
      </h2>
      <h2 className="second">Hanya di Toyota Kebayoran Lama</h2>
    </section>
  );
};

export const Irwansyah = () => {
  return (
    <div className="irwansyah">
      <div className="left">
        <img className="ir-image" src="../public/Assets/irwansyah.jpg" />
      </div>
      <div className="right">
        <h2>IRWANSYAH</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          sagittis in nunc eu convallis. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Sed at metus
          quis purus lacinia placerat ut sit amet lacus. Pellentesque iaculis
          non lorem quis feugiat. Duis tristique cursus pretium.
        </p>
        <button className="call-wa">
          <FaPhoneAlt />
          <a href="wa.me/">Irwansyah</a>
        </button>
      </div>
    </div>
  );
};
