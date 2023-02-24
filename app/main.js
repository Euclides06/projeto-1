import produtos from './produtos.js'
const elOfertasHome = document.getElementById('ofertas-home')


function ofertasHome() {
    exibirOfertasHome(produtos)
    console.table(produtos)
}

ofertasHome(produtos)

function exibirOfertasHome(produtos){
    produtos.forEach(produto => {
    elOfertasHome.innerHTML += `
        <li>
            <div class="lista-produtos">
                <a href="produto.html"><img src='${produto.imagemDestaque}' /></a>
                <div class="produtos-cores">
                    <ul>
                        <li><img src="./img/cores/cor1.png" /></li>
                        <li><img src="./img/cores/cor2.png" /></li>
                    </ul>
                </div>
                <h4>${produto.nome}</h4>
                <div class="imgem-valores">
                    <span class="promocao">${produto.desconto}</span>
                    <span class="valor-real">${produto.valor}</span>
                </div>
                <button class="botao-eu-quero">EU QUERO</button>
            </div>
        </li>
        ` 
})
}