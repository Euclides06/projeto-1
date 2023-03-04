import produtos from './produtos.js';


let container = document.getElementById('single-product');

var url = window.location.href;
var parts = url.split('#');
var skuProduto = parts.pop() || parts.pop();
var produto = produtos.find(prod => prod.sku == skuProduto);

const capturarProduto = () => {
    exibirProduto(produto)
    imagensProduto(produto)
}

// //Função que mostra as imagens secundárias
const imagensProduto = (p) => {
    let containerImagens = document.getElementById('imagens-secundarias')
    p.imagens.forEach((element, index) => {
        containerImagens.innerHTML += `<div class="add-img"><img src="${element}" class="imagemsec" id="${index}" /></div>`
    })
    let imgButton = document.querySelectorAll('.imagemsec')
    for (var i = 0; i < imgButton.length; i++) {
        imgButton[i].addEventListener("click", bindClick(i, imgButton));
    }
}

const bindClick = (i, arr) => {
    var imgPrincipal = document.getElementById('imagem-principal')
    return function () {
        imgPrincipal.querySelector('img').src = arr[i].src
    }
}

var showSizes = () => {
    const sizes = produto.tamanhos
    sizes.forEach((size, index) => {
    `<p>${size}</p>`
}
    )
}

// Função de callback
const exibirProduto = (p) => {
    container.innerHTML = `
                <div class="produto-escolha" id="imagens-secundarias">            </div>
                <div class="imagem-principal" id="imagem-principal">
                    <img src="${p.imagemDestaque}" alt="">
                </div>

                <div class="produto-infos">
                    <div class="produto-infos-detalhes">
                        <h2 class="produto-infos-titulo">${p.nome}</h2>
                        <h3 class="produto-infos-valor">R$ ${p.valor}</h3>
                        <span class="produto-infos-parcelamento">em até 10x R$ 49,99 sem juros</span>
                        <div class="quantidade-likes-dislike">
                            <img src="./img/avaliacoes_5.png" alt="">
                            <h6>(13 avaliações)</h6>
                        </div>
                        <div class="escolhertamanho">
                            <h3 class="produto-infos-tamanhos-titulo">Tamanhos</h3>
                            ${showSizes()}
                            <select class="select-qtdade-box">
                            </select>
                        </div>
                        <div class="escolhercores">
                            <h3 class="produto-infos-cores-titulo">Cores</h3>
                            <img src="./img/cores/Rectangle 49.png" alt="">
                            <img src="./img/cores/Rectangle 50.png" alt="">
                            <img src="./img/cores/Rectangle 51.png" alt="">
                            <img src="./img/cores/Rectangle 52.png" alt="">
                        </div>
                    </div>

                    <div class="produto-infos-entrega">
                        <button class="botao-eu-quero">ADICIONAR AO CARRINHO</button>
                        <div class="produto-infos-entrega-adicionar">
                            <span class="material-symbols-outlined">local_shipping</span>
            
                            <h6 class="produto-infos-entrega-frete">Frete Grátis para todo o Brasil
                                em compras acima de R$ 299,90 <span>+5%</span> de desconto em pagamento 
                                    por boleto ou pix</h6>
                        </div>

                        <button class="botao-eu-quero">Clique aqui para calcular frete</button>
                    </div>
                </div>
                `;
}

capturarProduto()