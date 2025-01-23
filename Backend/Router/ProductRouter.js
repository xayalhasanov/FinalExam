import { Router } from "express";
import { ProductControllers } from "../Controllers/ProductControllers.js";


export let route=new Router()



route.get("/",ProductControllers.GetAll)
route.get("/:id",ProductControllers.GetById)
route.delete("/:id",ProductControllers.Deleteproduct)
route.post("/",ProductControllers.Postproduct)