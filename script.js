const a = document.getElementById('area')

function clicar() {
    a.addEventListener('click', () => {
        a.innerHTML = 'Clicou!'
        a.style.background= 'red'
    console.log("aqui")})
}

clicar()

const entrar = () => {
    a.addEventListener('mouseenter', () => {
        a.innerHTML = 'Entrou!'
        a.style.background = 'yellow'
    })
}

entrar()

const sair = function() {
    a.addEventListener('mouseout', () => {
        a.innerHTML = 'Saiu!'
        a.style.background = 'green'
    })
}

sair()