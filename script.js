import { usuarios, usuarios2 } from "./objetos.js";
import { retornarActivos, organizarPais } from "./funciones.js";



function organizarUsuarios(){
    try {
        const activos = retornarActivos(ausuarios2)
        const resultado = organizarPais(activos)
        console.log(resultado)
        
    } catch (error) {
        console.log("hubo un error");
        console.error(error)
        
    }
}

organizarUsuarios()

// fecth
// ajax