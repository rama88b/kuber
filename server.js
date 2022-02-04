import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Kubernetes with HTTPS 21 Marts - Awesome");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
