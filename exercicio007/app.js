const semana = document.querySelector(".semana")

const diaSemana = new Date().getDay()

switch(diaSemana) {
    case 0:
        semana.innerText = "Domingo"
    break
    case 1:
        semana.innerText = "Segunda-feira"
    break
    case 2:
        semana.innerText = "Terça-feira"
    break
    case 3:
        semana.innerText = "Quarta-feira"
    break
    case 4:
        semana.innerText = "Quinta-feira"
    break
    case 5:
        semana.innerText = "Sexta-feira"
    break
    case 6:
        semana.innerText = "Sábado"
    break
}