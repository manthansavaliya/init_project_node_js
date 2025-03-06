require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes/index");

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use("/", routes);

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
  require('./database/db.js');
  console.log(`Server is start on port ${PORT} .`);
});
