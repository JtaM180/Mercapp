// index.js
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");

const app = express();
const PORT = 3000;

app.use(cors());           // permite peticiones desde Vue
app.use(express.json());   // permite leer JSON del body

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// Ruta 404 para cualquier otra
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});