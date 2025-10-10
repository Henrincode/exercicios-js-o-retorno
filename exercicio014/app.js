const personagensDBZ = [
    "Goku",
    "Vegeta",
    "Gohan",
    "Piccolo",
    "Trunks",
    "Frieza",
    "Cell",
    "Majin Buu",
    "Kuririn",
    "Android 18"
];

const significadosNomes = [
    "Derivado de 'Son Wukong', o Rei Macaco da lenda chinesa Jornada ao Oeste.",
    "Vem de 'vegetable' (vegetal), seguindo a tradição saiyajin de nomes ligados a legumes.",
    "Significa 'arroz cozido' ou 'refeição' em japonês.",
    "Nome de um instrumento musical (flauta pequena), como os outros Namekuseijins ligados a música.",
    "Abreviação de 'swimming trunks' (sunga/cueca), seguindo o tema de roupas íntimas da família Brief.",
    "Derivado de 'freezer', mantendo o tema de nomes relacionados ao frio (como sua raça).",
    "Significa 'célula' em inglês, refletindo sua origem biológica e evolução genética.",
    "'Majin' é 'demônio/mago' e 'Buu' vem de uma brincadeira com 'Bibbidi-Bobbidi-Boo' (como no filme da Cinderela).",
    "Variação de 'kuri' (castanha) e referência ao seu nome original 'Kuririn'. Também alude a seu corte de cabelo (ou ausência dele).",
    "Número de série da androide, sem nome pessoal no início; mais tarde chamada de 'Lazuli' no mangá."
];

function fnListaDBZ() {
    const lista = document.querySelector('#lista')

    personagensDBZ.forEach((nome, i) => {
        lista.append((criarLinhaTabela(i+1, nome, significadosNomes[i])))
    })
}

function criarLinhaTabela(...itens) {
    const tr = document.createElement('tr')
    itens.forEach(item => {
        const td = document.createElement('td')
        td.textContent = item
        tr.append(td)
    })
    return tr
}

fnListaDBZ()