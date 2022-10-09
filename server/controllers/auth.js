import bycript from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "./../db.js";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length)
      return res.status(409).json("User with this email already exists");

    // Hash the password and create a user
    const salt = bycript.genSaltSync(10);
    const hash = bycript.hashSync(req.body.password, salt);

    const query = "INSERT INTO users(`name`, `email`, `password`) VALUES (?)";
    const values = [req.body.name, req.body.email, hash];

    db.query(query, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  // CHECK USER EMAIL

  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("email");
    // CHECK USER PASSWORD

    const isPasswordCorrect = bycript.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) return res.status(400).json("password");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...restData } = data[0];

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(restData);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
