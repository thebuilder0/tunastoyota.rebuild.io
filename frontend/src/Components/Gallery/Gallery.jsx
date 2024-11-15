import "./Gallery.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";

export const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  return (
    <>
      <div id="produk" className="title">
        MOBIL PILIHAN KAMI
      </div>
      <div className="container-gallery">
        <div className="gallery-grid">
          {products.map((product) => (
            <div id="produk" className="container-content" key={product.id}>
              <div className="card">
                <img className="image-card" src={product.url}></img>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>
                  <button className="call-wa">
                    <FaPhoneAlt />
                    <a href="https://wa.me/+6281514651742?text=Halo, saya Tertarik dengan produk ini">
                      Hubungi Kami
                    </a>
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="more">
        <button className="more-button">
          <a href="https://wa.me/+6281514651742?text=Halo, saya Tertarik dengan produk ini">
            Lihat Mobil Lainnya
          </a>
        </button>
      </div>
    </>
  );
};
