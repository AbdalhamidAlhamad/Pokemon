import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import Family, { validateFamily } from "../models/family.model";
import ErrorHandler from "../utils/errorHandler";

/*****************************************************
 * @desc    Create a new family
 * @route   POST /api/families
 * @access  public
 * @method  POST
 *****************************************************
 */

export const createFamilyCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateFamily(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }
    const family = await Family.create(req.body);
    res.status(201).json(family);
  }
);

/*****************************************************
 * @desc    Get all families
 * @route   GET /api/families
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getFamiliesCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const families = await Family.findAll();
    res.status(200).json(families);
  }
);

/*****************************************************
 * @desc    Get family by id
 * @route   GET /api/families/:id
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getFamilyByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const family = await Family.findByPk(req.params.id);
    if (!family) {
      return next(new ErrorHandler("Family not found", 404));
    }
    res.status(200).json(family);
  }
);

/*****************************************************
 * @desc    Delete family by id
 * @route   DELETE /api/families/:id
 * @access  public
 * @method  DELETE
 *****************************************************
 */

export const deleteFamilyByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const family = await Family.findByPk(req.params.id);
    if (!family) {
      return next(new ErrorHandler("Family not found", 404));
    }
    await family.destroy();
    res.status(200).json({ message: "Family deleted successfully", family });
  }
);

/*****************************************************
 * @desc    Update family by id
 * @route   PUT /api/families/:id
 * @access  public
 * @method  PUT
 *****************************************************
 */

export const updateFamilyByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateFamily(req.body);
    
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }

    const family = await Family.findByPk(req.params.id);

    if (!family) {
      return next(new ErrorHandler("Family not found", 404));
    }
    await family.update(req.body);
    res.status(200).json({ message: "Family updated successfully", family });
  }
);
