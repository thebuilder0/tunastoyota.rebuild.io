import "./Profil.css";
import { FaCheck } from "react-icons/fa";

export const Profil = () => {
  return (
    <div className="container-profil">
      <div className="container-logo">
        <img className="logo-profil" src="../public/Assets/logo.png"></img>
      </div>
      <div className="desc-profil">
        Bosan dengan proses pembelian mobil yang berbelit-belit? Di tunas
        TOYOTA, kami berkomitmen untuk memberikan pengalaman pembelian yang
        menyenangkan dan tanpa ribet. Tim sales kami yang berpengalaman siap
        membantu Anda menemukan mobil impian dengan pilihan yang luas dan harga
        yang kompetitif. Selain itu, kami juga menawarkan berbagai fasilitas
        pendukung seperti ruang tunggu yang nyaman, area bermain anak, dan
        bengkel yang lengkap. Kunjungi kami sekarang dan rasakan perbedaannya!
      </div>
      <div className="list-icon">
        <div
          className="icon-foot"
          style={{
            fontSize: "32px",
            backgroundColor: "transparent",
            color: "red",
          }}
        >
          <FaCheck />
          <span>Aman</span>
        </div>
        <div
          className="icon-foot"
          style={{
            fontSize: "32px",
            backgroundColor: "transparent",
            color: "red",
          }}
        >
          <FaCheck />
          <span>Terpercaya</span>
        </div>
        <div
          className="icon-foot"
          style={{
            fontSize: "32px",
            backgroundColor: "transparent",
            color: "red",
          }}
        >
          <FaCheck />
          <span>Kualitas Terjamin</span>
        </div>
      </div>
    </div>
  );
};
