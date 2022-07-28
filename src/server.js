import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import rutas from './Router/index.js'
import conexion from './config/config.js'
const puerto = process.env.PORT     

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', rutas)

app.listen(puerto, (err) => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor: ${err}`)
    } else {
        console.log(`Servidor escuchando puerto: ${puerto}`)
    }
})