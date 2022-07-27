import ContenedorMongodb from "../../Contenedores/ContenedorMongodb";

class CarritoDaoMongo extends ContenedorMongodb {
    constructor(nombredecollecion,schema){
        super("carritos",{
            timestamps: {type:String, required:true},
            productos:{type: Array, required:true}
        })
    }
}

export default CarritoDaoMongo
