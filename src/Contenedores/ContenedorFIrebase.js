
import admin from "firebase-admin";
import config from "../config";

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
});

const db = admin.firestore()

class ContenedorFirebase {
    constructor(nombreColeccion) {
        this.collection = db.collection(nombreColeccion)

    }

    async CreateDoc(producto) {
        try {
            const user = await this.collection.doc().get();
            await user.create(producto)



        } catch (err) {
            console.log(err)
        }

    }
    async getAll() {
        try {
            const usersSnapshot = await this.collection.get();
            const users = usersSnapshot.docs();

            const resultado = users.map(user => ({
                id: user.id,
                nombre: user.data().nombre,
                precio: user.data().precio,
                stock: user.data().stock,
                thumbnail: user.data().thumbnail,
            }))
            console.log(resultado)

        } catch (err) {
            console.log(err)
        }
    }

    async GetId(id) {
        try {
            const doc = await this.collection.doc(id).get();
            const data = doc.data();

            return { ...data, id };
        } catch (err) {
            console.log(err)
        }
    }
    async UpdateId(id, producto) {
        try {
            const document = this.collection.doc(id);
            const update = await document.update(producto)
            console.log(update)

        } catch (err) {
            console.log(err)
        }

    }
    async DeleteId(id) {
        try {
            const document = this.collection.doc(id)
            const DeleteDoc = await document.delete()
        } catch (err) {
            console.log(err)
        }
    }

}

export default new ContenedorFirebase;