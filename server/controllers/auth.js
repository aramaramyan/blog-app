import bycript from "bcryptjs";
import { db } from "./../db.js";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const query = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(query, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists");

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

export const login = (req, res) => {};

export const logout = (req, res) => {};
