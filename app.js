require("dotenv").config();
const express = require("express");
const sequelize = require("./util/database");
const imageRouter = require("./routes/imageRoutes");
const errorHandler = require("./util/errorHandler");

const app = express();

app.use(express.json());

app.use(express.static("public"));
app.use("/image", imageRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`server is up on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
