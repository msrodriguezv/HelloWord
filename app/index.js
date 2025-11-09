const express = require('express');
const app = express();

// Las plataformas de nube asignan un puerto dinámicamente.
// Usamos process.env.PORT para tomar ese puerto, o el 3000 si es local.
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo! Este proyecto está desplegado.');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});