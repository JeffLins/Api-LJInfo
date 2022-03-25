//Deve ser executado apenas uma vez para criar o banco e que ele seja populado.

import sqlite3 from "sqlite3";
import {dirname} from 'path'
import { fileURLToPath } from "url";
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);

// Usuarios 
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" VARCHAR(50),
    "EMAIL" VARCHAR(50),
    "SENHA" varchar(50)
);`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (ID, NOME, EMAIL, SENHA) VALUES

(1, 'Joana Ribeiro da Silva', 'Joana.ribeiro@gmail.com', '*******'),
(2, 'Marcelo Cavalcante Junior', 'Marcelo_junior@hotmail.com', '*******'),
(3, 'Maria Luisa De Lima', 'Maria_luisa@gmail.com', '*******'),
(4, 'Logan Gregory', 'logan.gregory@yahoo.com.br', '*******'),
(5, 'Melissa Caldwell', 'melissa.caldwell@gmail.com', '*******'),
(6, 'Suzanne Patricia Souza', 'Patricia_su@gmail.com', '*******'),
(7, 'Carlos James Silva', 'Carlos_james@gmail.com', '*******'),
(8, 'Salvador Moreno da Cunha', 'salvador.moreno@hotmail.com', '*******'),
(9, 'Isaac Herrera Da Silva', 'isaac.herrera@yahoo.com.br', '*******'),
(10, 'Alisson Rodriguez Oliveira', ' allison.rodriguez@gmail.com', '*******')`

function criaTabelaUsuario(){
    db.run(USUARIOS_SCHEMA,(err) =>{
        if(err) console.log("erro ao criar tabela usuario");
    });
}

function populaTabelaUsuario(){
    db.run(ADD_USUARIOS_DATA,(err) => {
        if (err) console.log("erro ao popular tabela de usuários");
    });
}

db.serialize(() =>{
    criaTabelaUsuario();
    populaTabelaUsuario();
});