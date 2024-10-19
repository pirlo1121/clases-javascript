export function retornarActivos(array){
    return array.filter( data => data.activo )
}

export function organizarPais(array){
    let colombia = []
    let mexico = []
    let argentina = []

    for (const i of array) {
        if(i.pais === "Colombia") colombia.push(i)
        if(i.pais === "Argentina") argentina.push(i)
        if(i.pais === "México") mexico.push(i)
    }

    return {colombia, mexico, argentina}
}