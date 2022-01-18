const Sequelize = require('sequelize');
const db = require('../models/db');
                          //tabela
const Pessoa = db.define('Contato',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    nome:{
        type: Sequelize.STRING,
        allowNull:true,
    },

    telefone:{
        type: Sequelize.STRING,
        allowNull:true,
    },
    email:{
        type: Sequelize.STRING,
        allowNull:true,
    },
   
    
});
//Agenda.sync();
//aqui não funcionou Lancamento.sync({ alter: true}) devido ta usando o xampp
//Pessoa.sync({ alter: true});// verifica se houve ateracao se houve cria a tabela

module.exports = Pessoa;
