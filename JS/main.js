async function buscaEndereco(cep) {
  try {
    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    } else {
      console.log(consultaCepConvertida);
      return consultaCepConvertida;
    }
  } catch (erro) {
    console.log(erro);
  }
}

buscaEndereco();
