import "./Navbar.css";

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
        <ul>
          <a className="bb" href="#produk">
            Daftar Harga
          </a>
        </ul>
        <ul>Testimoni</ul>
        <ul>Hubungi Kami</ul>
      </div>
    </div>
  );
}
