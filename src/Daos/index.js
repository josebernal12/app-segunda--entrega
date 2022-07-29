
let ProductoDao;
let CarritoDao;
/*
switch (process.env.DATABASE) {
  case "firebase":
    const { default: ProductoDaoFirebase } = await import(
      "./productos/productoDaoFirebase.js"
    );
    const { default: CarritoDaoFirebase } = await import(
      "./carritos/carritoDaoFirebase.js"
    );

    ProductoDao = new ProductoDaoFirebase;
    CarritoDao = new  CarritoDaoFirebase;

    break;
  case "mongo":

  console.log('entre al mongo')
    const { default: ProductoDaoMongo } = await import(
      "./productos/ProductoDaoMongodb.js"
    );
    const { default: CarritoDaoMongo } = await import(
      "./carritos/CarritoDaoMongodb.js"
    );

    ProductoDao = new ProductoDaoMongo;
    CarritoDao = new CarritoDaoMongo;
 
    break;
    default:
      console.log('no hay nada conectado')
      break;
}

export { ProductoDao, CarritoDao };
*/

if(process.env.DATABASE == "firebase"){
  const { default: ProductoDaoFirebase } = await import(
    "./productos/productoDaoFirebase.js"
  );
  const { default: CarritoDaoFirebase } = await import(
    "./carritos/carritoDaoFirebase.js"
  );

  ProductoDao = new ProductoDaoFirebase;
  CarritoDao = new  CarritoDaoFirebase;
}
if(process.env.DATABASE == "mongo"){
  const { default: ProductoDaoMongo } = await import(
    "./Productos/ProductoDaoMongodb.js"
  );
  const { default: CarritoDaoMongo } = await import(
    "./Carritos/CarritoDaoMongodb.js"
  );

  ProductoDao = new ProductoDaoMongo
  CarritoDao = new CarritoDaoMongo;
}

export  { ProductoDao, CarritoDao }
