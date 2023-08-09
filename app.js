const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//request bertipe json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//access endpoint '/'
//res kirim balik response kepada klien
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to vuestore-server",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
