import ContenedorFirebase from "../../Contenedores/ContenedorFIrebase";

class ProductoDaoFirebase extends ContenedorFirebase {
    constructor(nombredecollecion){
        super("productos")
    }
}

export default ProductoDaoFirebase;
