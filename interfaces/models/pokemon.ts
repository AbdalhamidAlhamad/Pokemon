import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface PokemonModel
  extends Model<
    InferAttributes<PokemonModel>,
    InferCreationAttributes<PokemonModel>
  > {
  id: CreationOptional<number>;
  name: string;
  pokedexNumber: number;
  imgName: string;
  generation: number;
  evolved: boolean;
  crossGen: boolean;
  atk: number;
  def: number;
  sta: number;
  statTotal: number;
  legendeary: boolean;
  aquireable: boolean;
  spawns: number;
  regional: boolean;
  raidable: boolean;
  hatchable: boolean;
  shiny: boolean;
  nest: boolean;
  new: boolean;
  notGettable: boolean;
  futureEvolve: boolean;
  cp40: number;
  cp39: number;
  setTypes: (types: number[]) => Promise<void>;
  setWeather: (weather: number[]) => Promise<void>;
}



export default PokemonModel;
