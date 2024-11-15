import "./Stat.css";
import { FaCar, FaUser, FaMedal } from "react-icons/fa";

export const Stat = () => {
  return (
    <div className="Container-Stat">
      <div className="list-stat">
        <div className="stat">
          <div
            className="icon-stat"
            style={{
              fontSize: "72px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <FaCar />
          </div>
          <div className="desc">
            <p className="judul">600+</p>
            <p>Mobil Terjual</p>
          </div>
        </div>
        <div className="stat">
          <div
            className="icon-stat"
            style={{
              fontSize: "64px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <FaUser />
          </div>
          <div className="desc">
            <p className="judul">250+</p>
            <p>Pengunjung Perhari</p>
          </div>
        </div>
        <div className="stat">
          <div
            className="icon-stat"
            style={{
              fontSize: "64px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <FaMedal />
          </div>
          <div className="desc">
            <p className="judul">Verified</p>
            <p>Dealer Terpercaya</p>
          </div>
        </div>
      </div>
    </div>
  );
};
