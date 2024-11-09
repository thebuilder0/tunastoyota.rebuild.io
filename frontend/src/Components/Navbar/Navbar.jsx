import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo-image">
        <img className="image" src="./public/Assets/TOYOTA.png" alt="as" />
      </div>
      <div className="menu">
        <ul>
          <a>Tentang</a>
        </ul>
        <Link to={"#produk"}>
          <ul>Daftar Harga</ul>
        </Link>
        <ul>Testimoni</ul>
        <ul>Hubungi Kami</ul>
      </div>
    </div>
  );
}
