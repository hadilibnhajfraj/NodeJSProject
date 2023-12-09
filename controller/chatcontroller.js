const Chat = require("../model/chat");
 // fonction ajout hethy mahesh bsh tet3ml aal postman  bsh tekhdem
 // fi west twig bsh t7ot msg fi west el input w date bsh yekho date system 
async function add(mesg) {
  try {
    const chat = new Chat({
       // name:name,
        message:mesg,
        date: new Date()
    });
    await chat.save();
    //res.send("chat added successfully"); 
  } catch (err) {
    console.error(err);
  }
}

module.exports = {  add };
