import express from "express";
import { dirname } from "path"; 
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; // for post call
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

// logging middleware
// app.use(morgan("tiny"));

//custom middleware for post request
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

// get method
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// post method
app.post("/submit", (req,res)=>{  
      res.send("<h1>Your Band name is: </h1>");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


