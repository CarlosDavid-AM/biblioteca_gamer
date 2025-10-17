const express = require("express");
const router = express.Router();

const juegosController = require("../controller/juegosController");

router.get("/juegos", juegosController.obtenerJuegos);
router.get("/juegos/:id", juegosController.obtenerJuegosById);
router.delete("/juegos/:id", juegosController.eliminarJuego);

module.exports = router;
