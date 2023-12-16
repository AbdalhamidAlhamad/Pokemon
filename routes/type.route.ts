import { Router } from "express";
import {
  createTypeCtrl,
  deleteTypeByIdCtrl,
  getTypeByIdCtrl,
  getTypesCtrl,
  updateTypeByIdCtrl,
} from "../controllers/type.controller";

const typeRouter = Router();

typeRouter.post("/", createTypeCtrl);

typeRouter.get("/", getTypesCtrl);

typeRouter.get("/:id", getTypeByIdCtrl);

typeRouter.delete("/:id", deleteTypeByIdCtrl);

typeRouter.patch("/:id", updateTypeByIdCtrl);

export default typeRouter;
