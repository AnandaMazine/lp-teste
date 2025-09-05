// importar o model

class agendamentoService{
    async Create({ inserir_variaveis}) {
        try{
        if (!inserir_variaveis || !inserir_variaveis){
          throw new Error("Dados incompletos");
        }

    const newAgendamento = await Agendamento.create({
        inserir_variaveis,
    });
    return newAgendamento;
    }catch(error){
        console.log(error)
    }
} 
}
export default new agendamentoService();