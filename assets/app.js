function criaCartao(categoria, pergunta, resposta) {
    // Seleciona o container principal
    const container = document.getElementById('container');

    // Cria o elemento do cartão
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Insere o conteúdo HTML do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Controle do estado de visibilidade da resposta
    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique para virar o cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}
