import produtos from './produtos.js'

// Capturando os ul da Home que receberão os produtos
const elOfertasHome = document.getElementById('ofertas-home')
const elDestaquesHome = document.getElementById('destaquesHome')

// Exibe apenas os produtos que estiverem com true em oferta
const produtosOFertas = produtos.filter(prod => prod.oferta == true)

// Exibe apenas os produtos que estiverem com true em destaque
const produtosDestaques = produtos.filter(prod => prod.destaque == true)


// Função Principal
function exibirProdutosHome() {
    exibirOfertasHome(produtosOFertas)
    destaquesHome(produtosDestaques)
    console.log(produtosDestaques)
}

exibirProdutosHome()

// Função Ofertas
function exibirOfertasHome(produtos) {
    produtosOFertas.forEach(produto => {
        elOfertasHome.innerHTML += `
        <li class="lista-produtos">
                <a href="produto.html#${produto.sku}"><img src='${produto.imagemDestaque}' /></a>
                <div class="produtos-cores">
                    <ul>
                        <li><img src="./img/cores/cor1.png" /></li>
                        <li><img src="./img/cores/cor2.png" /></li>
                    </ul>
                </div>
                <h4>${produto.nome}</h4>
                <div class="imgem-valores">
                <span class="valor-real">de R$ ${produto.valor}</span>
                    <span class="promocao">por R$ ${produto.desconto}</span>
                </div>
                <button class="botao-eu-quero">EU QUERO</button>            
        </li>
        `
    })
}

// Função Destaques
function destaquesHome(produtos) {
    produtosDestaques.forEach(produto => {
        elDestaquesHome.innerHTML += `
        <li class="lista-produtos">
                <a href="produto.html#${produto.sku}"><img src='${produto.imagemDestaque}' /></a>
                <div class="produtos-cores">
                    <ul>
                        <li><img src="./img/cores/cor1.png" /></li>
                        <li><img src="./img/cores/cor2.png" /></li>
                    </ul>
                </div>
                <h4>${produto.nome}</h4>
                <div class="imgem-valores">
                <span class="valor-real">de R$ ${produto.valor}</span>
                <span class="promocao">por R$ ${produto.desconto}</span>
                </div>
                <button class="botao-eu-quero">EU QUERO</button>
        </li>
        `
    })
}

let btMudaCor = document.querySelectorAll('.botao-eu-quero');
    for(let i = 0; i < btMudaCor.length; i++) { 
        btMudaCor[i].addEventListener("click", function() { 
            this.style.background = "red"; 
        },

        btMudaCor[i].addEventListener("click", function() {
            this.innerHTML = "ADICIONADO";
        })
    )}

