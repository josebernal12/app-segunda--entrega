
import ContenedorMongodb from "../../Contenedores/ContenedorMongodb";

class ProductoDaoMongodb extends ContenedorMongodb {
    constructor() {
        super("productos", {
            nombre: { type: String, required: true },
            precio: { type: Number, required: true },
            thumbnail: { type: String, required: true }}) 
        
    }
}



export default  ProductoDaoMongodb

