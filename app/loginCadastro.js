// Modal Login & Cadastro

function iniciarModal(modal){
    const modalLogin = document.getElementById(modal);
    modalLogin.classList.add('mostrar');
    modalLogin.addEventListener('click', (evento) => {
        if(evento.target.id == modal || evento.target.className == 'b-fechar' || evento.target.className == "criar-conta" || evento.target.className == 'entrar-login'){
            modalLogin.classList.remove('mostrar');
        }
    }
    )
}


const login = document.querySelector('#login');
login.addEventListener('click', () => iniciarModal('modal-login'))

const cadastro = document.querySelector('.criar-conta');
cadastro.addEventListener('click', () => iniciarModal('modal-cadastro'))

const returnLogin = document.querySelector('.entrar-login');
returnLogin.addEventListener('click', () => iniciarModal('modal-login'))


// ADICIONANDO NUMERO NO CARRINHO

const keys = Object.keys(localStorage);

const addNumberCar = document.querySelector('.addNumberCar')
if(keys.length > 0){
    addNumberCar.innerHTML += `<label class="numberCar">${keys.length}</label>`
}

