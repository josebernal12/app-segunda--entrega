import config from "../config";
import mongoose from "mongoose";

await mongoose.connect(config.mongodb.connectionString);

class ContenedorMongodb {
    constructor(nombreColeccion, schema) {
        this.collection = mongoose.model(nombreColeccion, schema)
    }
    async CreateDoc(producto) {
        try {
            const insert = await this.collection.insertMany(producto)
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
    async GetId(id) {
        try{
        const objs = await this.collection.find(id)
        console.log(objs)
        }catch(error){
           console.log(error)
        }
    }
    async UpdateId(id) {
        try{
        const objs = await this.collection.updateOne(id)
        console.log(objs)
        }catch(error){

        }
    }
    async DeleteId(id) {
        try{
        const objs = await this.collection.deleteOne(id)
        console.log(objs)
        }catch(error){
            console.log(error)
        }
    }
}


export default new ContenedorMongodb()