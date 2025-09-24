const form = document.querySelector('form')
const botao = document.querySelector('button')
const resposta = document.querySelector('.resposta')

const funcionarios = []

botao.addEventListener('click', e => {
    e.preventDefault()
    const semanal = parseFloat(form.semanal.value)
    const trabalhada = parseFloat(form.trabalhada.value)
    const resultado = trabalhada - semanal

    const funcionario = {
        nome: form.nome.value,
        semanal,
        trabalhada,
        resultado,
    }

    funcionarios.push(funcionario)
    resposta.textContent = ''

    funcionarios.forEach(funcionario => {
        const li = document.createElement('li')
        li.classList.add('lista')
        li.textContent = `${funcionario.resultado >= 0 ? '👍🏻' : '👎🏻'} Saldo de horas de ${funcionario.nome} é: ${funcionario.resultado}h`
        
        resposta.appendChild(li)
    })
})

