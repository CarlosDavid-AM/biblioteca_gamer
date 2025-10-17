const db = require("../config/db");

exports.obtenerJuegos = async (req, res) => {
  const sql =
    "select id, nombre, plataforma, url_imagen, fecha_adquirido from juegos";

  try {
    const [juegos] = await db.query(sql);

    const juegosParseados = juegos.map((juego) => {
      const fecha = new Date(juego.fecha_adquirido);
      const dia = fecha.getDate().toString().padStart(2, "0");
      const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const anio = fecha.getFullYear();
      return {
        ...juego,
        fecha_adquirido: `${dia}-${mes}-${anio}`,
      };
    });

    res.status(200).json(juegosParseados);
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

    const juegoParseado = () => {
      const fecha = new Date(juego[0].fecha_adquirido);
      const dia = fecha.getDate().toString().padStart(2, "0");
      const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const anio = fecha.getFullYear();
      return {
        ...juego[0],
        fecha_adquirido: `${dia}-${mes}-${anio}`,
      };
    };

    res.status(200).json(juegoParseado());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Interno en el Servidor" });
  }
};
