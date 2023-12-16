import { Router } from "express";
import {
  createPokemonCtrl,
  deletePokemonByIdCtrl,
  getPokemonByIdCtrl,
  getPokemonsCtrl,
  updatePokemonByIdCtrl,
} from "../controllers/pokemon.controller";

const pokemonRouter = Router();

pokemonRouter.post("/", createPokemonCtrl);

pokemonRouter.get("/", getPokemonsCtrl);

pokemonRouter.get("/:id", getPokemonByIdCtrl);

pokemonRouter.delete("/:id", deletePokemonByIdCtrl);

pokemonRouter.patch("/:id", updatePokemonByIdCtrl);

export default pokemonRouter;
