// Seletores
const mensagem = document.querySelector(".mensagem")
const lista = document.querySelector("#lista")

// Pega o horário atual local
const data = new Date()
const hora = data.getHours().toString().padStart(2, '0');
const minuto = data.getMinutes().toString().padStart(2, '0');
const segundo = data.getSeconds().toString().padStart(2, '0');

// Imprime uma mensagem no elemento .mensagem de acordo com a hora
if (hora < 5) {
    lista.value = "noite"
    imprimirPeriodo(lista.value)
} else if (hora < 12) {
    lista.value = "dia"
    imprimirPeriodo(lista.value)
} else if (hora < 18) {
    lista.value = "tarde"
    imprimirPeriodo(lista.value)
} else if (hora < 24) {
    lista.value = "noite"
    imprimirPeriodo(lista.value)
}

// Muda o elemento .mensagem conforme a seleção
lista.addEventListener("change", listaPeriodo)

// Função para o listener de lista
function listaPeriodo(e) {
    const valor = e.target.value
    imprimirPeriodo(valor)
}

// Função usada para imprimir o conteúdo do elemento .mensagem
function imprimirPeriodo(p) {
    if (p == "dia") {
        mensagem.innerHTML = "Olá boa bom dia! Agora são " + hora + ":" + minuto + ":" + segundo
        mensagem.innerHTML += `<br /> <img src="dia.png">`
    } else if (p == "tarde") {
        mensagem.innerHTML = "Olá boa boa tarde! Agora são " + hora + ":" + minuto + ":" + segundo
        mensagem.innerHTML += `<br /> <img src="tarde.png">`
    } else if (p = "noite") {
        mensagem.innerHTML = "Olá boa boa noite! Agora são " + hora + ":" + minuto + ":" + segundo
        mensagem.innerHTML += `<br /> <img src="noite.png">`
    }
}