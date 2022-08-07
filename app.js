// Importar módulos
const express = require('express');
const { classifica } = require("./predict");

// Montar a aplicação
const app = express();

// Para requisições JSON
app.use(express.json());

// Rota POST para classificação da flor
app.post('/predict', classifica);

// Porta 9000
app.listen(9000);
console.log("Porta 9000 ok!")