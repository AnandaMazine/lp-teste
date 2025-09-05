import express from "express";
import agendamentoController from "../controllers/agendamentoController.js";

const agendamentoRoutes = express.Router();

agendamentoRoutes.post("/agendamento", agendamentoController.createAgendamento);

export default agendamentoRoutes;
