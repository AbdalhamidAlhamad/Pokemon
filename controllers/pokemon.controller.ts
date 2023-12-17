import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import Pokemon from "../models/pokemon.model";
import ErrorHandler from "../utils/errorHandler";
import {
  validatePokemon,
  validateTypes,
  validateWeathers,
} from "../utils/validation";
import { getIncluded } from "../utils/pokemon";

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

    const { typeNotFoundError } = await validateTypes(req.body.typeIds);
    if (typeNotFoundError) {
      return next(new ErrorHandler(typeNotFoundError, 400));
    }

    const { weatherNotFoundError } = await validateWeathers(
      req.body.weatherIds
    );
    if (weatherNotFoundError) {
      return next(new ErrorHandler(weatherNotFoundError, 400));
    }

    const { typeIds, weatherIds, ...pokemonData } = req.body;

    const pokemon = await Pokemon.create({
      ...pokemonData,
      statTotal: pokemonData.atk + pokemonData.def + pokemonData.sta,
    });
    await pokemon.setTypes(typeIds);
    await pokemon.setWeather(weatherIds);
    const include = getIncluded({});
    const newPokemon = await Pokemon.findByPk(pokemon.id, {
      include,
    });
    res.status(201).json(newPokemon);
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
    const { page } = req.query;
    const limit = 10;
    const pageNumber = Number(page) || 1;
    const offset = (pageNumber - 1) * limit;
    const include = getIncluded(req.query);
    const pokemons = await Pokemon.findAndCountAll({
      limit,
      offset,
      include,
      distinct: true,
    });

    const totalPages = Math.ceil(pokemons.count / limit);
    res.status(200).json({ pokemons: pokemons.rows, totalPages });
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
    const include = getIncluded({});
    const pokemon = await Pokemon.findByPk(req.params.id, {
      include,
    });
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

    const include = getIncluded({});
    const updatedPokemon = await Pokemon.findByPk(req.params.id, {
      include,
    });
    res.status(200).json(updatedPokemon);
  }
);
