import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <Link to="/add" className="button">
        Add New
      </Link>
      <div className="columns ">
        {products.map((product) => (
          <div className="column" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image ">
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title-product">{product.name}</p>
                    <p className="title-product">{product.price}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`/edit/${product.id}`} className="card-item">
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="card-item"
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
