import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductBy();
  }, []);

  const getProductBy = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.name);
    setPrice(response.data.price);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("price", price);
    try {
      await axios.put(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={updateProduct}>
          <div className="field">
            <label htmlFor="">Nama Produk</label>
            <div className="input-text">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nama Produk"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="">Tipe & Harga</label>
            <div className="input-text">
              <input
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Tipe & Harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="file">Image</label>
            <div className="input-text">
              <input
                type="file"
                className="file-upload"
                onChange={loadImage}
                placeholder="Nama Produk"
              />
              <span className="file-aa">
                <span className="file-b">Pilih file</span>
              </span>
            </div>
          </div>
          {preview ? (
            <div className="image">
              <img src={preview} alt="Preview image" />
            </div>
          ) : (
            ""
          )}
          <div className="field">
            <button type="submit" className="success">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
