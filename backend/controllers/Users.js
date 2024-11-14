import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!req.body || !name || !email || !password || !confirmPassword) {
    return res.status(400).json({ msg: "Data tidak lengkap atau tidak valid" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Password tidak cocok" });
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      name,
      email,
      password: hashPassword,
      confirmPassword: hashPassword,
    });
    res.json({ msg: "Berhasil Register" });
  } catch (error) {
    console.log(error);
  }
};
