// test
import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Nguyenan2k1",
  database: "test",
});

// if there is an error connecting to the database
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '@Nguyenan2k1';

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`,`cover`) VALUES (?)";

  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, results) => {
    if (err) return res.json(err);
    return res.json("success");
  });
});

app.delete("/books/:id", (req, res) => {
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [req.params.id], (err, results) => {
    if (err) return res.json(err);
    return res.json("success");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `desc`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
