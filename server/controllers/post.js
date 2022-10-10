import { db } from "../db.js";

export const getPosts = (req, res) => {
  const query = req.query.cat
    ? "SELECT * FROM posts WHERE category = ?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const query =
    "SELECT `userName`, `title`, `desc`, p.img, u.img AS userImg, `category`, `date` FROM users u JOIN  posts p ON u.id = p.userId WHERE p.id = ?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json("from controller");
};

export const deletePost = (req, res) => {
  res.json("from controller");
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
