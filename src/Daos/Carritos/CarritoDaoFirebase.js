import ContenedorFirebase from "../../Contenedores/ContenedorFIrebase";

class CarritoDaoFirebase extends ContenedorFirebase{
    constructor(nombredecollecion){
        super("carrito")
    }
}

export default CarritoDaoFirebase;