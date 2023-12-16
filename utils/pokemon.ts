import EvolutionStage from "../models/evolutionStage.model";
import Family from "../models/family.model";
import Type from "../models/type.model";
import Weather from "../models/weather.model";

type includedParams = {
  familyId?: number;
  evolutionStageId?: number;
  typeId?: number;
  weatherId?: number;
};
export const getIncluded = ({
  familyId,
  evolutionStageId,
  typeId,
  weatherId,
}: includedParams) => {
  const include = [
    {
      model: Family,
      attributes: ["id", "name"],
    //   where: familyId ? { id: familyId } : {},
    },
    {
      model: EvolutionStage,
      attributes: ["id", "name"],
    //   where: evolutionStageId ? { id: evolutionStageId } : {},
    },
    {
      model: Type,
      attributes: ["id", "name"],
      through: { attributes: [] },
    //   where: typeId ? { id: typeId } : {},
    },
    {
      model: Weather,
      attributes: ["id", "name"],
      through: { attributes: [] },
    //   where: weatherId ? { id: weatherId } : {},
    },
  ];

  return include;
};
