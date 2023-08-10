const express = require("express");
// const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

// let corsOptions = {
//   origin: "http://localhost:8080",
// };

// enable cors
// app.use(cors(corsOptions));

//request bertipe json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Cannot Connect to Database", err);
    process.exit();
  });

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
