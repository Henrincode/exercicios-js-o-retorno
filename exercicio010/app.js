const botao = document.querySelector("button")

botao.addEventListener("click", e => {
    e.preventDefault()
    // Se dados forem enviados o botão fica bloqueado
    if (botao.classList.contains("btn-disabled")) return

    // variáveis para checar campos preenchidos
    let nomeOK = true
    let notasOK = true

    // Seletores
    const nome = document.querySelector("input[data-nome]")
    const notas = Array.from(document.querySelectorAll("input[data-nota"))

    // Verifica se nome esta preenchido
    if (nome.value.trim()) {
        nome.classList.remove("preencher")
    } else {
        nome.classList.add("preencher")
        nomeOK = false
    }

    // Verifica se todas as notas estão preenchidas
    notas.forEach(nota => {
        valor = nota.value

        if (isNaN(valor) || !nota.value.trim()) {
            nota.classList.add('preencher')
            notasOK = false
        } else {
            nota.classList.remove('preencher')
        }
    })

    // Se algum campo estiver faltando ele para aqui
    if (!nomeOK || !notasOK) return

    // Se os campos estiverem preenchidos desabilita botão e trata os dados
    botao.classList.add("btn-disabled")

    // Usa reduce para somar as notas e fazer a média
    const media = notas.reduce((acc, nota) => acc + parseFloat(nota.value) || 0, 0) / notas.length

    // Cria paragrafo com resultado
    const eP = document.createElement('p')
    eP.textContent = `A Média das notas de ${nome.value.trim()} é ${media.toFixed(2)}!`

    // Cria botão para limpar inputs e fazer nova consulta
    const eBotao = document.createElement('button')
    eBotao.textContent = "Fazer novo calculo"
    eBotao.addEventListener("click", e => {
        e.preventDefault()

        nome.value = ''
        notas.forEach(nota => nota.value = '')
        resultado.innerHTML = ''

        botao.classList.remove("btn-disabled")
    })

    resultado.append(eP)
    resultado.append(eBotao)


})