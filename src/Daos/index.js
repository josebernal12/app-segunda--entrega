
let ProductoDao;
let CarritoDao;

switch (process.env.DATABASE) {
    case "firebase":
      const {default:ProductoDaoFirebase } = await import ( 
        "./Productos/ProductoDaoFirebase"
      ) 
      const {default:CarritoDaoFirebase } = await import ( 
        "./Carritos/CarritoDaoFirebase"
      )
      ProductoDao = new ProductoDaoFirebase()
      CarritoDao = new CarritoDaoFirebase()
      
        break;

    case "mongo":
        const {default:ProductoDaoMongodb } = await import ( 
            "./Productos/ProductoDaoMongodb"
          ) 
          const {default: CarritoDaoMongo } = await import ( 
            "./Carritos/CarritoDaoMongodb"
          )
          ProductoDao = new ProductoDaoMongodb
          CarritoDao = new CarritoDaoMongo()
     break;
}
export default {
  ProductoDao,
  CarritoDao
}
