const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const mongoConnection = require("../project_final/config/dbconnection.json");
const path = require("path");
const {
  addoperationsocket,
  show,
  addSuiviesocket,
  findSuivieName
} = require("./controller/operationController");
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

var operationrouter = require("../project_final/routes/operation");
const bodyParser = require("body-parser");

// app.use(express.json()); // You can uncomment this line if needed
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/operation", operationrouter);
const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  //ouverture de flux , data dynamique
  console.log("user connect");
  socket.on("msgs", (data) => {   //flux hetha how ali bsh na3ref byh esm utilisateur ali connecte kima hadil is connected
    io.emit("msgs", data + " is connected");
  });
  
  socket.on("operationadd", (data) => {
    addoperationsocket(data);
    console.log("jjjjjmmmmmmj", JSON.stringify(data));
    io.emit("operationadd", data);
  });

  socket.on("tous", async () => {
    try {
      const data = await show();
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


  socket.on("suivieadd", (data) => {
    console.log("Data received from client:", data);
    addSuiviesocket(data);
    io.emit("suivieadd", data);
 });
  socket.on("suivieaffiche", async (data) => {
    try {
      const requestData = await findSuivieName(data);
      console.log('Data to send:', requestData);
      if (requestData) {
        io.emit('suivieaffiche', requestData);
        console.log('Data okkok to send:', requestData);
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
