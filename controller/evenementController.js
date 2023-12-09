const Evenement = require("../model/evenement");
const Ticket = require("../model/tickets")

async function addevenement(req, res, next) {
    try {
        const evenement = new Evenement(req.body);
        await evenement.save();
        res.status(200).send("Evenement added successfully");
    } catch (err) {
        console.error(err);
    }
}
async function showevenement(req, res, next) {
    try {
        const data = await Evenement.find();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
}
async function updateEvenement(req, res, next) {
    try {
        const data = await Evenement.findByIdAndUpdate(req.params.id, req.body);
        res.send("updated");
    } catch (err) { }
}
async function deleteEvenement(req, res, next) {
    try {
        const data = await Evenement.findByIdAndDelete(req.params.id, req.body);
        res.send("removed");
    }
    catch (err) { }
}
async function findEvenement(req, res, next) {
    try {
        const data = await Evenement.findById(req.params.id, req.body);
        res.send(data);
    }
    catch (err) { }
}
async function findEvenementName(req, res, next) {
    try {

        const data = await Evenement.findOne(req.params);
        res.send(data);
    }
    catch (err) {

    }
}

async function addTicket(req, res, next) {
    try {
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(200).send("Evenement added successfully");
    } catch (err) {
        console.error(err);
    }
}
async function showticket(req, res, next) {
    try {
        const data = await Ticket.find();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
}
async function updateTicket(req, res, next) {
    try {
        const data = await Ticket.findByIdAndUpdate(req.params.id, req.body);
        res.send("updated");
    } catch (err) { }
}
async function deleteTicket(req, res, next) {
    try {
        const data = await Ticket.findByIdAndDelete(req.params.id, req.body);
        res.send("removed");
    }
    catch (err) { }
}
async function findTicket(req, res, next) {
    try {
        const data = await Ticket.findById(req.params.id, req.body);
        res.send(data);
    }
    catch (err) { }
}
async function findTicketName(req, res, next) {
    try {

        const data = await Ticket.findOne(req.params);
        res.send(data);
    }
    catch (err) {

    }
}

async function addevenementsocket(data) {
    try {
        const evenement = new Evenement({
            nom: data.nom,
            date: data.date,
            lieu: data.lieu,
            description: data.description,
            organisateur: data.organisateur,
            type_even: data.type_even
        });

        console.log("mmmmmmmm" + JSON.stringify(data));
        await evenement.save();
        //res.status(200).send("add good partie");
    } catch (err) {
        console.log(err);
    }
}

async function showevenementsocket(req, res, next) {
    try {
        const data = await Evenement.find();
        return data;
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    showevenement,
    addevenement,
    updateEvenement,
    deleteEvenement,
    findEvenement,
    findEvenementName,
    showticket,
    addTicket,
    updateTicket,
    deleteTicket,
    findTicket,
    findTicketName,
    addevenementsocket,
    showevenementsocket
};
