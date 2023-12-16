import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import Weather, { validateWeather } from "../models/weather.model";
import ErrorHandler from "../utils/errorHandler";

/*****************************************************
 * @desc    Create a new weather
 * @route   POST /api/weather
 * @access  public
 * @method  POST
 *****************************************************
 */

export const createWeatherCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateWeather(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }
    const weather = await Weather.create(req.body);
    res.status(201).json(weather);
  }
);

/*****************************************************
 * @desc    Get all weather
 * @route   GET /api/weather
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getAllWeatherCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const weather = await Weather.findAll();
    res.status(200).json(weather);
  }
);

/*****************************************************
 * @desc    Get weather by id
 * @route   GET /api/weather/:id
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getWeatherByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const weather = await Weather.findByPk(req.params.id);
    if (!weather) {
      return next(new ErrorHandler("Weather not found", 404));
    }
    res.status(200).json(weather);
  }
);

/*****************************************************
 * @desc    Delete weather by id
 * @route   DELETE /api/weather/:id
 * @access  public
 * @method  DELETE
 *****************************************************
 */

export const deleteWeatherByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const weather = await Weather.findByPk(req.params.id);
    if (!weather) {
      return next(new ErrorHandler("Weather not found", 404));
    }
    await weather.destroy();
    res.status(200).json({ message: "Weather deleted successfully", weather });
  }
);

/*****************************************************
 * @desc    Update weather by id
 * @route   PUT /api/weather/:id
 * @access  public
 * @method  PUT
 *****************************************************
 */

export const updateWeatherByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateWeather(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }

    const weather = await Weather.findByPk(req.params.id);
    if (!weather) {
      return next(new ErrorHandler("Weather not found", 404));
    }
    await weather.update(req.body);
    res.status(200).json({ message: "Weather updated successfully", weather });
  }
);
