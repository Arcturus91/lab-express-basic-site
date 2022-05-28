const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (req, res, next) => {
  res.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Contact</title>
            <link rel="stylesheet" href="stylesheet/style.css" /> 
        </head>
        <body>
            <h1>Inspirational man</h1>
            <p>Autor:Arturo Barrantes Vasquez</p>
            <img src="./images/whoIsGoggins.png" alt="goggins" />

            <div>
            <a href="/about">Sobre Goggins </a>
            </div>


            <div>
            <a href="/hisWork">el libro es </a>
            </div>
            
        </body>
    </html>
    `);
});

app.get("/goggins", (req, res, next) => {
  res.sendFile(__dirname + "/views/goggins.html");
});

app.get("/hisWork", (req, res, next) => {
  res.sendFile(__dirname + "/views/hisWork.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/collage", (req, res, next) => {
    res.sendFile(__dirname + "/views/collage.html");
  });

app.listen(3000, () => {
  console.log("estoy corriendo en el puerto 3000");
});
