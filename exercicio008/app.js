const botao = document.querySelector("button")

botao.addEventListener('click', e => {
    e.preventDefault()
    // Seletores
    const eValor1 = document.querySelector("#valor1")
    const eValor2 = document.querySelector("#valor2")
    const valor1 = parseFloat(eValor1.value)
    const valor2 = parseFloat(eValor2.value)

    const msgOperacao = document.querySelector(".radios")

    const adicao = document.querySelector("#adicao").checked
    const subtracao = document.querySelector("#subtracao").checked
    const multiplicacao = document.querySelector("#multiplicacao").checked
    const divisao = document.querySelector("#divisao").checked
    const resultado = document.querySelector("#resultado")

    // Checa se os campos estão preenchidos e marcados
    if (!valor1 || !valor2) {
        if (!valor1) eValor1.classList.add("preencher")
        if (!valor2) eValor2.classList.add("preencher")
        return
    } else {
        eValor1.classList.remove("preencher")
        eValor2.classList.remove("preencher")
    }

    if (adicao || subtracao || multiplicacao || divisao) {
        msgOperacao.classList.remove("msg-erro")
    } else {
        msgOperacao.classList.add("msg-erro")
        return
    }
    if (adicao) resultado.innerText = `Resultado: ${valor1 + valor2}`
    if (subtracao) resultado.innerText = `Resultado: ${valor1 - valor2}`
    if (multiplicacao) resultado.innerText = `Resultado: ${valor1 * valor2}`
    if (divisao) resultado.innerText = `Resultado: ${valor1 / valor2}`
})