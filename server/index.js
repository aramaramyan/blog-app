import express from "express";

const app = express();

app.use(express.json());

app.listen(8800, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 8800
    📭  Query at http://localhost:8800
`);
});
