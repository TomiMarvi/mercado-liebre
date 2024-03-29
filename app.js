const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname,"./public")));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), ()=>{console.log("Server start in: http://localhost:" + app.get("port"))});

/*app.listen("port", process.env.PORT || 3000, function(){
    console.log("Servidor corriendo en el puerto 3000")
}); */

app.get("/", (req, res)=>{res.sendFile(path.join(__dirname,"views", "home.html"))});

app.get("/login", (req, res)=>{res.sendFile(path.join(__dirname,"views", "login.html"))});

app.get("/register", (req, res)=>{res.sendFile(path.join(__dirname,"views", "register.html"))});


/* Modifique todo porque no podia hacer que el proyecto de github aparezca, despues de varios commits y agregado de el Procfile logre hacerlo, no vuelvo a tocar el codigo para que
aparezca todo sin problema*/