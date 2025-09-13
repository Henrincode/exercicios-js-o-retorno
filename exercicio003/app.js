// Seletor
const calcular = document.querySelector("#calcular")

calcular.addEventListener('click', e => {
    // Evita o evento padrão do botão
    e.preventDefault()

    // Seletores
    const inputVendedor = Number(document.querySelector("#vendedor").value)
    const inputJaneiro = Number(document.querySelector("#janeiro").value)
    const inputFevereiro = Number(document.querySelector("#fevereiro").value)
    const inputMarco = Number(document.querySelector("#marco").value)

    const vendedor = document.querySelector("#impVendedor")
    const media = document.querySelector("#media")

    const total = ((inputJaneiro + inputFevereiro + inputMarco) / 3)
        .toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

    vendedor.innerText = inputVendedor
    media.innerText = `R$${total}`
})