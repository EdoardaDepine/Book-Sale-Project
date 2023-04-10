const consultaCep = fetch("https://viacep.com.br/ws/01001000/json/")
  .then((resposta) => resposta.json())
  .then((resposta) => {
    if (resposta.erro) {
      throw Error("Esse CEP não existe");
    } else {
      console.log(resposta);
    }
  })
  .catch((erro) => console.log(erro))
  .finally((mensagem) => console.log("Processaento concluído!"));
