const mongoose = require('mongoose');

const CommerceSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cif: { type: String, required: true, unique: true },
  direccion: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  numeroPagina: { type: Number, required: true },
  borrado: { type: Boolean, default: false },
});

// Cambiar el nombre del modelo a 'Commerce' en lugar de 'commerce'
module.exports = mongoose.model('Commerce', CommerceSchema);
