import EvolutionStage from "../../models/evolutionStage.model";
import Family from "../../models/family.model";
import Pokemon from "../../models/pokemon.model";
import Type from "../../models/type.model";
import Weather from "../../models/weather.model";

export const familyOne = {
  id: 1,
  name: "Family One Test",
};

export const stageOne = {
  id: 1,
  name: "Stage One Test",
};

export const typeOne = {
  id: 1,
  name: "Type One Test",
};

export const weatherOne = {
  id: 1,
  name: "Weather One Test",
};

export const pokemonOne = {
  id: 1,
  name: "Pikamon Jest",
  pokedexNumber: 243,
  imgName: "pikamon.png",
  generation: 7,
  evolved: false,
  crossGen: false,
  evolutionStageId: 1,
  familyId: 1,
  statTotal: 381,
  atk: 149,
  def: 108,
  sta: 124,
  legendeary: true,
  aquireable: false,
  spawns: 91,
  regional: false,
  raidable: false,
  hatchable: false,
  shiny: true,
  nest: true,
  new: false,
  notGettable: false,
  futureEvolve: true,
  cp40: 1439,
  cp39: 1410,
};
export const setUpDatabase = async () => {
  try {
    await Pokemon.destroy({ where: {}, force: true });
    await Family.destroy({ where: {}, force: true });
    await EvolutionStage.destroy({ where: {}, force: true });
    await Type.destroy({ where: {}, force: true });
    await Weather.destroy({ where: {}, force: true });

    await Family.create(familyOne);
    await EvolutionStage.create(stageOne);
    await Type.create(typeOne);
    await Weather.create(weatherOne);
    const pokemon = await Pokemon.create(pokemonOne);
    await pokemon.setTypes([1]);
    await pokemon.setWeather([1]);
  } catch (error) {
    console.log(error);
  }
};
