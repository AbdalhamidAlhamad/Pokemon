import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import Type from "./type.model";
import Weather from "./weather.model";
import Family from "./family.model";
import EvolutionStage from "./evolutionStage.model";
import { PokemonModelStatic } from "../interfaces/models/pokemon";

const Pokemon = sequelize.define("pokemon", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  pokedexNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imgName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  generation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  evolved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  crossGen: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  atk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  def: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  statTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  legendeary: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  aquireable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  spawns: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  regional: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  raidable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  hatchable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  shiny: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  nest: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  new: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  notGettable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  futureEvolve: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  cp40: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cp39: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}) as PokemonModelStatic;

Pokemon.beforeUpdate((pokemon, options) => {
  if (
    pokemon.changed("atk") ||
    pokemon.changed("def") ||
    pokemon.changed("sta")
  ) {
    pokemon.statTotal = pokemon.atk + pokemon.def + pokemon.sta;
  }
});

Pokemon.findAllIncluded = async function (options = {}) {
  return await Pokemon.findAll({
    ...options,
    include: [
      {
        model: Type,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
      {
        model: Weather,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
      {
        model: Family,
        attributes: ["id", "name"],
      },
      {
        model: EvolutionStage,
        attributes: ["id", "name"],
      },
    ],
    attributes: {
      exclude: ["familyId", "evolutionStageId"],
    },
  });
};

Pokemon.belongsToMany(Type, { through: "PokemonType" });
Pokemon.belongsToMany(Weather, { through: "PokemonWeather" });
Pokemon.belongsTo(Family);
Pokemon.belongsTo(EvolutionStage);
Family.hasMany(Pokemon);
Type.belongsToMany(Pokemon, { through: "PokemonType" });
Weather.belongsToMany(Pokemon, { through: "PokemonWeather" });
EvolutionStage.hasMany(Pokemon);

export default Pokemon;
