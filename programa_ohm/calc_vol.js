

function calcularVolts(resist, corrente){
    return resist * corrente
}


calcular.addEventListener('click', ()=>{
    let resist = Number(document.getElementById('resist').value)
    let corrente = Number(document.getElementById('corrente').value)

    let volts = calcularVolts(resist, corrente)
    console.log(`O Valor de Volts é ${volts.toFixed(3)}`)


    resposta.innerHTML = ``
    resposta.innerHTML += `O Valor de Volts é ${volts.toFixed(3)}`
    resposta.style.fontSize = '2rem'
    resposta.style.fontWeight = 'bold'
    resposta.innerHTML += '<hr>'
})