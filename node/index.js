const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    const createTable = `CREATE TABLE if not exists people (id int not null auto_increment, name VARCHAR(255), primary key (id))`;
    connection.query(createTable, () => {
        const insertNames = `INSERT INTO people(name) values ('Álvaro'), ('João'), ('Maria')`;
        connection.query(insertNames, () => {
            connection.query("SELECT * FROM people", function (err, result, fields) {
                if (err) throw err;
                let listHTML = '<ul> ';

                result.forEach(people => {
                    listHTML += `<li>${people.name}</li>`;
                });

                listHTML += `</ul>`;

                res.send(`<h1>Full Cycle Rocks!</h1>
        ${listHTML}
        `)
            });
        });
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})