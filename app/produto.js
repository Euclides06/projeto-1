import produtos from './produtos.js';


let container = document.getElementById('single-product');
let descricao = document.getElementById('sobre-produto')

var url = window.location.href;
var parts = url.split('#');
var skuProduto = parts.pop() || parts.pop();
var produto = produtos.find(prod => prod.sku == skuProduto);


const capturarProduto = () => {
    exibirProduto(produto)
    imagensProduto(produto)
}

// função do valor parcelado
const dividePrice = (v) => {
    const valor = parseFloat(v.replace(',', '.') / 10);
    const format = valor.toFixed(2).toString().replace('.', ',')
    return format
}

// função que mostra as imagens secundárias
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

// função de clique nas imagens secundárias
const bindClick = (i, arr) => {
    var imgPrincipal = document.getElementById('imagem-principal')
    return function () {
        imgPrincipal.querySelector('img').src = arr[i].src
    }
}

// função que mostra os tamanhos de acordo com o produto
var showSizes = () => {
    const sizes = produto.tamanhos
    let sizeHTML = ''
    sizes.forEach((size, index) => {
        sizeHTML += `<option value=${size}>${size}</option>`
    })
    return sizeHTML
}

const showColors = () => {
    const colors = produto.cores
    console.log(colors)
    let colorHTML = ''
    colors.forEach((color) => {
        colorHTML += `<div class='colors color-${color}'></div>`
    })
    console.log(colorHTML)
    return colorHTML
}

// função que renderiza o produto
const exibirProduto = (p) => {
    container.innerHTML = `
                <div class="produto-escolha" id="imagens-secundarias">            </div>
                <div class="imagem-principal" id="imagem-principal">
                    <img src="${p.imagemDestaque}" alt="">
                </div>

                <div class="produto-infos">
                    <div class="produto-infos-detalhes">
                        <h2 class="produto-infos-titulo">${p.nome}</h2>
                        <h3 class="produto-infos-valor">de R$ ${p.valor} por <span style="font-size:20px;"><strong>R$ ${p.desconto}</strong></span></h3>
                        <span class="produto-infos-parcelamento">em até 10x R$ ${dividePrice(p.desconto)} sem juros</span>
                        <div class="quantidade-likes-dislike">
                            <img src="./img/avaliacoes_5.png" alt="">
                            <h6>(13 avaliações)</h6>
                        </div>
                        <div class="escolhertamanho">
                            <h3 class="produto-infos-tamanhos-titulo">Tamanhos</h3>
                            <select class="select-qtdade-box" id="size">
                            ${showSizes()}
                            </select>
                        </div>
                        <div class="escolhercores">
                            <h3 class="produto-infos-cores-titulo">Cores</h3>
                            ${showColors()}
                        </div>
                    </div>

                    <div class="produto-infos-entrega">
                        <button class="botao-carrinho botao-eu-quero">ADICIONAR AO CARRINHO</button>
                        <div class="produto-infos-entrega-adicionar">
                            <span class="material-symbols-outlined">local_shipping</span>
            
                            <p class="produto-infos-entrega-frete">Frete Grátis para todo o Brasil
                                em compras acima de R$ 299,90 <span>+5%</span> de desconto em pagamento 
                                    por boleto ou pix</p>
                        </div>

                        <button class="botao-frete">Clique aqui para calcular frete</button>
                    </div>
                </div>
                
                `;
}

capturarProduto()



const exibirSobre = (p) => {
    descricao.innerHTML = `
        <h2 class="sobre-produto-titulo">SOBRE O PRODUTO</h2>
            <div class="container">
                <div class="sobre-esq">
                    <p class="descricao-paragrafo">
                        ${p.descricao}
                    </p>
                    
                </div>
                <div class="sobre-dir">
                    <img class="sobre-produto-imagem" src="${p.imagemDestaque}" alt="">
                </div>
            </div>
`;
}

exibirSobre(produto)


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//EVENTO CARRINHO - SALVO NO LOCAL STORE

const addToCarButtons = document.getElementsByClassName('botao-carrinho')
for(let i=0; i < addToCarButtons.length; i++) {
    addToCarButtons[i].addEventListener("click", addProductToCart)
}

function addProductToCart(){
    var sizeCart = document.getElementById('size').value;
    produto.tamanhos = sizeCart
    localStorage.setItem(produto.sku, JSON.stringify(produto));
    location.reload();

}

let btMudaCor = document.querySelectorAll('.botao-eu-quero');

    for(let i = 0; i < btMudaCor.length; i++) {

        btMudaCor[i].addEventListener("click", function() {

            this.style.background = "#FF4F4F";

            this.innerHTML = "PRODUTO ADICIONADO";

            this.style.width = "248px";

        }

)}




