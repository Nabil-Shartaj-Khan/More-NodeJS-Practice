const express = require("express");
const app = express();
app.use(express.json());

//req query //localhost:8080/users?limit=10&page=1&name=abc (extracting)
app.get("/users", (req, res) => {
  const { limit, page, name } = req.query;
  res.json({ limit, page, name });
});

//req params
app.get("/users:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

//req.body
app.post("/users", (req, res) => {
  const body = req.body;
  res.json({ body });
});
app.listen(8080, () => {
  console.log("Express server is running!");
});
