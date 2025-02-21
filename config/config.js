require("dotenv").config({
path: `env.${process.env.NODE_ENV || "development"}`});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = {
  port: process.env.PORT || 8080,
  db: {
    host: process.env.DB_HOST || "http://switchyard.proxy.rlwy.net",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "gVWQTySUUbRUAWZmVtbsWFLLhmoXuyfb",
    name: process.env.DB_NAME || "recetario",
    port: process.env.DB_PORT || 29369,
  },
  secretKey: process.env.SECRET_KEY || "default_secret",
};
