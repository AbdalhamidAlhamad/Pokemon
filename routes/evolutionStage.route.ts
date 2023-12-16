import { Router } from "express";
import {
  createEvolutionStageCtrl,
  deleteEvolutionStageByIdCtrl,
  getEvolutionStageByIdCtrl,
  getEvolutionStagesCtrl,
  updateEvolutionStageByIdCtrl,
} from "../controllers/evolutionStage.controller";

const stageRouter = Router();

stageRouter.post("/", createEvolutionStageCtrl);

stageRouter.get("/", getEvolutionStagesCtrl);

stageRouter.get("/:id", getEvolutionStageByIdCtrl);

stageRouter.delete("/:id", deleteEvolutionStageByIdCtrl);

stageRouter.patch("/:id", updateEvolutionStageByIdCtrl);

export default stageRouter;
