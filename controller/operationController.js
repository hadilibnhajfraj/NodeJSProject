const Operation = require("../model/operation");
const Suivie = require("../model/suivie");

async function addOperation(req, res, next) {
    try {
        const operation = new Operation(req.body);
        await operation.save();
        res.status(200).send("operation added successfully");
    } catch (err) {
        console.error(err);
    }
}
async function showOperation(req, res, next) {
    try {
        const data = await Operation.find();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
}
async function updateOperation(req, res, next) {
    try {
        const data = await Operation.findByIdAndUpdate(req.params.id, req.body);
        res.send("updated");
    } catch (err) { }
}
async function deleteOperation(req, res, next) {
    try {
        const data = await Operation.findByIdAndDelete(req.params.id, req.body);
        res.send("removed");
    }
    catch (err) { }
}
async function findOperation(req, res, next) {
    try {
        const data = await Operation.findById(req.params.id, req.body);
        res.send(data);
    }
    catch (err) { }
}
async function findOperationeName(req, res, next) {
    try {

        const data = await Operation.findOne(req.params);
        res.send(data);
    }
    catch (err) {

    }
}


async function addSuivie(req, res, next) {
    try {
        const suivie = new Suivie({
            Operation: req.body.Operation,
            Patient: req.body.Patient,
            date: new Date(),
            Notes: req.body.Notes
        });
        await suivie.save();
        res.status(200).send("suivie added successfully");
    } catch (err) {
        console.error(err);
    }
}
async function showSuivie(req, res, next) {
    try {
        const data = await Suivie.find();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
}
async function updateSuivie(req, res, next) {
    try {
        const data = await Suivie.findByIdAndUpdate(req.params.id, req.body);
        res.send("updated");
    } catch (err) { }
}
async function deleteSuivie(req, res, next) {
    try {
        const data = await Suivie.findByIdAndDelete(req.params.id, req.body);
        res.send("removed");
    }
    catch (err) { }
}
async function findsuivie(req, res, next) {
    try {
        const data = await Suivie.findById(req.params.id, req.body);
        res.send(data);
    }
    catch (err) { }
}



async function addoperationsocket(data) {
    try {
        const operation = new Operation({
            Donneur: data.Donneur,
            Beneficiaire: data.Beneficiaire,
            Type_Organe: data.Type_Organe,
            date: data.date,
            Hopital: data.Hopital,
            Statut: data.Statut,
            Notes: data.Notes
        });

        console.log("mmmmmmmm" + JSON.stringify(data));
        await operation.save();
        //res.status(200).send("add good partie");
    } catch (err) {
        console.log(err);
    }
}

async function show(req, res, next) {
    try {
        const data = await Operation.find();
        //res.json(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}
async function addSuiviesocket(data) {
    try {
       const suivie = new Suivie({
          Operation: data.Operation,
          Patient: data.Patient,
          date: data.date,
          Notes: data.Notes
       });
       await suivie.save();
    } catch (err) {
       console.error(err);
    }
 }
 async function findSuivieName(data) {
    try {
        console.log("nnnnnnn",data);
        // Assurez-vous que data.Operation contient l'ID de l'opération
        console.log("jjjjjjjjjjjjjjjjjffjffjfj",data);
        // Utilisez la méthode findById pour rechercher l'entité Suivie par ID d'opération
        const result = await Suivie.findOne({ Operation : data });

        return result;  // La fonction renvoie directement le résultat
    } catch (err) {
        console.error(err);
        return null;  // En cas d'erreur, renvoie null ou gérer l'erreur de manière appropriée
    }
}

module.exports = {
    addOperation,
    showOperation,
    updateOperation,
    deleteOperation,
    findOperation,
    findOperationeName,
    addSuivie,
    showSuivie,
    updateSuivie,
    deleteSuivie,
    findsuivie,
    findSuivieName,
    addoperationsocket,
    show,
    addSuiviesocket
};
