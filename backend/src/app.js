const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/*
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informaçãao do back-end
 * POST:Criar uma informaçãao no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Delettar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: parametros nomeados enviados na rotas apos o simbolo "?" (Filtros, Paginação)
  * Route: parametros usados para identificar recursos 
  * Request Body: Corpos da requisição, utilizado para criar ou alterar recursos
  * 
  */


