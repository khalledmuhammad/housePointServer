const express = require("express");
const apiRoutes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/api", apiRoutes);

app.listen(process.env.PORT || "5000", () => {
  console.log(`server is runnity on port ${process.env.PORT || "5000"} `);
});
