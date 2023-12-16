import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import Type, { validateType } from "../models/type.model";
import ErrorHandler from "../utils/errorHandler";

/*****************************************************
 * @desc    Create a new type
 * @route   POST /api/types
 * @access  public
 * @method  POST
 *****************************************************
 */

export const createTypeCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateType(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }
    const type = await Type.create(req.body);
    res.status(201).json(type);
  }
);

/*****************************************************
 * @desc    Get all types
 * @route   GET /api/types
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getTypesCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const types = await Type.findAll();
    res.status(200).json(types);
  }
);

/*****************************************************
 * @desc    Get type by id
 * @route   GET /api/types/:id
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getTypeByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const type = await Type.findByPk(req.params.id);
    if (!type) {
      return next(new ErrorHandler("Type not found", 404));
    }
    res.status(200).json(type);
  }
);

/*****************************************************
 * @desc    Delete type by id
 * @route   DELETE /api/types/:id
 * @access  public
 * @method  DELETE
 *****************************************************
 */

export const deleteTypeByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const type = await Type.findByPk(req.params.id);
    if (!type) {
      return next(new ErrorHandler("Type not found", 404));
    }
    await type.destroy();
    res.status(200).json({ message: "Type deleted successfully", type });
  }
);

/*****************************************************
 * @desc    Update type by id
 * @route   PUT /api/types/:id
 * @access  public
 * @method  PUT
 *****************************************************
 */

export const updateTypeByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateType(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }
    const type = await Type.findByPk(req.params.id);
    if (!type) {
      return next(new ErrorHandler("Type not found", 404));
    }
    await type.update(req.body);
    res.status(200).json({ message: "Type updated successfully", type });
  }
);
