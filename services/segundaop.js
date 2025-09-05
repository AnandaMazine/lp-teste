// services/agendamentoService.js
// VIA CHAT

import Agendamento from "../models/agendamentoModel.js";
import sendEmail from "../infra/emailSender.js";
import { emailParaCliente, emailParaImobiliaria } from "../utils/emailTemplates.js";

class AgendamentoService {
  async Create({ nome, email, telefone, imovel, data }) {
    try {
      if (!nome || !email || !imovel || !data) {
        throw new Error("Dados incompletos");
      }

      // 1️⃣ salva no banco
      const newAgendamento = await Agendamento.create({
        nome,
        email,
        telefone,
        imovel,
        data,
      });

      // 2️⃣ configurações do e-mail do cliente
      const emailClienteConfig = {
        host: "smtp.exemplo.com",
        port: 587,
        secure: false,
        user: "usuario@exemplo.com",
        pass: "senha",
        from: "Imobiliária <no-reply@imobiliaria.com>",
        to: email,
        subject: "Confirmação de Agendamento",
        text: emailParaCliente(nome, data, imovel),
        html: `<p>${emailParaCliente(nome, data, imovel)}</p>`,
      };

      // envia e-mail para o cliente
      await sendEmail(emailClienteConfig);

      // 3️⃣ configurações do e-mail da imobiliária
      const emailImobiliariaConfig = {
        host: "smtp.exemplo.com",
        port: 587,
        secure: false,
        user: "usuario@exemplo.com",
        pass: "senha",
        from: "Sistema de Agendamento <no-reply@imobiliaria.com>",
        to: "imobiliaria@exemplo.com",
        subject: "Novo Agendamento",
        text: emailParaImobiliaria(nome, email, telefone, data, imovel),
        html: `<p>${emailParaImobiliaria(nome, email, telefone, data, imovel)}</p>`,
      };

      // envia e-mail para a imobiliária
      await sendEmail(emailImobiliariaConfig);

      return newAgendamento;
    } catch (error) {
      console.error("Erro no service:", error);
      throw error;
    }
  }
}

export default new AgendamentoService();
