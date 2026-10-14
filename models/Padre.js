const mongoose = require('mongoose');

const CalificacionSchema = new mongoose.Schema({
  nombreUsuario: { type: String, default: 'Cliente Verificado' },
  estrellas: { type: Number, required: true, min: 1, max: 5 },
  comentario: { type: String, default: '' },
  fecha: { type: Date, default: Date.now }
});

const PadreSchema = new mongoose.Schema({
  nombrePadre: { type: String, required: true },
  nombreAlumno: { type: String, required: true },
  grupo: { type: String, required: true },
  telefono: { type: String, required: true },
  oficio: { type: String, required: true },
  categoria: { type: String, default: 'Servicio' },
  descripcion: { type: String, default: '' },
  ubicacion: { type: String, default: 'Aguascalientes' },
  googleMapsUrl: { type: String, default: '' },
  redesSociales: { type: String, default: '' },
  autorizaDirectorio: { type: Boolean, default: true },
  verificado: { type: Boolean, default: false },
  calificaciones: [CalificacionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Padre', PadreSchema);