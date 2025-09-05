import Sequelize from "Sequelize";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "nome",
    timezone: "-03:00",
})

export default connection;