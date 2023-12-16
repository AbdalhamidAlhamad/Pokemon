import Joi from "joi";

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
    typeIds: Joi.array().items(Joi.number().integer()).required(),
    weatherIds: Joi.array().items(Joi.number().integer()).required(),
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
