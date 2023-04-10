async function buscaEndereco() {
  try {
    const consultaCep = await fetch("https://viacep.com.br/ws/010010000/json/");
    const consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    } else {
      console.log(consultaCepConvertida);
    }
  } catch (erro) {
    console.log(erro);
  }
}

buscaEndereco();
