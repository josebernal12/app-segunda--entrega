import config from "../config";
import mongoose from "mongoose";

await mongoose.connect(config.mongodb.connectionString);

class ContenedorMongodb {
    constructor(nombreColeccion, schema) {
         
        this.collection = mongoose.model(nombreColeccion, mongoose.schema(schema))
    }
    async Create(producto) {
        try {
            const insert = await this.collection.create(producto)
          console.log(insert)
            
        } catch (err) {
            console.log(err)
        }
    }
    async getAll() {
        try{
        const objs = await this.collection.find()
        console.log(objs)
    } catch(error){
       console.log(error)
    }
}
    async GetId(_id) {
        try{
        const objs = await this.collection.find(_id)
        console.log(objs)
        }catch(error){
           console.log(error)
        }
    }
    async UpdateId(_id) {
        try{
        const objs = await this.collection.updateOne(_id)
        console.log(objs)
        }catch(error){

        }
    }
    async DeleteId(_id) {
        try{
        const objs = await this.collection.deleteOne(_id)
        console.log(objs)
        }catch(error){
            console.log(error)
        }
    }
}


export default   ContenedorMongodb
