import ContenedorMongo from "../../contenedores/contenedorMongo.js";
import mongoose from "mongoose";

class CarritoDaoMongo extends ContenedorMongo {
  constructor() {
    super("carritos",new mongoose.Schema( {
      timestamp: { type: String, required: true },
      productos: { type: Array, required: true },
    }))
  }

  
  
}

export default CarritoDaoMongo;