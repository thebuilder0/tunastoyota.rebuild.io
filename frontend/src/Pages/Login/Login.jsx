import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
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
        <div className="a" key={product.id}>
          <div className="b">
            <div className="c">
              <figure className="d">
                <img src={product.url} alt="Image" />
              </figure>
            </div>
            <div className="e">
              <div className="f">
                <div className="g">
                  <p className="h">{product.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Login;
