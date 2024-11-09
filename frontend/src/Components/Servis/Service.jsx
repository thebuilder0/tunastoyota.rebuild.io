import "./Service.css";

export const Service = () => {
  return (
    <div className="our-service">
      <div className="title">
        <span>PELAYANAN KAMI</span>
      </div>
      <div className="service-list">
        <div className="left">
          <ul>
            <span>Toyota Genuine Accessories</span>
            <p>
              Tunas Toyota menyediakan suku cadang dan aksesoris asli Toyota.
              Kami mengedepankan sisi kualitas dan originalitas.
            </p>
          </ul>
          <ul>
            <span>Service Berkala</span>
            <p>
              Servis kendaraan secara rutin di Tunas Toyota dapat menjaga
              performa kendaraan tetap prima
            </p>
          </ul>
        </div>
        <div className="right">
          <ul>
            <span>Special Service Campaign</span>
            <p>
              Tunas Toyota menyediakan Suku Cadang dan Aksesoris Toyota. Kami
              mengedepankan sisi kualitas dan originalitas.
            </p>
          </ul>
          <ul>
            <span>Trade In</span>
            <p>
              Tunas Toyota melayani tukar tambah (trade-in) kendaraan lama merek
              apapun ke Toyota. Kami juga menjual mobil bekas berkualitas dengan
              garansi resmi.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};
