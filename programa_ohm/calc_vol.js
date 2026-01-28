

function calcularVolts(resist, corrente){
    return resist * corrente
}


function principal(){

    let resist = 10
    let corrente = 2

    let volts = calcularVolts(resist, corrente)
    console.log(volts)
}

principal()