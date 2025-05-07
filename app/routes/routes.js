const express = require('express');
const homeController = require('../controllers/homeController');
const classesController = require('../controllers/classesController.js')







// permet d'indiquer les routes à emporter
const router = express.Router();







//Mise en place d'une route
// router.get('/' ,(req ,res) => res.send("Salut tout le monde") );
router.get('/' ,homeController.getHomePage);

//Mise en place de la route qui mène à la page de la liste des clasees
router.get('/classeslist', classesController.getClasseslistPage);

//page d'entrainement
// router.get('/toto' , homeController.getTotoPage);
module.exports = router;