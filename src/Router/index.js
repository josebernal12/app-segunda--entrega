import { Router } from "express";
const router = Router()
import  Daos  from "../Daos/index.js"



router.get("/productos", async (req,res) =>{
    await Daos.ProductoDao.getall()
    
     res.sendStatus(200)

})
   

router.post("/productos", async (req,res) =>{
      await Daos.ProductoDao.CreateDoc(req.body)
  
      res.sendStatus(200)

})
    

export default router;