/* Importação do pacote express */
const express = require('express');

/*Instancia executavel do express */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*Importação das rotas*/
const categoriaController = require('./controller/CategoriaController');
app.use('/', categoriaController);

const port = process.env.PORT || 3000

/*Servidor de requisições da aplicação */
app.listen(port, ()=>{
    console.log('Servidor Rodando na Porta 3000 - URL: http://localhost3000');
}); 