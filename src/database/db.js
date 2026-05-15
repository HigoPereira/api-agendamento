const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/database/banco.db', (err) => {

    if (err) {
        console.log('Erro ao conectar banco');
    } else {
        console.log('Banco SQLite conectado');
    }

});

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS servicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            preco REAL NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS agendamentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente TEXT NOT NULL,
            servico TEXT NOT NULL,
            data TEXT NOT NULL
        )
    `);

});

module.exports = db;