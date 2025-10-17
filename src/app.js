const express = require("express");
const juegosRouter = require("./router/juegosRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", juegosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
