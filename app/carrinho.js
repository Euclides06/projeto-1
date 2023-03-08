const elCarrinho = document.getElementById('produtosCarrinho')

const keys = Object.keys(localStorage);
var cart = []
for (var i = 0; i < keys.length; i++) {
    cart.push(JSON.parse(localStorage.getItem(keys[i])))
}



for (let i = 0; i < cart.length; i++) {
    elCarrinho.innerHTML += `
                    <li>
                        <div class="imagem"><img src="${cart[i].imagemDestaque}" /></div>
                        <div class="infos-carrinho">
                            <p class="nome-produto">${cart[i].nome}<span class="material-symbols-outlined botao-remover" id=${cart[i].sku}>delete</span></strong></p>
                            <div class="cor"><strong>Cor:</strong> ${cart[i].cores}</div>
                            <div class="tamanho"><strong>Tamanho:</strong> ${cart[i].tamanhos}</div>
                            <div class="quantidade">01 unidade</div>
                            <div class="carrinho-produto-rodape">
                                <div class="imgem-valores">
                                <span>Valor: de R$ ${cart[i].valor}</span>
                                    <span class="promocao"><strong>por R$ ${cart[i].desconto}</strong></span>
                                </div>
                            </div>
                        </div>
                    </li>
            `
}


// REMOVER ITENS DO CARRINHO

const removeProduct = document.getElementsByClassName('botao-remover');
for(let i = 0; i < removeProduct.length; i++){
    removeProduct[i].addEventListener('click', function(event) {
        localStorage.removeItem(event.target.id);
            location.reload();

    })
}

