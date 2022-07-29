import ContenedorMongo from "../../contenedores/contenedorMongo.js";
import mongoose from "mongoose";

class ProductoDaoMongo extends ContenedorMongo {
  constructor() {
    super("productos", new mongoose.Schema({
      title: { type: String, require: true, max: 200 },
      description: { type: String, require: true, max: 200 },
      code:{ type: Number, require: true},
      price:{ type: Number, require: true},
      thumbnail:{ type: String, require: true },
      timestamp:{ type: Date, require: true },
      stock:{ type: Number, require: true}
    })
    )
  }


}


export default ProductoDaoMongo