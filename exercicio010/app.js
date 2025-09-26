const botao = document.querySelector("button")

botao.addEventListener("click", e => {
    e.preventDefault()
    if (botao.classList.contains("btn-disabled")) return

    const form = document.querySelector("form")
    const resultado = document.querySelector("#resultado")

    const nome = form.fnome.value.trim()
    const nota1 = parseFloat(form.fnota1.value)
    const nota2 = parseFloat(form.fnota2.value)
    const nota3 = parseFloat(form.fnota3.value)
    const nota4 = parseFloat(form.fnota4.value)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    botao.classList.add("btn-disabled")

    const eLinha = elemento('div')

    const eP = elemento('p')
    eP.textContent = `A Média das notas de ${nome} é ${media}!`

    const eBotao = elemento("button")
    eBotao.textContent = "Fazer novo calculo"
    eBotao.addEventListener("click", e => {
        e.preventDefault()

        form.fnome.value = ''
        form.fnota1.value = ''
        form.fnota2.value = ''
        form.fnota3.value = ''
        form.fnota4.value = ''
        resultado.innerHTML = ''

        botao.classList.remove("btn-disabled")
    })

    resultado.append(eP)
    resultado.append(eBotao)


})


function elemento(tipo, ...classes) {
    const tag = document.createElement(tipo)
    if (classes.length) {
        console.log(tipo, ' tem classes ', classes)
        tag.classList.add(...classes)
    } else {
        console.log(tipo, ' não tem classes')
    }
    return tag
}