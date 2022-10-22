import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const getPosts = (req, res) => {
  const query = req.query.cat
    ? "SELECT * FROM posts WHERE category = ?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const query =
    "SELECT p.id, `userName`, `title`, `desc`, p.img, u.email AS userEmail, u.img AS userImg, `category`, `date` FROM users u JOIN  posts p ON u.id = p.userId WHERE p.id = ?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const query =
      "INSERT INTO posts(`title`, `desc`, `img`, `category`, `date`, `userId`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(query, [values], (err, data) => {
      if (err) res.status(500).json(err);

      return res.json("Post has been created!");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const query = "DELETE FROM posts WHERE id = ? AND userId = ?";

    db.query(query, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your posts!");

      return res.json("Post has been deleted!");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const query =
      "UPDATE posts SET `title` = ?, `desc` = ?, `img` = ?, `category` = ? WHERE `id` = ? AND `userId` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(query, [...values, postId, userInfo.id], (err, data) => {
      if (err) res.status(500).json(err);

      return res.json("Post has been updated!");
    });
  });
};
