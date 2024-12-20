function sortear(){
    let quantidade = document.getElementById('quantidade').value; // Obtém o valor digitado pelo usuário no campo com id 'quantidade'
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
     
    let sorteados = [];  // Cria um array vazio para armazenar os números sorteados
    let numero;

    for(let i = 0; i < quantidade; i++){ // Executa um loop 'quantidade' de vezes para sortear os números
        numero = obterNumeroAleatorio(de, ate);  // Gera um número aleatório no intervalo especificado (entre 'de' e 'ate')

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);  // Adiciona o número sorteado ao array 'sorteados'
    }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
   alterarStatusBotao();
}
  // Gera um número aleatório entre 'min' e 'max', incluindo ambos os extremos
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    // Declara uma variável 'botao' e atribui a ela o elemento HTML com o ID 'btn-reiniciar'
    let botao = document.getElementById('btn-reiniciar');

    // Verifica se o botão possui a classe 'container__botao-desabilitado'
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Se possuir, remove a classe 'container__botao-desabilitado'
        botao.classList.remove('container__botao-desabilitado');
        // Adiciona a classe 'container__botao' para habilitar o botão
        botao.classList.add('container__botao');
    } else {
        // Se não possuir a classe 'container__botao-desabilitado',
        // remove a classe 'container__botao' (indicando que o botão estava habilitado)
        botao.classList.remove('container__botao');
        // Adiciona a classe 'container__botao-desabilitado' para desabilitar o botão
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ''; //"limpa" o campo
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}