import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import Pokemon from "../models/pokemon.model";
import ErrorHandler from "../utils/errorHandler";
import Type from "../models/type.model";
import Weather from "../models/weather.model";
import Family from "../models/family.model";
import EvolutionStage from "../models/evolutionStage.model";
import { validatePokemon } from "../utils/validation";

/*****************************************************
 * @desc    Create a new pokemon
 * @route   POST /api/pokemons
 * @access  public
 * @method  POST
 *****************************************************
 */

export const createPokemonCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validatePokemon(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }

    const { typeIds, weatherIds, ...pokemonData } = req.body;

    const pokemon = await Pokemon.create({
      ...pokemonData,
      statTotal: pokemonData.atk + pokemonData.def + pokemonData.sta,
    });
    await pokemon.setTypes(typeIds);
    await pokemon.setWeather(weatherIds);
    res.status(201).json(pokemon);
  }
);

/*****************************************************
 * @desc    get all pokemons
 * @route   POST /api/pokemons
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getPokemonsCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { page, familyId, evolutionStageId, typeId, weatherId } = req.query;
    const limit = 10;
    const pageNumber = Number(page) || 1;
    const offset = (pageNumber - 1) * limit;
    let where = {};
    if (familyId) {
      where = { ...where, familyId };
    }
    if (evolutionStageId) {
      where = { ...where, evolutionStageId };
    }
    if (typeId) {
      where = { ...where, typeId };
    }
    if (weatherId) {
      where = { ...where, weatherId };
    }
    const pokemons = await Pokemon.findAllIncluded({
      where,
      limit,
      offset,
    });

    const totalPokemons = await Pokemon.count({ where });
    const totalPages = Math.ceil(totalPokemons / limit);
    res.status(200).json({ pokemons, totalPages });
  }
);

/*****************************************************
 * @desc    get pokemon by id
 * @route   GET /api/pokemons/:id
 * @access  public
 * @method  GET
 *****************************************************
 */

export const getPokemonByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const pokemons = await Pokemon.findAllIncluded({
      where: { id: req.params.id },
    });

    const pokemon = pokemons[0];

    if (!pokemon) {
      return next(new ErrorHandler("Pokemon not found", 404));
    }
    res.status(200).json(pokemon);
  }
);

/*****************************************************
 * @desc    delete pokemon by id
 * @route   DELETE /api/pokemons/:id
 * @access  public
 * @method  DELETE
 * *****************************************************
 */

export const deletePokemonByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (!pokemon) {
      return next(new ErrorHandler("Pokemon not found", 404));
    }
    await pokemon.destroy();
    res.status(200).json({ message: "Pokemon deleted successfully", pokemon });
  }
);

/*****************************************************
 * @desc    update pokemon by id
 * @route   PATCH /api/pokemons/:id
 * @access  public
 * @method  PATCH
 *****************************************************
 */

export const updatePokemonByIdCtrl = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (!pokemon) {
      return next(new ErrorHandler("Pokemon not found", 404));
    }
    const { typeIds, weatherIds, ...pokemonData } = req.body;

    // hook beforeUpdate was added to pokemon model to update statTotal
    await pokemon.update(pokemonData);
    if (typeIds) {
      await pokemon.setTypes(typeIds);
    }
    if (weatherIds) {
      await pokemon.setWeather(weatherIds);
    }
    res.status(200).json(pokemon);
  }
);
