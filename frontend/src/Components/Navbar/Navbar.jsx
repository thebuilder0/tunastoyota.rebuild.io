import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo-image">
        <img className="image" src="./public/Assets/TOYOTA.png" alt="as" />
      </div>
      <div className="menu">
        <ul>
          <a className="zz" href="#tentang">
            Tentang
          </a>
        </ul>
        <ul>
          <a className="zz" href="#produk">
            Daftar Harga
          </a>
        </ul>
        <ul>
          <a className="zz" href="#testimoni">
            Testimoni
          </a>
        </ul>
        <ul>
          <a className="zz" href="#hubungi">
            Hubungi Kami
          </a>
        </ul>
      </div>
    </div>
  );
}
