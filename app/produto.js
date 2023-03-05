import produtos from './produtos.js';
let container = document.getElementById('single-product');


//Função que mostra as imagens secundárias
let imagensProduto = (p) => {
    let containerImagens = document.getElementById('imagens-secundarias')
    let imagensMostrar = p.imagens.map((imagem, index) => {
        return `<img src=${imagem} />`
    })
    containerImagens.innerHTML = `${imagensMostrar}`
}

// Função que captura o url / sku do produto e recebe os callbacks para exibir o produto
const capturarProduto = () => {
    let url = window.location.href;
    let parts = url.split('#');
    let skuProduto = parts.pop() || parts.pop();
    let produto = produtos.find(prod => prod.sku == skuProduto);
    console.log(produto)
    exibirProduto(produto)
    imagensProduto(produto)
}

// Função de callback
const exibirProduto = (p) => {
    container.innerHTML = `
                <div class="produto-escolha" id="imagens-secundarias">    
                    <img class="produto-escolha-img" src="./img/tenis_forum_bold_branco.png" alt="">
                    <img class="produto-escolha-img" src="./img/tenis-forum-2.png" alt="">
                    <img class="produto-escolha-img" src="./img/tenis-forum-3.png" alt="">
                </div>
                <div class="imagem-principal">
                    <img src="${p.imagemDestaque}" class="imagem-principal-produto" alt="">
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
                            <select class="select-qtdade-box">
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
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
                    <!--o problema tá aqui-->

                    <div class="produto-infos-entrega">
                        <button class="botao-carrinho botao-eu-quero">ADICIONAR AO CARRINHO</button>
                        <div class="produto-infos-entrega-adicionar">
                            <span class="material-symbols-outlined">local_shipping</span>
            
                            <h6 class="produto-infos-entrega-frete">Frete Grátis para todo o Brasil
                                em compras acima de R$ 299,90 <span>+5%</span> de desconto em pagamento 
                                    por boleto ou pix</h6>
                        </div>

                        <button class="botao-eu-quero">Clique aqui para calcular frete</button>
                    </div>
                </div>
                `
}

capturarProduto()
