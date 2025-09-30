const numeros = []

const btnAdd = document.querySelector('#numero')
const btnCalc = document.querySelector('#calcular')

btnAdd.addEventListener('click', e => {
    e.preventDefault()
    const inputNumero = document.querySelector('#fnumero')
    const resultado = document.querySelector('#resultado')

    if(!inputNumero.value.trim()) return

    const numero = parseFloat(inputNumero.value)

    numeros.push(numero)

    const media = numeros.reduce((acc, att) => acc + att, 0) / numeros.length

    console.log(numeros.join(', '))
    resultado.innerHTML = `Número/s ${numeros.join(', ')} <br />A média dos números é ${media}`

    inputNumero.value = ''
    inputNumero.focus()
    

})