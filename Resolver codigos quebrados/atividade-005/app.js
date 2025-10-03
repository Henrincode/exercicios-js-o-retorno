document.getElementById('bt-calcular').addEventListener('click', function () {
    console.log('getElementById clicado')
    let salario = parseFloat(document.getElementById('salario').value)
    let horastrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value)
    let cargahoraria = parseFloat(document.getElementById('carga-horaria').value)
    let horasextras = fnHorasExtras(salario, horastrabalhadas, cargahoraria)
    document.getElementById('resposta').innerHTML = fnformatarMonetario(horasextras)
})