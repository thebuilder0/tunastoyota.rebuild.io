import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Landing/HomePage";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Add from "./Pages/Admin/Add";
import Edit from "./Pages/Admin/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
