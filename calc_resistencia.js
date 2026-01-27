//  L = comprimento do condutor [m]
// A = Área de seção Transversal [mm²]
// mat = material => resistividade do material => ro
// se for cobre = 0.017
// se for alumineo = 0.028

function calcularResistencia(L, A, material){
    return (material * L) / A
}

// atribui o valordo material
// se for cobre = 0.017
// se for alumineo = 0.028

function verTipoMaterial(material){
    const cobre = 0.017
    const alumineo = 0.028

    if(material === 'cobre'){
        return cobre
    }else if(material === 'alumineo'){
        return alumineo
    }else{
        return 'Material Inválido'
    }
}


function principal(){
    let material = 'cobre' //cobre, alumineo
    let resistencia = 0.0
    let comprimento = 1000.0
    let area = 6.0

    let resposta = ''

    let mat = verTipoMaterial(material)
    console.log(mat)


    resistencia = calcularResistencia(comprimento, area, mat)
    console.log(`A resistência do Condutor é ${resistencia.toFixed(3)} Ω`)
}

principal()