import { Router } from "express";
import {
  createFamilyCtrl,
  deleteFamilyByIdCtrl,
  getFamiliesCtrl,
  getFamilyByIdCtrl,
  updateFamilyByIdCtrl,
} from "../controllers/family.controller";

const familyRouter = Router();

familyRouter.post("/", createFamilyCtrl);

familyRouter.get("/", getFamiliesCtrl);

familyRouter.get("/:id", getFamilyByIdCtrl);

familyRouter.delete("/:id", deleteFamilyByIdCtrl);

familyRouter.patch("/:id", updateFamilyByIdCtrl);

export default familyRouter;
