import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import EvolutionStage from "../models/evolutionStage.model";
import ErrorHandler from "../utils/errorHandler";
import { validateName } from "../utils/validation";

/*****************************************************
 * @desc    Create a new evolution stage
 * @route   POST /api/stages
 * @access  public
 * @method  POST
 *****************************************************
 */
export const createEvolutionStageCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateName(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }

    const evolutionStage = await EvolutionStage.create(req.body);
    res.status(201).json(evolutionStage);
  }
);

/*****************************************************
 * @desc    Get all evolution stages
 * @route   GET /api/stages
 * @access  public
 * @method  GET
 *****************************************************
 */
export const getEvolutionStagesCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const stages = await EvolutionStage.findAll();
    res.status(200).json(stages);
  }
);

/*****************************************************
 * @desc    Get evolution stage by id
 * @route   GET /api/stages/:id
 * @access  public
 * @method  GET
 *****************************************************
 */
export const getEvolutionStageByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const stage = await EvolutionStage.findByPk(req.params.id);
    if (!stage) {
      return next(new ErrorHandler("Stage not found", 404));
    }
    res.status(200).json(stage);
  }
);

/*****************************************************
 * @desc    Delete evolution stage by id
 * @route   DELETE /api/stages/:id
 * @access  public
 * @method  DELETE
 *****************************************************
 */
export const deleteEvolutionStageByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const stage = await EvolutionStage.findByPk(req.params.id);
    if (!stage) {
      return next(new ErrorHandler("Stage not found", 404));
    }
    await stage.destroy();
    res.status(200).json({
      message: "Stage deleted successfully",
      stage,
    });
  }
);

/*****************************************************
 * @desc    Update evolution stage by id
 * @route   PATCH /api/stages/:id
 * @access  public
 * @method  PATCH
 *****************************************************
 */
export const updateEvolutionStageByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateName(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }
    const stage = await EvolutionStage.findByPk(req.params.id);
    if (!stage) {
      return next(new ErrorHandler("Stage not found", 404));
    }
    await stage.update(req.body);
    res.status(200).json(stage);
  }
);
