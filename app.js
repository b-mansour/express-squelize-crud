const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const router = require("./routes/userRoute");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// corOptions = {
//   origin: "http://127.0.0.1:4000/",
// };
// app.use(cors(corOptions));

//routers
app.use("/api/users", router);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MySQL Connected Successfully",
  });
});

app.listen(4000, () => console.log("listening to port 3000"));
