import ContenedorFirebase from "../../Contenedores/ContenedorFIrebase";

class ProductoDaoFirebase extends ContenedorFirebase {
    constructor(){
        super("productos")
    }
}

export default ProductoDaoFirebase;
