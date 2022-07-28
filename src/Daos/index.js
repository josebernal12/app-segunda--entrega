
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
    const { default: ProductoDaoMongo } = await import(
      "./productos/productoDaoMongo.js"
    );
    const { default: CarritoDaoMongo } = await import(
      "./carritos/carritoDaoMongo.js"
    );

    ProductoDao = new ProductoDaoMongo;
    CarritoDao = new CarritoDaoMongo;
 
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
    "./productos/productoDaoMongo.js"
  );
  const { default: CarritoDaoMongo } = await import(
    "./carritos/carritoDaoMongo.js"
  );

  ProductoDao = new ProductoDaoMongo;
  CarritoDao = new CarritoDaoMongo;
}

export  { ProductoDao, CarritoDao }