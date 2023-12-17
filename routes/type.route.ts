import { Router } from "express";
import {
  createTypeCtrl,
  deleteTypeByIdCtrl,
  getTypeByIdCtrl,
  getTypesCtrl,
  updateTypeByIdCtrl,
} from "../controllers/type.controller";

const typeRouter = Router();

/**
 * @swagger
 * /api/types:
 *   post:
 *     tags: [Types]
 *     summary: Create a new type
 *     description: Create a new type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeRequest'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
typeRouter.post("/", createTypeCtrl);

/**
 * @swagger
 * /api/types:
 *   get:
 *     tags: [Types]
 *     summary: Get all types
 *     description: Get all types
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/TypeResponse'
 *       500:
 *         description: Internal server error
 */
typeRouter.get("/", getTypesCtrl);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Types]
 *     summary: Get a type by id
 *     description: Get a type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the type to get
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/TypeResponse'
 *       404:
 *         description: Type not found
 *       500:
 *         description: Internal server error
 */
typeRouter.get("/:id", getTypeByIdCtrl);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Types]
 *     summary: Delete a type by id
 *     description: Delete a type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the type to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
typeRouter.delete("/:id", deleteTypeByIdCtrl);

/**
 * @swagger
 * /api/types/{id}:
 *   patch:
 *     tags: [Types]
 *     summary: Update a type by id
 *     description: Update a type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the type to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeRequest'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
typeRouter.patch("/:id", updateTypeByIdCtrl);

export default typeRouter;
