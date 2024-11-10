import "./Gallery.css";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="title">MOBIL PILIHAN KAMI</div>
      <div className="container-gallery">
        <div className="gallery-grid">
          {products.map((product) => (
            <div id="produk" className="container-content" key={product.id}>
              <div className="card">
                <img className="image-card" src={product.url}></img>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
