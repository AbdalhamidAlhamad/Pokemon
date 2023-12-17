import { Router } from "express";
import {
  createFamilyCtrl,
  deleteFamilyByIdCtrl,
  getFamiliesCtrl,
  getFamilyByIdCtrl,
  updateFamilyByIdCtrl,
} from "../controllers/family.controller";

const familyRouter = Router();

/**
 * @swagger
 * /api/families:
 *   post:
 *     tags: [Families]
 *     summary: Create a new family
 *     description: Create a new family
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FamilyRequest'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

familyRouter.post("/", createFamilyCtrl);

/**
 * @swagger
 * /api/families:
 *   get:
 *     tags: [Families]
 *     summary: Get all families
 *     description: Get all families
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/FamilyResponse'
 *       500:
 *         description: Internal server error
 */
familyRouter.get("/", getFamiliesCtrl);

/**
 * @swagger
 * /api/families/{id}:
 *   get:
 *     tags: [Families]
 *     summary: Get a family by id
 *     description: Get a family by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the family to get
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/FamilyResponse'
 *       404:
 *         description: Family not found
 *       500:
 *         description: Internal server error
 */
familyRouter.get("/:id", getFamilyByIdCtrl);

/**
 * @swagger
 * /api/families/{id}:
 *   delete:
 *     tags: [Families]
 *     summary: Delete a family by id
 *     description: Delete a family by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the family to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Family not found
 *       500:
 *         description: Internal server error
 */
familyRouter.delete("/:id", deleteFamilyByIdCtrl);

/**
 * @swagger
 * /api/families/{id}:
 *   patch:
 *     tags: [Families]
 *     summary: Update a family by id
 *     description: Update a family by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric id of the family to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                  $ref: '#/components/schemas/FamilyRequest'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Family not found
 *       500:
 *         description: Internal server error
 */
familyRouter.patch("/:id", updateFamilyByIdCtrl);

export default familyRouter;
