function fnHorasExtras(Salario, horasTrabalhadas, cargaHoraria) {
    let horasextras = 0
    if(Salario < 0){
        return 'todos os valores devem ser positivos'
    }
    
    

    if(horasTrabalhadas > cargaHoraria){
        horasextras = (horasTrabalhadas - cargaHoraria) * Salario
    } else {
        
    }

    return horasextras
}