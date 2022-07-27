import { Router } from "express";
const router = Router()
import  Daos  from "../Daos/index.js"




router.get("/productos", async (req,res) =>{
    try{
      await Daos.ProductoDao.getAll()
     res.sendStatus(200)
    }catch(error){
      console.log(error)
    }

})
   

router.post("/productos", async (req,res) =>{
      try{
       
      const insert =  await Daos.ProductoDao.Create(req.body)
     res.sendStatus(200)
}catch(error){
      console.log(error)

}
})
    

export default router;