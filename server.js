// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Inicializar la app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // permite leer JSON en las peticiones
app.use(express.urlencoded({ extended: true })); // permite leer datos de formularios


const path = require('path');
app.use(express.static('public'));

app.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

app.get('/directorio', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'directorio.html'));
});
// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

const padresRoutes = require('./routes/padres');
app.use('/api/padres', padresRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor del Directorio Digital funcionando 🚀');
});

// Arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`);
});