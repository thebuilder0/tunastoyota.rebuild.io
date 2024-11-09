import { FaClipboardCheck, FaThumbsUp, FaChartLine } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import "./Flip.css";

export const WhyToyota = () => {
  return (
    <div className="why-toyota">
      <div className="why">
        <p style={{}}>KENAPA HARUS TOYOTA</p>
      </div>
      <div className="container-grid">
        <div className="grid-container-toyota">
          <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div style={{ fontSize: "32px" }}>
                  <FaChartLine />
                </div>
                <p>Nilai Jual Kembali Tinggi</p>
              </div>
              <div className="flip-box-back">
                <p>Memiliki nilai jual tinggi daripada merek lain</p>
              </div>
            </div>
          </div>
          <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div style={{ fontSize: "32px" }}>
                  <FaThumbsUp />
                </div>
                <p>Kualitas Produk</p>
              </div>
              <div className="flip-box-back">
                <p>Kualitasnya yang handal dan tahan lama</p>
              </div>
            </div>
          </div>
          <div className="flip-box-1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div style={{ fontSize: "32px" }}>
                  <FaClipboardCheck />
                </div>
                <p>Program Promosi Menarik</p>
              </div>
              <div className="flip-box-back">
                <p>Diskon, Hadiah, Kredit Rendah menunggu Anda</p>
              </div>
            </div>
          </div>
          <div className="flip-box-2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div style={{ fontSize: "32px" }}>
                  <RiGlobalFill />
                </div>
                <p>Kualitas Produk</p>
              </div>
              <div className="flip-box-back">
                <p>Memiliki jaringan yang sangat luas di seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flip">*flip</div>
    </div>
  );
};
