const db = require("../config/db");

exports.obtenerJuegos = async (req, res) => {
  const sql =
    "select id, nombre, plataforma, url_imagen, fecha_adquirido from juegos";

  try {
    const [juegos] = await db.query(sql);
    res.status(200).json(juegos);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
};

exports.obtenerJuegosById = async (req, res) => {
  const { id } = req.params;

  const sql =
    "select id, nombre, plataforma, url_imagen, fecha_adquirido from juegos WHERE id = ?";

  try {
    const [juego] = await db.query(sql, [id]);

    if (juego.length == 0) {
      return res.status(404).json({ message: "No encontramos el juego" });
    }

    res.status(200).json(juego[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
};
