
export default class ContenedorMongo {
  constructor(nameCollection, schema) {

    this.collection = mongoose.model(nameCollection, schema);
  }
  async newProduct(title, description, code, price, thumbnail, stock){
    const doc = new this.collection({title, description, code, price, thumbnail, stock,timestamp:Date.now()})
    await doc.save()   
    console.log(this.collection)        
  }

  async update(id, title, description, code, price, thumbnail, stock){
    await this.collection.updateOne({_id:id}, {title, description, code, price, thumbnail, stock})
    console.log(this.collection)        
  }


  async deleteById(id){
    await this.collection.deleteOne({_id:id});
  }
  async getById(id)  {
    const doc = await this.collection.find({ _id: id }, { __V: 0 });
    return doc;
  }
  async getAll(){
    const doc = await this.collection.find({ });
    return doc;
  }

}


