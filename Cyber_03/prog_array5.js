// programa para caçcuçar a média dos números pares do array a seguir
// num = [5, 7, 8, 9, 2]



function somarPar(val){
    let valor = 0
    if(val % 2 === 0){
        return valor += val
    }else{
        return 0
    }
}


function calcularMedia(val, qtde){
    return val / qtde
}


function contar(num){
    let valor = 0
    if(num % 2 === 0){
        return valor += 1
    }else{
        return 0
    }
}

function principal(){
    let num = [5, 7, 8, 9, 2]
    let media = 0.0
    let soma = 0, i = 0
    let cont = 0


    do{
        soma += somarPar(num[i])
        cont += contar(num[i])
        
        i += 1
        
    }while(i < 5)
    
    console.log(`A soma atual é ${soma}`)
    
media = calcularMedia(soma, cont)

console.log(`A média dos números no array é: ${media.toFixed(3)}`)

}

principal()