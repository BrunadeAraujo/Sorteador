function sortear(){
    let quantidade = document.getElementById('quantidade').value; // Obtém o valor digitado pelo usuário no campo com id 'quantidade'
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
     
    let sorteados = [];  // Cria um array vazio para armazenar os números sorteados
    let numero;

    for(let i = 0; i < quantidade; i++){ // Executa um loop 'quantidade' de vezes para sortear os números
        numero = obterNumeroAleatorio(de, ate)  // Gera um número aleatório no intervalo especificado (entre 'de' e 'ate')
        sorteados.push(numero);  // Adiciona o número sorteado ao array 'sorteados'
    }

    alert(sorteados);
  
}
  // Gera um número aleatório entre 'min' e 'max', incluindo ambos os extremos
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}