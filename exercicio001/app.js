const imprimir = document.querySelector(".imprimir")

// let nome = prompt("Qual o seu nome?")
// let idade = prompt("Qual a sua idade?")

// imprimir.innerText = `Nome: ${nome}, idade: ${idade}`

const inputNome = document.querySelector(".inputNome")
const inputIdade = document.querySelector(".inputIdade")

inputNome.addEventListener("keyup", e => {
    imprimir.innerText = `Nome: ${inputNome.value}, idade: ${inputIdade.value}`
})

inputIdade.addEventListener("keyup", e => {
    imprimir.innerText = `Nome: ${inputNome.value}, idade: ${inputIdade.value}`
})