// import express from 'express''
// const router = express.Router()
// import Agendamento from "../models/Agendamento.js"

import agendamentoService from "../services/agendamentoService.js";

const createAgendamento = async (req, res) => {
  try {
    const {inserir_variaveis} = req.body;
    const agendamento = await agendamentoService.Create({
      inserir_variaveis,
    });
    res.status(201).json({mensagem: "Agendamento realizado com sucesso!",agendamento,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro interno do servidor." });
  }
};

export default { createAgendamento };