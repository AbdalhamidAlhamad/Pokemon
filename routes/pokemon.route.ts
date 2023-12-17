import { Router } from "express";
import {
  createPokemonCtrl,
  deletePokemonByIdCtrl,
  getPokemonByIdCtrl,
  getPokemonsCtrl,
  updatePokemonByIdCtrl,
} from "../controllers/pokemon.controller";

const pokemonRouter = Router();

/**
 * @swagger
 * /api/pokemons:
 *   post:
 *     tags: [Pokemons]
 *     summary: Create a new pokemon
 *     description: Create a new pokemon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PokemonRequest'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
pokemonRouter.post("/", createPokemonCtrl);

/**
 * @swagger
 * /api/pokemons:
 *   get:
 *     tags: [Pokemons]
 *     summary: Get all pokemons
 *     description: Get all pokemons
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: false
 *         description: Page number
 *       - in: query
 *         name: familyId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filter by family ID
 *       - in: query
 *         name: evolutionStageId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filter by evolution stage ID
 *       - in: query
 *         name: typeId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filter by type ID
 *       - in: query
 *         name: weatherId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filter by weather ID
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/PokemonResponse'
 *       500:
 *         description: Internal server error
 */

pokemonRouter.get("/", getPokemonsCtrl);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   get:
 *     tags: [Pokemons]
 *     summary: Get pokemon by id
 *     description: Get pokemon by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pokemon id
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PokemonResponse'
 *       500:
 *         description: Internal server error
 */
pokemonRouter.get("/:id", getPokemonByIdCtrl);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   delete:
 *     tags: [Pokemons]
 *     summary: Delete pokemon by id
 *     description: Delete pokemon by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pokemon id
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
pokemonRouter.delete("/:id", deletePokemonByIdCtrl);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   patch:
 *     tags: [Pokemons]
 *     summary: Update pokemon by id
 *     description: Update pokemon by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pokemon id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PokemonRequest'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
pokemonRouter.patch("/:id", updatePokemonByIdCtrl);

export default pokemonRouter;
