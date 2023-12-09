const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const Article = require("../ProjetNodeAmina/model/Article");
const mongoConnection = require("../ProjetNodeAmina/config/dbconnection.json");
const path = require("path");
const { ObjectId } = require('mongodb');
const {
  addArticle,show,FindArticleSocket
} = require("./controller/articlecontroller");
const {
addComment
} = require("./controller/commentcontroller");
var app = express(); // Move this line up
// les deux lignes hethom homa ali ya9raw fichier .twig ay haja feha html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig"); 
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
          h1{
            text-align:center
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

mongoose
  .connect(mongoConnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err));
var articlerouter = require("../ProjetNodeAmina/routes/article");
var commentrouter = require("../ProjetNodeAmina/routes/comment");


const bodyParser = require("body-parser");

// app.use(express.json()); // You can uncomment this line if needed
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/article", articlerouter);
app.use("/comment", commentrouter);
app.post('/comment/affiche/:id', async (req, res) => {
  const articleId = req.params.id;

  // Your existing logic to save the article and emit the socket event

  // Redirect to the URL with the article ID
  res.redirect('/comment/affiche/' + articleId);
});
const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  //ouverture de flux , data dynamique
  console.log("user connect");
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
    console.log("user disconnect");
    io.emit("msg", "user is disconnect");
  });
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
