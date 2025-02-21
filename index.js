// index.js

// Importar la configuración (que ya carga las variables de entorno)
const config = require('./config/config');

// Importar librerías necesarias
const express = require("express");
const path = require("path");
const cors = require("cors");

// Importar rutas
const pasosRoutes = require("./routes/pasosRoutes");
const recetaRoutes = require("./routes/recetaRoutes");

// Crear la instancia de Express
const app = express();

// Definir el puerto (se obtiene de la configuración)
const port = config.port;

// Configurar middleware para analizar JSON en las solicitudes
app.use(express.json());
console.log("Middleware JSON configurado");

// Configurar CORS (descomenta la siguiente línea si lo requieres)
app.use(cors());
console.log("CORS configurado");

// Configurar rutas de la API Rest
app.use("/api/pasos", pasosRoutes);
app.use("/api/receta", recetaRoutes);
console.log("Rutas configuradas");

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));
console.log("Servidor de archivos estáticos configurado");

// Ruta base: cualquier otra ruta servirá el archivo index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
console.log("Ruta base configurada");

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Iniciar el servidor (única llamada a app.listen)
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
