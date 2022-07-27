import  express  from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express()
const puerto = process.env.PORT
import router from './Router/index.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api",router)

app.listen(puerto,(error) =>{
    if(error){
        console.log(error)
    }else{
        console.log(`application listening port ${puerto}`)
    }
})
