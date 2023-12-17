import { Router } from "express";
import {
  createEvolutionStageCtrl,
  deleteEvolutionStageByIdCtrl,
  getEvolutionStageByIdCtrl,
  getEvolutionStagesCtrl,
  updateEvolutionStageByIdCtrl,
} from "../controllers/evolutionStage.controller";

const stageRouter = Router();

/**
 * @swagger
 * /api/stages:
 *   post:
 *     tags: [EvolutionStages]
 *     summary: Create a new evolution stage
 *     description: Create a new evolution stage
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EvolutionStageRequest'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
stageRouter.post("/", createEvolutionStageCtrl);

/**
 * @swagger
 * /api/stages:
 *   get:
 *     tags: [EvolutionStages]
 *     summary: Get all evolution stages
 *     description: Get all evolution stages
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/EvolutionStageResponse'
 *       500:
 *         description: Internal server error
 */
stageRouter.get("/", getEvolutionStagesCtrl);

/**
 * @swagger
 * /api/stages/{id}:
 *   get:
 *     tags: [EvolutionStages]
 *     summary: Get an evolution stage by id
 *     description: Get an evolution stage by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the evolution stage to get
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/EvolutionStageResponse'
 *       404:
 *         description: Stage not found
 *       500:
 *         description: Internal server error
 */
stageRouter.get("/:id", getEvolutionStageByIdCtrl);

/**
 * @swagger
 * /api/stages/{id}:
 *   delete:
 *     tags: [EvolutionStages]
 *     summary: Delete a evolution stage by id
 *     description: Delete a evolution stage by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the evolution stage to delete
 *         schema:
 *           type: integer
 *
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Family not found
 *       500:
 *         description: Internal server error
 */
stageRouter.delete("/:id", deleteEvolutionStageByIdCtrl);

/**
 * @swagger
 * /api/stages/{id}:
 *   patch:
 *     tags: [EvolutionStages]
 *     summary: Update a evolution stage by id
 *     description: Update a evolution stage by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the evolution stage to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EvolutionStageRequest'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/EvolutionStageResponse'
 *       404:
 *         description: Evolution stage not found
 *       500:
 *         description: Internal server error
 */
stageRouter.patch("/:id", updateEvolutionStageByIdCtrl);

export default stageRouter;
