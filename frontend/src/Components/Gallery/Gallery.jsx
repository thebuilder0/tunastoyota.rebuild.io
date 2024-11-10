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
      {products.map((product) => (
        <div id="produk" className="container-gallery" key={product.id}>
          <div className="title">MOBIL PILIHAN KAMI</div>
          <div className="container-gallery">
            <div className="gallery-grid">
              <div className="card">
                <img className="image-card" src={product.url}></img>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
              <div className="card">
                <img className="image-card" src="../public/Car/agyaa.png"></img>
                <h1>Tailored Jeans</h1>
                <p>AGYA 1.2 E M/T 170.900.000</p>
                <p>AGYA 1.2 E M/T 170.900.000</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
              <div className="card">
                <img className="image-card" src="../public/Car/agyaa.png"></img>
                <h1>Tailored Jeans</h1>
                <p>AGYA 1.2 E M/T 170.900.000</p>
                <p>AGYA 1.2 E M/T 170.900.000</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
              <div className="card">
                <img className="image-card" src="../public/Car/agyaa.png"></img>
                <h1>Tailored Jeans</h1>
                <p>AGYA 1.2 E M/T 170.900.000</p>
                <p>AGYA 1.2 E M/T 170.900.000</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
