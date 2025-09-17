const botao = document.querySelector('#botao')

botao.addEventListener('click', e => {
    e.preventDefault()
    const nome = document.querySelector('#fnome').value.trim()
    const idade = Number(document.querySelector('#fidade').value)
    const msg = document.querySelector("#msg")

    if (idade >= 18) {
        msg.innerText = 'Parabéns ' + nome + ', você está apto para CNH'
    } else {
        msg.innerText = 'Que peninha ' + nome + ', você não está apto para CNH'
    }
})
