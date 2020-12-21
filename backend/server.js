import express from "express";
/* on server side we have to append de type of file to the name, 
otherwise we will get an error */
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

/* we have to install nodemon to automatically
run the application every time we make a change */

/* Need to create this on package.json

  "scripts": {
    "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
  },

*/
