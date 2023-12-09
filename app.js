const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const mongoConnection = require("../Projet/config/dbconnection.json");
const path = require("path");
const { addevenementsocket,showevenementsocket } = require("../Projet/controller/evenementController");
var app = express(); // Move this line up
// les deux lignes hethom homa ali ya9raw fichier .twig ay haja feha html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig"); 

mongoose
  .connect(mongoConnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err));


//var classroomrouter = require("../Projet/routes/classeroom");
//var adminrouter = require("../Projet/routes/admin");
//var partierouter = require("../Projet/routes/partie");
var evenementrouter = require("../Projet/routes/ticket")
const bodyParser = require("body-parser");

// app.use(express.json()); // You can uncomment this line if needed
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use("/classroom", classroomrouter);
//app.use("/admin", adminrouter);
//app.use("/partie", partierouter);
app.use("/evenement", evenementrouter);
const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  //ouverture de flux , data dynamique
  console.log("user connect");
  socket.on("operationadd", (data) => {
    addevenementsocket(data);
    console.log("jjjjjmmmmmmj", JSON.stringify(data));
    io.emit("operationadd", data);
  });
  socket.on("tous", async () => {
    try {
      const data = await showevenementsocket();
      //console.log('Data to send:', data);
      if (data) {
        io.emit('tous', data);
      } else {
        console.error('Error fetching user data or data is undefined');
        socket.emit('aff_error', { error: 'Internal Server Error' });
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      socket.emit('aff_error', { error: 'Internal Server Error' });
    }
  });
  socket.on("disconnect", () => { //hne ki tsaker inty l'interface ykharjlik fi interface okhra raho flen is diconnected
    console.log("user disconnect");
    io.emit("msg", "user is disconnect");
  });
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
