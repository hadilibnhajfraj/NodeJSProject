const http = require("http");
const express = require("express");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const mongoconnect = require("./config/dbconnection.json");
const path = require("path");

const {
  authenticate,
  show,
  add, deleteclass
} = require("./controller/userController");
mongo
  .connect(mongoconnect.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo connecter"))
  .catch((err) => console.log(err));

const userRouter = require("./routes/user");

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", userRouter);
=======
const mongoose = require("mongoose");
const Donneur = require("../ProjetNodeHadil/model/Donneur");
const Donnation = require("../ProjetNodeHadil/model/Donnation");
=======
const mongoose = require("mongoose");
const Article = require("../ProjetNodeAmina/model/Article");
>>>>>>> amina
const mongoConnection = require("../ProjetNodeAmina/config/dbconnection.json");
const path = require("path");
const { ObjectId } = require('mongodb');
const {
<<<<<<< HEAD
  addDonneur,
  AfficherTous
} = require("./controller/donneurcontroller");
const {
  addDonnation,
  show
} = require("./controller/donnationcontroller");
=======
const mongoose = require("mongoose");
const mongoConnection = require("../project_final/config/dbconnection.json");
const path = require("path");
const {
  addoperationsocket,
  show,
  addSuiviesocket,
  findSuivieName
} = require("./controller/operationController");
>>>>>>> ala
=======
const mongoose = require("mongoose");
const mongoConnection = require("../Projet/config/dbconnection.json");
const path = require("path");
const { addevenementsocket,showevenementsocket } = require("../Projet/controller/evenementController");
>>>>>>> rafik
=======
  addArticle,show,FindArticleSocket
} = require("./controller/articlecontroller");
const {
addComment
} = require("./controller/commentcontroller");
>>>>>>> amina
var app = express(); // Move this line up
// les deux lignes hethom homa ali ya9raw fichier .twig ay haja feha html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig"); 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.get('/donneur/unseuldonneur', async (req, res) => {
  try {
    const donneurId = req.query.donneurId;

    if (!donneurId) {
      return res.status(400).json({ error: 'ID de l\'article manquant dans la requête' });
    }

    const donneurData = await Donneur.findById(donneurId);

    if (!donneurData) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }

=======
app.get('/article/unseularticle', async (req, res) => {
  try {
    const articleId = req.query.articleId;

    if (!articleId) {
      return res.status(400).json({ error: 'ID de l\'article manquant dans la requête' });
    }

    const articleData = await Article.findById(articleId);

    if (!articleData) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }

    // Format the date to include only the day and month
    const formattedDate = articleData.date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
    });

>>>>>>> amina
    // Include the entire HTML structure with styles and the formatted date
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Affichage Article</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
<<<<<<< HEAD
          h1 {
            text-align:center;
=======
          h1{
            text-align:center
>>>>>>> amina
          }
          .article-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
          }
          button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }
      
          button:hover {
            background-color: #45a049;
          }
        </style>
      </head>

      <body>
        <div id="articleDetails">
          <div class="article-container" id="article-container">
<<<<<<< HEAD
            <h1>Le donneur est </h1>
            <p><span id="nom"><span id="prenom">${donneurData.nom} ${donneurData.prenom}</span></span></p>
            <p>email : <span id="email">${donneurData.email}</span></p>
            <p>cin : <span id="cin">${donneurData.cin}</span></p>
            <button onclick="showConfirmationAlert()">Ajouter Une donnation </button>
          </div>
        </div>
        <script>
          function showConfirmationAlert() {
            // Afficher une alerte
            const confirmation = window.confirm('Voulez-vous ajouter une donnation ?');

            // Si l'utilisateur clique sur "Oui", rediriger vers une autre page
            if (confirmation) {
              window.location.href = "/donnation/donnation/";
            }
          }
        </script>
=======
            <h1 id="titre">${articleData.titre}</h1>
            <p>Auteur : <span id="auteur">${articleData.auteur}</span></p>
            <p>Contenu : <span id="contenu">${articleData.contenu}</span></p>
            <p>Date : <span id="date">${formattedDate}</span></p>
            <button onclick="redirectToAnotherPage()">Commenter</button>
          </div>
         
        </div>
        <script>
        function redirectToAnotherPage() {
          window.location.href = "/comment/affiche/";
        }
      </script>
>>>>>>> amina
      </body>

      </html>
    `;

    // Send the entire HTML structure
    res.send(htmlContent);
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
  }
});
<<<<<<< HEAD
=======
>>>>>>> ala
=======
>>>>>>> rafik
=======
>>>>>>> amina

mongoose
  .connect(mongoConnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var donneurrouter = require("../ProjetNodeHadil/routes/donneur");
var donnationrouter = require("../ProjetNodeHadil/routes/donnation");


=======

var operationrouter = require("../project_final/routes/operation");
>>>>>>> ala
=======


//var classroomrouter = require("../Projet/routes/classeroom");
//var adminrouter = require("../Projet/routes/admin");
//var partierouter = require("../Projet/routes/partie");
var evenementrouter = require("../Projet/routes/ticket")
>>>>>>> rafik
=======
var articlerouter = require("../ProjetNodeAmina/routes/article");
var commentrouter = require("../ProjetNodeAmina/routes/comment");


>>>>>>> amina
const bodyParser = require("body-parser");

// app.use(express.json()); // You can uncomment this line if needed
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.use("/donnation", donnationrouter);
app.use("/donneur", donneurrouter);
>>>>>>> hadil

const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
<<<<<<< HEAD
  console.log("user connected");
  socket.emit("msg", "user is connected");



  socket.on("connectUser", async (data) => {
    // Utilisez les données directement sans dépendre de req.body
    await authenticate(data, (result) => {
      socket.emit("connectUser", result);
    });
  });


  socket.on('registerUser', async (data) => {
    try {
      // Call the add function with the user data
      await add(data, (result) => {
        // Emit the result back to the client
        socket.emit('registerUser', result);
      });
    } catch (error) {
      console.error(error);
      socket.emit('registerUser', { success: false, error: error.message });
    }
  });

  socket.on('deleteUser', async (data) => {
    try {
      // Ensure that data.userId or the correct property is used
      const userId = data.userId;

      // Call the delete function with the user ID
      await deleteclass(userId, (result) => {
        // Emit the result back to the client
        socket.emit('deleteUser', result);
      });
    } catch (error) {
      console.error(error);
      socket.emit('deleteUser', { success: false, error: error.message });
    }
  });

  socket.on("aff", async () => {
=======
  console.log("user connect");
  socket.on("msgs", (data) => {   
    io.emit("msgs", data + " is connected");
  });
  socket.on('donneur', (data) => {
    io.emit('nouveauDonneur', { nom: data.nom });
});
socket.on('donneur', async (donneurData) => {
  try {
    // Insert the new article into the database
    const newDonneur = await Donneur.create(donneurData);

    // Emit the 'nouveauArticle' event with the newly created article
    io.emit('nouveauDonneur', newDonneur);
    console.log('Article ID:', newDonneur._id);

  } catch (err) {
    console.error('Error creating and emitting new article:', err);
  }
});

socket.on('donnation', (data) => {
  io.emit('nouveauDonnation', { type:data.type,nom: data.nom,data:data.montant,date:data.date });
});
  socket.on("msg", (data) => {
    add(data.object);
    io.emit("msg", data.name + ":" + data.object);
  });
  socket.on("donneur", (data) => { 
    addDonneur(data);
    io.emit("donneur", data);
  });
  socket.on("donnation", (data) => { 
    addDonnation(data);
    io.emit("donnation", data);
  });
  socket.on("affichetous", (data) => { 
    AfficherTous(data);
    io.emit("affichetous", data);
  });
  socket.on("tous", async () => {
>>>>>>> hadil
    try {
      const data = await show();
      console.log('Data to send:', data);
      if (data) {
<<<<<<< HEAD
        io.emit('aff', data);
=======
        io.emit('tous', data);
>>>>>>> hadil
=======
app.use("/operation", operationrouter);
=======
//app.use("/classroom", classroomrouter);
//app.use("/admin", adminrouter);
//app.use("/partie", partierouter);
app.use("/evenement", evenementrouter);
>>>>>>> rafik
=======
app.use("/article", articlerouter);
app.use("/comment", commentrouter);
app.post('/comment/affiche/:id', async (req, res) => {
  const articleId = req.params.id;

  // Your existing logic to save the article and emit the socket event

  // Redirect to the URL with the article ID
  res.redirect('/comment/affiche/' + articleId);
});
>>>>>>> amina
const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  //ouverture de flux , data dynamique
  console.log("user connect");
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> ala
      } else {
        console.error('Error fetching user data or data is undefined');
        socket.emit('aff_error', { error: 'Internal Server Error' });
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      socket.emit('aff_error', { error: 'Internal Server Error' });
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD





  socket.on('logout', () => {
    console.log('User logged out');
    io.emit('userDisconnect', 'user disconnect');
  });


  socket.on("disconnect", () => {
    console.log("user disconnect");
    io.emit("msg", "user disconnect");
  });
});
server.listen(3000, console.log("server run"));
=======
  socket.on("disconnect", () => { 
=======


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
=======
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
>>>>>>> rafik
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
<<<<<<< HEAD
>>>>>>> ala
=======
>>>>>>> rafik
=======
  socket.on("msgs", (data) => {   //flux hetha how ali bsh na3ref byh esm utilisateur ali connecte kima hadil is connected
    io.emit("msgs", data + " is connected");
  });
  socket.on('article', (data) => {
    io.emit('nouveauArticle', { _id:data._id,auteur: data.auteur,contenu:data.contenu,date:data.date });
});


socket.on('article', async (articleData) => {
  try {
    // Insert the new article into the database
    const newArticle = await Article.create(articleData);

    // Emit the 'nouveauArticle' event with the newly created article
    io.emit('nouveauArticle', newArticle);
    console.log('Article ID:', newArticle._id);

  } catch (err) {
    console.error('Error creating and emitting new article:', err);
  }
});
socket.on("tous", async () => {
  try {
    const data = await show();
    console.log('Data to send:', data);
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
socket.on('afficher', async (data) => {
  try {
    // Ensure that data.userId or the correct property is used
    const articleId = data.articleId;

    // Call the delete function with the user ID
    await FindArticleSocket(articleId, (result) => {
      // Emit the result back to the client
      socket.emit('afficher', result);
    });
  } catch (error) {
    console.error(error);
    socket.emit('afficher', { success: false, error: error.message });
  }
});
/*
socket.on('article', (data) => {
  io.emit('article', {
    titre:data.titre,
      auteur: data.auteur,
      contenu: data.contenu,
      date: data.date
  });
});
*/

socket.on('comment', (data) => {
  addComment(data);
  io.emit('nouveauComment', { nom_auteur: data.nom_auteur,contenu:data.contenu,date:data.date });
});
 
  socket.on("msg", (data) => {
    //console.log("user disconnect")
    add(data.object);
    io.emit("msg", data.name + ":" + data.object);
  });
  socket.on("typing", (data) => { 

    io.emit("typing", data + " is typing ....");
  });
  socket.on("article", (data) => { 
    addArticle(data);
    io.emit("article", data);
  });

  socket.on("disconnect", () => { 
>>>>>>> amina
    console.log("user disconnect");
    io.emit("msg", "user is disconnect");
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ala
=======
>>>>>>> rafik
=======
>>>>>>> amina
server.listen(3000, () => {
  console.log("Server running on port 3000");
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> hadil
=======
>>>>>>> ala
=======
>>>>>>> rafik
=======
>>>>>>> amina
module.exports = app;
