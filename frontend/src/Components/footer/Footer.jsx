import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer-top">
        <div className="left-footer">
          <div className="logo">
            <img src="./public/Assets/logo.png" alt="" />
          </div>
          <div className="alamat">
            <span>
              Jl. Raya Kebayoran Lama No.38, RW 11, Sukabumi Utara, Kebon Jeruk,
              Jakarta Barat, DKI Jakarta, 11540
            </span>
          </div>
        </div>
        <div className="center-footer">
          <span>
            <iframe
              className="peta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253850.89041477753!2d106.54056827929234!3d-6.208181022484452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c9d1d10f5d%3A0x7a9bc9da364e0c7b!2sTunas%20Toyota%20Kebayoran%20Lama!5e0!3m2!1sid!2sid!4v1731644163260!5m2!1sid!2sid"
              loading="lazy"
              style={{ width: 400, height: 250 }}
            ></iframe>
          </span>
        </div>
        <div className="right-footer">
          <button className="sosmed">
            <a href="https://www.instagram.com/promo.toyota.jabotabek?igsh=NHh0cWtqaDgwMHQ5">
              <FaInstagram style={{ color: "white" }} />
            </a>
          </button>
          <button className="sosmed">
            <a href="https://www.facebook.com/profile.php?id=100088857016766">
              <FaFacebookF style={{ color: "white" }} />
            </a>
          </button>
          <button className="sosmed">
            <a href="https://wa.me/+6281514651742?text=Halo, saya Tertarik dengan produk ini">
              <FaWhatsapp style={{ color: "white" }} />
            </a>
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyrights</span>
      </div>
    </div>
  );
};

export default Footer;
