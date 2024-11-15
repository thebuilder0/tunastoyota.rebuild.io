import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Link to="/add" className="add">
        Add New
      </Link>
      <div className="admin-mobil">
        {products.map((product) => (
          <div className="column" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <span className="title-product">{product.name}</span>
                    <p className="title-price">{product.price}</p>
                  </div>
                </div>
              </div>

              <footer className="container-button">
                <Link to={`/edit/${product.id}`} className="edit">
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="edit"
                >
                  Delete
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
