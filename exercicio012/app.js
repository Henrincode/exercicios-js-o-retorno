
const resultado = document.querySelector('#resultado')

let aumentar = true
let contador = 0

setInterval(() => {
    if(aumentar) {
        resultado.textContent = contador++
        if(contador === 10) aumentar = false
    }else {
        resultado.textContent = contador--
        if(contador === 0) aumentar = true
    }
}, 300)

