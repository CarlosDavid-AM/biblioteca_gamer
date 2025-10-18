const express = require("express");
const router = express.Router();

const juegosController = require("../controller/juegosController");

router.get("/juegos", juegosController.obtenerJuegos);
router.get("/juegos/:id", juegosController.obtenerJuegosById);
router.post("/juegos", juegosController.crearJuego);
router.put("/juegos/:id", juegosController.actualizarJuego);
router.delete("/juegos/:id", juegosController.eliminarJuego);

module.exports = router;
