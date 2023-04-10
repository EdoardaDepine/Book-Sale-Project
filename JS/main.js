async function buscaEndereco(cep) {
  try {
    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    } else {
      const cidade = document.querySelector("#cidade");
      const logradouro = document.querySelector("#endereco");
      const estado = document.querySelector("#estado");

      cidade.value = consultaCepConvertida.localidade;
      logradouro.value = consultaCepConvertida.logradouro;
      estado.value = consultaCepConvertida.uf;

      console.log(consultaCepConvertida);
      return consultaCepConvertida;
    }
  } catch (erro) {
    console.log(erro);
  }
}

const cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
