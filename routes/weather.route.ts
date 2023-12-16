import { Router } from "express";
import {
  createWeatherCtrl,
  deleteWeatherByIdCtrl,
  getWeatherByIdCtrl,
  getAllWeatherCtrl,
  updateWeatherByIdCtrl,
} from "../controllers/weather.controller";

const weatherRouter = Router();

weatherRouter.post("/", createWeatherCtrl);

weatherRouter.get("/", getAllWeatherCtrl);

weatherRouter.get("/:id", getWeatherByIdCtrl);

weatherRouter.delete("/:id", deleteWeatherByIdCtrl);

weatherRouter.patch("/:id", updateWeatherByIdCtrl);

export default weatherRouter;
