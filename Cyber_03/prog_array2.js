let num = [5, 7, 8, 9, 2]
let i = 0

do{
    console.log('-------------')
    console.log(num[i])
    console.log('-------------')
    
    console.log(`O valor de índice ${i} representa num[${i}] = ${num[i]}`)
    
    i += 1


}while(i < 5)

console.table(num)