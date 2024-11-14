import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import auth from "./config/Auth.js";
import UserRouter from "./routes/UserRoute.js";

const app = express();

try {
  await auth.authenticate();
  console.log("berhasil konek");
} catch (error) {
  console.log(error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRouter);
app.use(ProductRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
