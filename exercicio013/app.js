const numeroDeVagas = []
const veiculos = []

// seletores
const form = document.querySelector('form')
const tabela = document.querySelector('#tabela_veiculos')

// funções
function fnSalvarVeiculo() {
    numeroDeVagas.push(form.numero_vaga.value)
    veiculos.push(form.veiculo.value)
    fnListarVeiculos()
    fnLimpar()
}

function fnListarVeiculos() {
    tabela.innerHTML = ''
    veiculos.forEach((veiculo, i) => {
        tabela.innerHTML += `
        <tr>
            <td>${numeroDeVagas[i]}</td>
            <td>${veiculo}</td>
        </tr>
        `
    })
}

function fnLimpar() {
    form.numero_vaga.value = ''
    form.veiculo.value = ''
}


