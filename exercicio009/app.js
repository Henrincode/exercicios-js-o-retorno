const botao = document.querySelector("button")

botao.addEventListener('click', e => {
    e.preventDefault()
    const eFrase = document.querySelector("#frase")
    const frase = eFrase.value
    const eRepetir = document.querySelector("#repetir")
    const repetir = parseInt(eRepetir.value)

    const resultado = document.querySelector("#resultado")
    
    resultado.innerHTML = ""
    for (let i = 0; i < repetir; i++) {
        const eLista = document.createElement("li")
        eLista.innerText = frase
        resultado.appendChild(eLista)
    }
})