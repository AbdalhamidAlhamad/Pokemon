import { Router } from "express";
import {
  createWeatherCtrl,
  deleteWeatherByIdCtrl,
  getWeatherByIdCtrl,
  getAllWeatherCtrl,
  updateWeatherByIdCtrl,
} from "../controllers/weather.controller";

const weatherRouter = Router();

/**
 * @swagger
 * /api/weather:
 *   post:
 *     tags: [Weather]
 *     summary: Create a new weather
 *     description: Create a new weather
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WeatherRequest'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
weatherRouter.post("/", createWeatherCtrl);

/**
 * @swagger
 * /api/weather:
 *   get:
 *     tags: [Weather]
 *     summary: Get all weather
 *     description: Get all weather
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/WeatherResponse'
 *       500:
 *         description: Internal server error
 */
weatherRouter.get("/", getAllWeatherCtrl);

/**
 * @swagger
 * /api/weather/{id}:
 *   get:
 *     tags: [Weather]
 *     summary: Get a weather by id
 *     description: Get a weather by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the weather to get
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/WeatherResponse'
 *       404:
 *         description: Weather not found
 *       500:
 *         description: Internal server error
 */
weatherRouter.get("/:id", getWeatherByIdCtrl);

/**
 * @swagger
 * /api/weather/{id}:
 *   delete:
 *     tags: [Weather]
 *     summary: Delete a weather by id
 *     description: Delete a weather by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the weather to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
weatherRouter.delete("/:id", deleteWeatherByIdCtrl);


/**
 * @swagger
 * /api/weather/{id}:
 *   patch:
 *     tags: [Weather]
 *     summary: Update a weather by id
 *     description: Update a weather by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the weather to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WeatherRequest'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
weatherRouter.patch("/:id", updateWeatherByIdCtrl);

export default weatherRouter;
