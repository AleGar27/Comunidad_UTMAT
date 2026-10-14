const express = require('express');
const router = express.Router();
const Padre = require('../models/Padre');

// Obtener todos los proveedores
router.get('/', async (req, res) => {
  try {
    const lista = await Padre.find().sort({ createdAt: -1 });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener registros' });
  }
});

// Guardar nuevo registro
router.post('/', async (req, res) => {
  try {
    const nuevoPadre = new Padre(req.body);
    await nuevoPadre.save();
    res.status(201).json({ exito: true, padre: nuevoPadre });
  } catch (err) {
    res.status(400).json({ exito: false, error: err.message });
  }
});

// Calificar proveedor
router.post('/:id/calificar', async (req, res) => {
  try {
    const { estrellas, comentario, nombreUsuario } = req.body;
    const padre = await Padre.findById(req.params.id);
    if (!padre) return res.status(404).json({ exito: false, mensaje: 'Proveedor no encontrado' });

    padre.calificaciones.push({
      estrellas: parseInt(estrellas),
      comentario,
      nombreUsuario: nombreUsuario || 'Cliente Verificado'
    });

    await padre.save();
    res.json({ exito: true });
  } catch (err) {
    res.status(500).json({ exito: false, error: err.message });
  }
});

// Cambiar estado verificado (Admin)
router.patch('/:id/verificar', async (req, res) => {
  try {
    const { verificado } = req.body;
    const actualizado = await Padre.findByIdAndUpdate(req.params.id, { verificado }, { new: true });
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar registro (Admin)
router.delete('/:id', async (req, res) => {
  try {
    await Padre.findByIdAndDelete(req.params.id);
    res.json({ exito: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

