
import produtos from './produtos.js';
const elCarrinho = document.getElementById('produtosCarrinho')



for (let i = 0; i < produtos.length; i++) {
    if(localStorage.getItem(produtos[i].sku)){
            elCarrinho.innerHTML += `
                    <li>
                        <div class="imagem"><img src="${produtos[i].imagemDestaque}" /></div>
                        <div class="infos-carrinho">
                            <p class="nome-produto">${produtos[i].nome}<strong><span class="material-symbols-outlined botao-remover">delete</span></strong></p>
                            <div class="cor"><strong>Cor:</strong> Rosa</div>
                            <div class="tamanho"><strong>Tamanho:</strong> 42</div>
                            <div class="quantidade">
                                <strong>Quantidade: </strong>
                                <input type="number" value="1" min="1" max="3" />
                            </div>
                            <div class="carrinho-produto-rodape">
                                <div class="imgem-valores">
                                    <span class="promocao"><strong>Valor: ${produtos[i].desconto}</strong></span>
                                    <span class="valor-real">${produtos[i].valor}</span>
                                </div>
                            </div>
                        </div>
                    </li>
            `
    }
}



   


