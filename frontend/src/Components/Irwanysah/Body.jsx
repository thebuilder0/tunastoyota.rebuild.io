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
          Perkenalkan, saya Irwansyah, spesialis mobil Toyota. Dengan pengalaman
          saya, saya bisa bantu Anda memilih mobil yang paling sesuai dengan
          kebutuhan. Dari mulai test drive, konsultasi, sampai urusan
          surat-surat, saya siap membantu.
        </p>
        <button className="call-wa">
          <FaPhoneAlt />
          <a href="https://wa.me/+6281514651742?text=Halo, saya Tertarik dengan produk ini">
            Irwansyah
          </a>
        </button>
      </div>
    </div>
  );
};
