import express from "express";
import connection from "./config/sequelize-config.js";
import agendamentoRoutes from "./routes/agendamentoRoutes.js";

const app = express();
app.use(express.json());

app.use("/", agendamentoRoutes);

const port = 4000;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});