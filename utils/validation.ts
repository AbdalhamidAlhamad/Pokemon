import Joi from "joi";
import Type from "../models/type.model";
import Weather from "../models/weather.model";

export const validateName = (obj: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });
  return schema.validate(obj);
};

export const validatePokemon = (obj: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    pokedexNumber: Joi.number().integer().required(),
    imgName: Joi.string().min(3).max(50).required(),
    generation: Joi.number().integer().required(),
    evolved: Joi.boolean().required(),
    crossGen: Joi.boolean(),
    evolutionStageId: Joi.number().integer().required(),
    familyId: Joi.number().integer().required(),
    typeIds: Joi.array().items(Joi.number().integer().required()).required().not().empty(),
    weatherIds: Joi.array().items(Joi.number().integer().required()).required().not().empty(),
    atk: Joi.number().integer().required(),
    def: Joi.number().integer().required(),
    sta: Joi.number().integer().required(),
    legendeary: Joi.boolean(),
    aquireable: Joi.boolean().required(),
    spawns: Joi.number().integer().required(),
    regional: Joi.boolean(),
    raidable: Joi.boolean(),
    hatchable: Joi.boolean(),
    shiny: Joi.boolean(),
    nest: Joi.boolean(),
    new: Joi.boolean(),
    notGettable: Joi.boolean(),
    futureEvolve: Joi.boolean(),
    cp40: Joi.number().integer().required(),
    cp39: Joi.number().integer().required(),
  });
  return schema.validate(obj);
};

export const validateTypes = async (types: number[]) => {
  for (const typeId of types) {
    const typeObj = await Type.findByPk(typeId);
    if (!typeObj) {
      return { typeNotFoundError: `Type with id ${typeId} does not exist` };
    }
  }
  return { typeNotFoundError: null };
};


export const validateWeathers = async (weathers: number[]) => {
  for (const weatherId of weathers) {
    const weatherObj = await Weather.findByPk(weatherId);
    if (!weatherObj) {
      return { weatherNotFoundError: `Weather with id ${weatherId} does not exist` };
    }
  }
  return { weatherNotFoundError: null };
};