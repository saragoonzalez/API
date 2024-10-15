// Cargar las dependencias necesarias
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env
const express = require('express'); // Importar Express para crear el servidor
const connectDB = require('./config/database'); // Importar la función para conectar a la base de datos
const commerceRoutes = require('./routes/commerceRoutes'); // Importar las rutas relacionadas con los comercios

// Crear una instancia de Express
const app = express();

// Definir el puerto del servidor desde la variable de entorno o usar el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
console.log('Intentando conectar a la base de datos...');
connectDB(); // Llamar a la función para establecer conexión con MongoDB

// Middleware para manejar datos en formato JSON en las solicitudes
app.use(express.json());

// Definir las rutas de la API relacionadas con los comercios
// Todas las rutas que comiencen con "/api/comercios" serán manejadas por commerceRoutes
app.use('/api/comercios', commerceRoutes);

// Iniciar el servidor
// Escuchar en el puerto definido y mostrar un mensaje cuando el servidor esté corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${process.env.PUBLIC_URL || 'http://localhost:' + PORT}`);
});

// Exportar la aplicación (opcional, por si se requiere para pruebas unitarias)
module.exports = app;