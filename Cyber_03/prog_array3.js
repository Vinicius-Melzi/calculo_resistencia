let num = [5, 7, 8, 9, 2]
let i = 0

let media = 0.0, soma = 0

do{

    soma += num[i]
    console.log(`A soma atual é: ${soma}`)



    i += 1

}while(i < 5 )


media = soma / 5.0

console.log(`A média dos números no array é: ${media.toFixed(3)}`)