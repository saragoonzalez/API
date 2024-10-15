const express = require('express'); // Importa Express
const router = express.Router(); // Crea una instancia de Router
const commerce = require('../models/commerce'); // Importa el modelo Commerce

// Obtener la lista de comercios, opcionalmente ordenados por CIF
router.get('/', async (req, res) => {
  try {
    const { ordenarPorCIF } = req.query; // Verifica si se debe ordenar por CIF
    const comercios = ordenarPorCIF
      ? await commerce.find({ borrado: false }).sort({ cif: 1 }) // Ordena por CIF si se solicita
      : await commerce.find({ borrado: false }); // Caso contrario, obtiene sin ordenar
    res.json(comercios); // Responde con la lista de comercios
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los comercios' });
  }
});

// Exporta el router para ser utilizado en app.js
module.exports = router;
