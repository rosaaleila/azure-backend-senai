/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

/*Criação da Model da Tabela Categoria*/
/*O método define Cria uma Tabela Parametros
1º - Nome da Tabela 
2º - Objeto Json que representa os campos da tabela, seus tipos e regras de preenchimento */
const Categoria = connection.define(
    'tbl_categoria',
    {
        nome_categoria:{
        type: Sequelize.STRING,
        allowNull: false
        }
    }
);

/*Executar a criação da tabela no Banco de Dados*/
//Categoria.sync({force:true});

module.exports = Categoria;